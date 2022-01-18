const express = require("express")
//创建web服务器
const app = express()

const jwt = require("jsonwebtoken")
const key = "my key"

const buyRouter = require("./routes/buy.js")
const detailRouter = require("./routes/detail.js")
const yhqRouter = require("./routes/yhq.js")

//设置端口
app.listen(3000, () => {
  console.log("服务器启动成功")
})
//使用中间件将post请求的参数(body)转为对象
app.use(
  express.urlencoded({
    extended: false,
  })
)

// 加载CORS模块// 使用CORS中间件
const cors = require("cors")
app.use(cors())
// app.use(cors({
//     origin: ['http://localhost:3000', 'http://127.0.0.1:3000']
// }));

// 载入模块
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
//     next()
// })

// 加载cors模块解决跨域问题
// const cors = require('cors')
app.use(cors())

app.get("/verifytoken", (req, res) => {
  // 获取Authorization消息头
  // console.log(req)
  let token = req.headers.authorization
  // 验证token 获取token中存储的payload数据
  jwt.verify(token, key, (err, decoded) => {
    console.warn(err)
    console.log(decoded)
    res.send("OK")
  })
})
app.get("/gettoken", (req, res) => {
  // 基于jsonwebtoken模块 生成token 将token返回给客户端
  let payload = {
    name: "张三",
    userId: 1003,
    exp: Date.now() / 1000 + 3600 * 24,
  }
  let token = jwt.sign(payload, key)
  res.send({
    result: "OK",
    token,
  })
})
const captcha = require("svg-captcha")
let redis = {}

/** 接收请求，返回验证码图片  获取验证码svg图片 推荐使用svg-captcha */
app.get("/getcode", (req, res) => {
  // 生成验证码
  let cap = captcha.create()
  console.log("正确答案：" + cap.text)

  // 从请求消息头中解析token字符串，验证成功后执行后续业务
  let token = req.headers.authorization
  // 验证token 获取token中存储的payload数据
  jwt.verify(token, key, (err, decoded) => {
    console.warn(err)
    if (err != null) {
      // token验证失败
      res.send({ code: 406, msg: "验证码获取失败，刷新重试" })
      return
    }
    // token验证成功
    // 将token与正确答案，绑定在一起存入redis数据
    redis[token] = cap.text
    console.log("当前redis：", redis)
    res.send({ svg: cap.data })
  })
})
/** 验证验证码是否一致 */
app.get("/register", (req, res) => {
  let ucode = req.query.ucode // 获取参数：用户输入的验证码
  // 正确答案需要通过token去redis中获取
  let token = req.headers.authorization
  jwt.verify(token, key, (err, decoded) => {
    console.warn(err)
    if (err != null) {
      // token验证失败
      res.send("刷新重试")
      return
    }
    // token验证成功
    let answer = redis[token]
    if (ucode.toLowerCase() == answer.toLowerCase()) {
      res.send({ code: 200, msg: "验证码正确" })
    } else {
      res.send({ code: 406, msg: "验证码错误" })
    }
  })
})

//使用路由器，给所有路由添加前缀
app.use("/v1/buy", buyRouter)
app.use("/v1/details", detailRouter)
app.use("/v1/yhq", yhqRouter)

//添加错误处理中间件，拦截路由中的错误
app.use((err, req, res, next) => {
  console.log(err) //打印路由传递过来的错误
  res.status(500).send({ code: 500, msg: "服务器端错误" })
})
