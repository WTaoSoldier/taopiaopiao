// 亮哥的
const express = require("express")
//引入用户路由器
const userRouter = require("./routes/user.js")
//console.log(userRouter);
//创建WEB服务器
const app = express()
//设置端口
app.listen(8080, () => {
  console.log("服务器启动成功！！！")
})
//使用中间件将post请求的参数(body)转为对象
app.use(
  express.urlencoded({
    extended: false,
  })
)
//使用用户路由器，给所有路由添加前缀/v1/users
app.use("/v1/users", userRouter)

//添加错误处理中间件，拦截路由中的错误
app.use((err, req, res, next) => {
  console.log(err) //打印路由传递过来的错误
  res.status(500).send({ code: 500, msg: "服务器端错误" })
})
