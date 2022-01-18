// 谢婷婷-路由--未完成：修改注释
// 放购票模块的路由  /v1/buy
const express = require("express");
//引入连接池模块
const pool = require("../pool.js");
//创建路由器对象
const r = express.Router();
//使用中间件将post请求的参数（body）转为对象，req.body
r.use(express.urlencoded({
    extended: false,
}));

// 1.胡琳龙城市的数据vue-city  http://127.0.0.1:3000/v1/buy/city
// 已完成
r.get("/city", (req, res, next) => {
    pool.query("select * from cities", (err, result) => {
        if (err) {
            next(err);
            return;
        }
        // console.log(result);
        //查询的结果是数组，如果是空数组说明查询失败，否则说明查询成功
        if (result.length === 0) {
            res.send({ code: 201, msg: "查询失败" });
        } else {
            res.send({ code: 200, msg: "查询成功", data: result });
        }
    });
});

// 2.1胥立栋首页的电影数据vue-home（get /home/:page）
// 接口地址：http://127.0.0.1:3000/v1/buy/home?page=1
// 接口地址：http://127.0.0.1:3000/v1/buy/home
// 请求方式：get
r.get("/home", (req, res, next) => {
    var obj = req.query;
    pool.query(
        `select movie_detail.did 电影id,movie_detail.title 电影名,avg(score) 电影平均分 ,aname 导演 ,fmpic ,movie_detail.play_time 上映时间 from movie_detail left join comment on movie_detail.did=comment.detailid   left join movie_actor on movie_actor.detailid=movie_detail.did group by comment.detailid limit ?,5`, [obj.page * 5 - 5],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            //查询的结果是数组，如果是空数组说明登录失败，否则说明登录成功
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});

// 2.2 胥立栋首页的电影数据的演员vue-home（get /yanyuan）
// 接口地址：http://127.0.0.1:3000/v1/buy/yanyuanname/2
r.get("/yanyuanname/:id", (req, res, next) => {
    var obj = req.params;
    pool.query(
        `select movie_actor.aid 序号,movie_actor.aname 演员姓名,movie_actor.detailid 演员所属电影,movie_actor.ac_type 演员类型 from movie_actor where movie_actor.detailid=?`, [obj.id],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            //查询的结果是数组，如果是空数组说明登录失败，否则说明登录成功
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// 胥立栋根据电影id拿到演员数组
http: //127.0.0.1:3000/v1/buy/actorshu/2
    r.get("/actorshu/:id", (req, res, next) => {
        var obj = req.params;
        console.log(obj);
        pool.query(
            `select aid 演员id,aname,detailid 电影id from movie_actor where detailid=? `, [obj.id],
            (err, result) => {
                if (err) {
                    next(err);
                    return;
                }
                console.log(result);
                //查询的结果是数组，如果是空数组说明登录失败，否则说明登录成功
                if (result.length === 0) {
                    res.send({ code: 201, msg: "没有请求到数据" });
                } else {
                    res.send({ code: 200, msg: "请求成功", data: result });
                }
            }
        );
    });

// 3.胥立栋的电影影院数据vue-choosecinema（get /choosecinema）
//请求方式：get
// 接口地址：http://127.0.0.1:3000/v1/buy/choosecinema
// 接口地址：http://127.0.0.1:3000/v1/buy/choosecinema?movid=1&page=1
r.get("/choosecinema", (req, res, next) => {
    var obj = req.query;
    console.log(obj);
    let time1 = new Date();
    let timenow = time1.getTime();
    console.log(timenow);
    pool.query(
        // `select cinema.*,min(cinema_movie.price) 最低价格,min(cinema_movie.show_time) 最近场次,away from cinema left join cinema_movie on cinema.cinema_id=cinema_movie.cmid where cinema_movie.show_time>?  group by cinema_id limit ?,8`, [timenow, obj.page *8 -8],
        `select cm_id 场次id,cmid 影院id,cinema.*,min(cinema_movie.price) 最低价格,min(cinema_movie.show_time) 最近场次 from cinema_movie left join cinema on cmid=cinema_id  where cinema_movie.show_time>? and movid = ?  group by cmid  limit ?,8`, [timenow, obj.movid, obj.page * 8 - 8],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            //查询的结果是数组，如果是空数组说明登录失败，否则说明登录成功
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// 3.111胥立栋的电影影院数据vue-choosecinemanull（get /choosecinema）
//请求方式：get
// 接口地址：http://127.0.0.1:3000/v1/buy/choosecinemanull
// 接口地址：http://127.0.0.1:3000/v1/buy/choosecinemanull?page=1
r.get("/choosecinemanull", (req, res, next) => {
    var obj = req.query;
    let time1 = new Date();
    let timenow = time1.getTime();
    console.log(timenow);
    pool.query(
        // `select cinema.*,min(cinema_movie.price) 最低价格,min(cinema_movie.show_time) 最近场次 away from cinema left join cinema_movie on cinema.cinema_id=cinema_movie.cmid where cinema_movie.show_time>?  group by cinema_id limit ?,8`, [timenow, obj.page *8 -8],
        `select cm_id 场次id,cmid 影院id,cinema.*,min(cinema_movie.price) 最低价格 from cinema_movie left join cinema on cmid=cinema_id  where cinema_movie.show_time>?   group by cmid  limit ?,8`, [timenow, obj.page * 8 - 8],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            //查询的结果是数组，如果是空数组说明登录失败，否则说明登录成功
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// http://127.0.0.1:3000/v1/buy/choosecinemajiang
r.get("/choosecinemajiang", (req, res, next) => {
    var obj = req.query;
    pool.query(

        `select movie_detail.did 电影id,movie_detail.title 电影名,avg(score) 电影平均分 ,aname 导演 ,fmpic ,movie_detail.play_time 上映时间 from movie_detail left join comment on movie_detail.did=comment.detailid   left join movie_actor on movie_actor.detailid=movie_detail.did group by comment.detailid order by movie_detail.play_time`,
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            //查询的结果是数组，如果是空数组说明登录失败，否则说明登录成功
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// 4.1 胥立栋的选择场次-外边的影院情况vue-choosesite 传影院
// 接口地址：http://127.0.0.1:3000/v1/buy/choosesitemovieid
// 不要请求服务器了，从上一页拿数据

// 4.2.胥立栋的选择对应电影的场次-组件 vue-ChooseSite.vue（get /choosesite）
//请求方式：get  传入->电影id:movieid和影院id:cinemaid

// 接口地址：http://127.0.0.1:3000/v1/buy/choosesite
// http://127.0.0.1:3000/v1/buy/choosesite?movieid=1&cinemaid=1
// select cinema_movie.cm_id,cinema_id 影院id, movie_detail.did 影片序号 ,movie_detail.title 影片名,movie_detail.title_eng 英文影片名,avg(score) 电影平均分,movie_detail.long_time 影片时长,movie_detail.play_time 上映日期,movie_detail.tag 标签,aname 导演姓名,movie_detail.fmpic 封面图,  cinema_movie.show_time 放映时刻,cinema_movie.yt 影厅 ,cinema_movie.price 票价,cinema_movie.yt_type 影厅类型  from cinema_movie left join cinema on cinema.cinema_id= cmid  left join movie_detail on movie_detail.did=cinema_movie.movid  left join comment on did=comment.detailid  left join movie_actor on movie_actor.detailid=movie_detail.did  where cmid=1 and movid=1 and ac_type='导演'  group by cm_id order by show_time
r.get("/choosesite", (req, res, next) => {
    var obj = req.query;
    console.log(obj);
    let time = new Date()
    let time1 = time.getTime()
    pool.query(
        `select cinema_movie.cm_id 场次id,cinema_id 影院id, movie_detail.did 影片序号 ,movie_detail.title 影片名,movie_detail.title_eng 英文影片名,avg(score) 电影平均分,movie_detail.long_time 影片时长,movie_detail.play_time 上映日期,movie_detail.tag 标签,aname 导演姓名,movie_detail.fmpic 封面图,  cinema_movie.show_time 放映时刻,cinema_movie.yt 影厅 ,cinema_movie.price 票价,cinema_movie.yt_type 影厅类型  from cinema_movie left join cinema on cinema.cinema_id= cmid  left join movie_detail on movie_detail.did=cinema_movie.movid  left join comment on did=comment.detailid  left join movie_actor on movie_actor.detailid=movie_detail.did  where cmid=? and movid=? and ac_type='导演' and cinema_movie.show_time>?  group by cm_id order by show_time`, [obj.cinemaid, obj.movieid, time1],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            //查询的结果是数组，如果是空数组说明登录失败，否则说明登录成功
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "成功拿到xtt的一大把头发", data: result });
            }
        }
    );
});

// 4.王丽君拿影院详情vue-cinemadetails（get /cinemadetails/1）
// 接口地址：http://127.0.0.1:3000/v1/buy/cinemadetails/1
r.get("/cinemadetails/:id", (req, res, next) => {
    var obj = req.params;
    pool.query(
        `select cinema_id 序号,cinema_name 影院名,addr 影院地址, cinema_tag 影院标签 ,away 距离 from cinema  where cinema_id=?`, [obj.id],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            // console.log(result);
            //查询的结果是数组，如果是空数组说明登录失败，否则说明登录成功
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// 简单的，尽量不用->接口地址：http://127.0.0.1:3000/v1/buy/cinemadetails
r.get("/cinemadetails", (req, res, next) => {
    var obj = req.body;
    pool.query(
        `select cinema_id 序号,cinema_name 影院名,addr 影院地址, cinema_tag 影院标签  from cinema  `,
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            // console.log(result);
            //查询的结果是数组，如果是空数组说明登录失败，否则说明登录成功
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});

// 5.王丽君拿确认订单页vue-firmorder（get /firmorder）
// 接口地址：http://127.0.0.1:3000/v1/buy/firmorder/1  传入电影场次id
// select cinema_movie.cm_id 影厅id,title,show_time,long_time,yt,yt_type,did 电影id from cinema_movie left join movie_detail on did= movid where cm_id=2275
r.get("/firmorder/:id", (req, res, next) => {
    var obj = req.params;
    // console.log(obj)
    pool.query(
        `select cinema_movie.cm_id,fmpic,movie_detail.title,cinema_movie.show_time,movie_detail.long_time,cinema_movie.yt,cinema_movie.yt_type,movie_detail.did 电影id,cinema_name,addr,fmpic,cinema_id 影院id,cinema_name 影院名字,addr 影院地址 from cinema_movie left join movie_detail on cinema_movie.movid=movie_detail.did  left join cinema on cinema.cinema_id=cinema_movie.cmid where cm_id=?`, [obj.id],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            // console.log(result);
            //查询的结果是数组，如果是空数组说明登录失败，否则说明登录成功
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// 6.王丽君我的页vue-me（get ）
// 接口地址：http://127.0.0.1:3000/v1/buy/me/1  传入用户id
r.get("/me/:id", (req, res, next) => {
    var obj = req.params;
    pool.query(`select * from user where u_id=?`, [obj.id], (err, result) => {
        if (err) {
            next(err);
            return;
        }
        // console.log(result);
        //
        if (result.length === 0) {
            res.send({ code: 201, msg: "没有请求到数据" });
        } else {
            res.send({ code: 200, msg: "请求成功", data: result });
        }
    });
});

// 查找name有没有被使用
//  get  http://127.0.0.1:3000/v1/buy/name
r.get("/name/:name", (req, res, next) => {
    var obj = req.params;
    // console.log(obj)
    pool.query(
        `select * from user where uname=?`, [obj.name],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            // console.log(result);
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有数据" });
            } else {
                res.send({ code: 200, msg: "有这个人", data: result });
            }
        }
    );
});

// 7.王丽君的注册接口
// post
// 接口地址：http://127.0.0.1:3000/v1/buy/register
r.post("/register", (req, res, next) => {
    var obj = req.body;
    console.log(obj);
    // 查询手机号是否存在
    pool.query("select * from user where uphone =?", [obj.phone],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(obj)
            console.log(result);
            if (result.length > 0) {
                // 说明有这个手机号,那就登录试试
                res.send({ code: 201, msg: "手机号存在", data: result });
            } else {
                // 没有这个手机号
                pool.query("insert into `user` (`u_id`, `uname`, `upic`, `uphone`, `upwd`) VALUES (null,?,'/img/touxiang/014.jpg',?,?)", [obj.uname, obj.phone, obj.password],
                    (err, result) => {
                        if (err) {
                            next(err);
                            return;
                        }
                        // console.log(result);
                        //查询的结果是数组，如果是空数组说明注册失败，否则说明注册成功
                        if (result.affectId === 0) {
                            res.send({ code: 204, msg: "异常问题请联系管理员，注册失败" });
                        } else {
                            res.send({ code: 200, msg: "注册成功", data: result });
                        }
                    }
                );

            }
        }
    );

});
// post  登录
// 接口地址：http://127.0.0.1:3000/v1/buy/login
r.post("/login", (req, res, next) => {
    var obj = req.body;
    console.log(obj);
    // 查询手机号是否存在
    pool.query("select * from user where uphone =?", [obj.phone],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(obj)
            console.log(result);
            if (result.length > 0) {
                // 说明有这个手机号,那就登录试试
                pool.query("select * from user where uphone=? and upwd=?", [obj.phone, obj.password],
                    (err, result) => {
                        if (err) {
                            next(err);
                            return;
                        }
                        // console.log(result);
                        //查询的结果是数组，如果是空数组说明注册失败，否则说明注册成功
                        if (result.length === 0) {
                            res.send({ code: 201, msg: "手机号有，密码没有" });
                        } else {
                            res.send({ code: 200, msg: "用户登录成功", data: result });
                        }
                    }
                );

            } else {
                res.send({ code: 203, msg: "没有这个手机号", data: result });
            }
        }
    );

});

// 8.王丽君的修改用户名或者密码
// post
// 接口地址：http://127.0.0.1:3000/v1/buy/change
// name=  &password=  &upwd=  
r.get("/change", (req, res, next) => {
    var obj = req.query;
    console.log(obj);
    pool.query("update user set uname=?,upwd=?  where u_id=?", [obj.name, obj.password, obj.id], (err, result) => {
                    if (err) {
                        next(err);
                        return;
                    }
                    console.log(result);
                    if (result.changedRows === 0) {
                        res.send({ code: 201, msg: "修改失败" });
                    } else {
                        res.send({ code: 200, msg: "修改成功", data: result });
                    }
                });
            })    
        
    
// .谢婷婷的所有影院数据vue-choosecinema（get /choosecinema）
//请求方式：get
// 接口地址：http://127.0.0.1:3000/v1/buy/choosecinemas
r.get("/choosecinemas/:id", (req, res, next) => {
    var obj = req.params;
    pool.query(
        `select * from cinema where cinema_id=?`, [obj.id],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// .谢婷婷的一个影院的图片
//请求方式：get
// 接口地址：http://127.0.0.1:3000/v1/buy/choosecinemaspic/1
r.get("/choosecinemaspic/:id", (req, res, next) => {
    var obj = req.params;

    pool.query(
        `select cinema_movie.cmid 影院表id,title,movid 电影表id,fmpic from cinema_movie left join movie_detail on movid=did where cmid=? group by movid`, [obj.id],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// 胡琳龙，发表一条评论
// post  人的id,电影id,评论内容
r.post("/pinglun", (req, res, next) => {
    var obj = req.body;
    console.log(obj);
    let time = new Date()
    let b1 = new String(time)
    let b2 = b1.slice(0, 19)
    let a1 = "2021-12-25 10:30:00"
    console.log(a1)
        // 查询手机号是否存在
    pool.query("insert into `comment`( `title`, `score`, `xsdz`, `pltime`, `detailid`, `userid`) VALUES (?,?,0,?,?,?)", [obj.wenzi, obj.score, obj.a1, obj.movieid, obj.userid], (err, result) => {
        if (err) {
            next(err);
            return;
        }
        console.log(result);
        //查询的结果是数组，如果是空数组说明注册失败，否则说明注册成功
        if (result.affectId === 0) {
            res.send({ code: 201, msg: "评论失败" });
        } else {
            res.send({ code: 200, msg: "评论成功", data: result });
        }
    });
})

// 谢婷婷 根据用户id拿到电影票的数据
// 接口地址：http://127.0.0.1:3000/v1/buy/dianyingpiao?uid=1
r.get("/dianyingpiao", (req, res, next) => {
    let obj = req.query;
    console.log(obj)
    pool.query(
        `select mytid 序号, cinema_movie.show_time 放映时间,title 电影名 ,cinema_name,fmpic,yt 影厅,yt_type 影厅类型, sta 票的状态, gitticket 取票码, seatplace 座位, many 票数几张 from tickets left join cinema_movie on tickets.cm_id=cinema_movie.cm_id  left join movie_detail on movie_detail.did = movid left join cinema on cinema_id=cinema_movie.cmid where tickets.did=?  order by sta desc ,cinema_movie.show_time`, [obj.uid],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// 拿椅子数据seat
r.get("/seat", (req, res, next) => {
    pool.query(
        `select * from seat`,
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// 改椅子数据seatchange
r.get("/seatchange", (req, res, next) => {
    let obj = req.query;
    console.log(obj)
    pool.query(
        `update seat set sstatus=? where seat=?`,[obj.status,obj.name],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            if (result.changedRows === 0) {
                res.send({ code: 201, msg: "没有任何改变" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// 谢婷婷 插入一条数据
// 接口地址：http://127.0.0.1:3000/v1/buy/buyhao
// cm_id=1 did=1 seatplace=2排1座 many=1 momeym=99.8
r.post("/buyhao", (req, res, next) => {
    let obj = req.body;
    console.log(obj)
    console.log(Math.random());
    pool.query(
        `insert into tickets values (null,?,?,?,?,?,?,?)`, [obj.cm_id, obj.did, "未使用", obj.hao, obj.seatplace, obj.many, obj.moneym],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            if (result.affectedRows === 0) {
                res.send({ code: 201, msg: "错误" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// 根据用户id和场次id拿到电影票的数据
// 接口地址：http://127.0.0.1:3000/v1/buy/piaopiao?id=20
r.get("/piaopiao", (req, res, next) => {
    let obj = req.query;
    console.log(obj)
    pool.query(
        `select mytid 序号, cinema_movie.show_time 放映时间,title 电影名 ,fmpic 封面图,cinema_name 电影院名,addr 影院地址,moneym,yt 影厅,yt_type 影厅类型, sta 票的状态, gitticket 取票码, seatplace 座位, many 票数几张 from tickets left join cinema_movie on tickets.cm_id=cinema_movie.cm_id  left join movie_detail on movie_detail.did= movid left join cinema on  cinema.cinema_id=cinema_movie.cmid  where mytid=? `, [obj.id],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);

            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});

// 根据  
// 接口地址：http://127.0.0.1:3000/v1/buy/choosesiteo
r.get("/choosesiteo/:id", (req, res, next) => {
    let obj = req.params;
    console.log(obj)
    pool.query(
        `select cinema_movie.*,cinema.cinema_id,movie_detail.title,cinema.cinema_name from cinema_movie left join cinema on cinema_movie.cmid=cinema.cinema_id left join movie_detail on movid=did where cm_id=?`, [obj.id],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            if (result.length === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// get 退票
// 接口地址：http://127.0.0.1:3000/v1/buy/tui/1
r.get("/tui/:id", (req, res, next) => {
    let obj = req.params;
    console.log(obj)
    pool.query(
        `update tickets set sta="已退款" where mytid =?`, [obj.id],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            if (result.changedRows === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});
// get 退票
// 接口地址：http://127.0.0.1:3000/v1/buy/shiyong/1
r.get("/shiyong/:id", (req, res, next) => {
    let obj = req.params;
    console.log(obj)
    pool.query(
        `update tickets set sta="已使用" where mytid =?`, [obj.id],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            if (result.changedRows === 0) {
                res.send({ code: 201, msg: "没有请求到数据" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});

// get 插入一条优惠券
// 接口地址：http://127.0.0.1:3000/v1/buy/gift
r.get("/gift", (req, res, next) => {
    let obj = req.query;
    console.log(obj)
    pool.query(
        `insert into yhq values (null,6,0,"2021-12-29 16:30",1,"6元电影代金券",?)`, [obj.id],
        (err, result) => {
            if (err) {
                next(err);
                return;
            }
            console.log(result);
            if (result.affectedRows == 0) {
                res.send({ code: 201, msg: "失败" });
            } else {
                res.send({ code: 200, msg: "请求成功", data: result });
            }
        }
    );
});




module.exports = r;