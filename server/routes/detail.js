// 钟瑞-路由
// 放详情和评论模块的路由  /detail
const express = require('express');
//引入连接池模块
const pool = require('../pool.js')
//创建路由器对象
const r = express.Router();
//使用中间件将post请求的参数（body）转为对象，req.body
r.use(express.urlencoded({
    extended: false
}))

// 以下为测试
// 1.电影简介接口（get /home）
//接口地址：http://127.0.0.1:3000/v1/details/home
//请求方式：get
r.get('/home', (req, res) => {
    // 获取地址栏中id的参数
    let id = req.query.did
    let seed=req.query.seed;
    // sql语句获取影片详情
    let sql ='SELECT did,title,fmpic,long_time,play_time,place,tuijian,tag,jieshao,count(seed) AS cseed FROM movie_detail INNER JOIN want ON detailid=did where did=? and seed="想看"'
    pool.query(sql, [id,seed], (error, results) => {
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
})


// 2.全部剧照接口
//http://127.0.0.1:3000/v1/details/images?detailid=?
r.get('/images', (req, res) => {
    // 获取地址栏中id的参数
    let id = req.query.detailid;
    // sql语句获取海报详情
    let sql = 'SELECT * from photo where detailid=? ';
    pool.query(sql, [id], (error, results) => {
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
})

// 7.海报剧照分类接口
//http://127.0.0.1:3000/v1/details/image?detailid=?&picfl='?'
r.get('/image', (req, res) => {
    // 获取地址栏中id的参数
    let id = req.query.detailid;
    let picfl = req.query.picfl;
    // sql语句获取海报详情
    let sql = 'SELECT * from photo where detailid=? and picfl=? ';
    pool.query(sql, [id, picfl], (error, results) => {
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
})

// 3.前三评论接口
//http://127.0.0.1:3000/v1/details/comment
r.get('/comment', (req, res) => {
    // 获取地址栏中id的参数
    let id = req.query.detailid
    // sql语句获取评论详情
    let sql = "SELECT cid,title,score,xsdz,pltime,uname,upic FROM comment INNER JOIN user ON userid=u_id where detailid=? LIMIT 3";

    pool.query(sql, [id], (error, results) => {
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
})

// 全部评论接口
r.get('/all_comment', (req, res) => {
    // 获取地址栏中id的参数
    let id = req.query.detailid
    // sql语句获取评论详情
    let sql = "SELECT cid,title,score,xsdz,pltime,uname,upic FROM comment INNER JOIN user ON userid=u_id where detailid=?";

    pool.query(sql, [id], (error, results) => {
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
})

//  满星评论接口
//http://127.0.0.1:3000/v1/details/score_comment
r.get('/score_comment', (req, res) => {
    // 获取地址栏中id的参数
    let id = req.query.detailid
    // sql语句获取评论详情
    let sql = "SELECT cid,title,score,xsdz,pltime,uname,upic FROM comment INNER JOIN user ON userid=u_id where detailid=? and  score=10 ";

    pool.query(sql, [id], (error, results) => {
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
})

// 最新评论接口
//http://127.0.0.1:3000/v1/details/new_comment
r.get('/new_comment', (req, res) => {
    // 获取地址栏中id的参数
    let id = req.query.detailid
    // sql语句获取评论详情
    let sql = "SELECT cid,title,score,xsdz,pltime,uname,upic FROM comment INNER JOIN user ON userid=u_id where detailid=?  order by pltime desc";

    pool.query(sql, [id], (error, results) => {
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
})

// 4.演员简介接口
//http://127.0.0.1:3000/v1/details/actor?aid=?
r.get('/actor', (req, res) => {
    // 获取地址栏中id的参数
    let id = req.query.aname
    // sql语句获取演员详情
    let sql = "SELECT aname,eng_name,birth,act_add,act_pic,jianjie,ac_type FROM movie_actor WHERE aname=? limit 1";

    pool.query(sql, [id], (error, results) => {
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
})
// 演员参演电影接口
//http://127.0.0.1:3000/v1/details/actor_movie?aid=?
r.get('/actor_movie', (req, res) => {
    // 获取地址栏中id的参数
    console.log(req.query)
    let id = req.query.aname
    // sql语句获取演员详情
    let sql = "select did,title,fmpic,act_pic,jianjie,play_time,aid,aname,ac_type from movie_detail INNER JOIN movie_actor ON did=detailid where aname=?";

    pool.query(sql, [id], (error, results) => {
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
})

// 5.视频接口
//http://127.0.0.1:3000/v1/details/video?detailid=?
r.get('/video', (req, res) => {
    // 获取地址栏中id的参数
    let id = req.query.detailid
    // sql语句获取演员详情
    let sql = "SELECT * FROM movie_video WHERE detailid=?";

    pool.query(sql, [id], (error, results) => {
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
})

// 6.演职人员接口
//http://127.0.0.1:3000/v1/details/actors?detailid=?
r.get('/actors', (req, res) => {
    // 获取地址栏中id的参数
    let id = req.query.detailid
    // sql语句获取演员详情
    let sql = "SELECT aid,aname,act_pic,ac_type FROM movie_actor WHERE detailid=?";

    pool.query(sql, [id], (error, results) => {
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
})

// 想看接口 get 用户id 电影id 
//http://127.0.0.1:3000/v1/details/want?userid=?
r.get('/want', (req, res) => {
   let id=req.query.userid;
   let sql = "SELECT wid,seed,detailid,userid,u_id from want INNER JOIN user ON u_id=userid WHERE userid=?";

   pool.query(sql, [id], (error, results) => {
       if (error) throw error;
       // 返回数据到客户端
       res.send({
           message: 'ok',
           code: 200,
           result: results
       })
   });
})

// 增
//http://127.0.0.1:3000/v1/details/want_insert
r.post('/want_insert', (req, res) => {
    var obj = req.body;
    console.log(obj);
    pool.query("insert into `want` (`seed`,`detailid`,`userid`) VALUES(?,?,?)", [obj.seed,obj.detailid,obj.userid], (error, results) => {
        console.log(error);
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
 })

//  删
//http://127.0.0.1:3000/v1/details/movie_delete?userid=16 and detailid=1
r.delete('/movie_delete', (req, res) => {
    let id=req.query.userid;
    let did=req.query.detailid
    pool.query("delete from want where userid=? and detailid=?",[id,did], (error, results) => {
        if (error) throw error;
        // 返回数据到客户端
        res.send({
            message: 'ok',
            code: 200,
            result: results
        })
    });
 })


module.exports = r;