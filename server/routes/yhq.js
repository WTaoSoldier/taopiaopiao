// 放购票模块的路由  /v1/yhq
const express = require("express");
//引入连接池模块
const pool = require("../pool.js");
//创建路由器对象
const r = express.Router();
//使用中间件将post请求的参数（body）转为对象，req.body
r.use(express.urlencoded({
        extended: false,
    })
);

// 1.vue-city  
// http://127.0.0.1:3000/v1/yhq/you?yhq_id=1
// 已完成
r.get("/you", (req, res, next) => {
  let obj=req.query
  pool.query("select * from yhq where userid=?",[obj.yhq_id], (err, result) => {
      if (err) {
          next(err);
          return;
      }
      if (result.length === 0) {
          res.send({ code: 201, msg: "查询失败" });
      } else {
          res.send({ code: 200, msg: "查询成功", data: result });
      }
  });
});



module.exports = r;