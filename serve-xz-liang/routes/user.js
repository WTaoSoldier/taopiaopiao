const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器对象
const r=express.Router();
//添加路由
//1.注册用户(post /reg)
//接口地址：http://127.0.0.1:8080/v1/users/reg
//请求方式：post
r.post('/reg',(req,res,next)=>{
  //1.1获取post传递(body)的参数
  var obj=req.body;
  console.log(obj);
  //1.2判断各项是否为空
  if(!obj.uname){//===''
    res.send({code:401,msg:'用户名不能为空'});
	return;//阻止往后执行
  }
  //验证各项是否为空
  if(!obj.upwd){
    res.send({code:402,msg:'密码不能为空'});
	return;
  }
  if(!obj.email){
    res.send({code:403,msg:'邮箱不能为空'});
	return;
  }
  if(!obj.phone){
    res.send({code:404,msg:'手机不能为空'});
	return;
  }
  //验证手机号码格式
  //如果格式错误
  if(!/^1[3-9]\d{9}$/.test(obj.phone)){
    res.send({code:405,msg:'手机号码格式错误'});
	return;
  }
  //1.3执行SQL命令
  pool.query('insert into xz_user set?',[obj],(err,result)=>{
    if(err){
	  //交给下一个中间件
	  next(err);
	  return;//阻止往后执行
	}
	console.log(result);
    res.send({code:200,msg:'注册成功'});
  }); 
});
//注册结束
//2.用户登录(post /login)
//接口地址：http://127.0.0.1:8080/v1/users/login
//请求方式：post
r.post('/login',(req,res,next)=>{
  //2.1获取post传递的参数
  var obj=req.body;
  console.log(obj);
  //2.2验证各项是否为空
  if(!obj.uname){
    res.send({code:401,msg:'用户名不能为空'});
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'密码不能为空'});
	return;
  }
  //2.3执行SQL命令
  pool.query('select * from xz_user where uname=? and upwd=?',[obj.uname,obj.upwd],(err,result)=>{
    if(err){
	  next(err);
	  return;
	}
	console.log(result);
	//查询的结果是数组，如果是空数组说明登录失败，否则说明登录成功
	if(result.length===0){
	  res.send({code:201,msg:'登录失败'});
	}else{
	  res.send({code:200,msg:'登录成功'});
	}
  });  
});
//登录结束
//3.删除用户(delete /编号)
//接口地址：http://127.0.0.1:8080/v1/users/4
//请求方式：delete
r.delete('/:uid',(req,res,next)=>{
  //3.1获取路由传递的值
  var obj=req.params;
  console.log(obj);
  //3.2执行SQL命令
  pool.query('delete from xz_user where uid=?',[obj.uid],(err,result)=>{
    if(err){
	  next(err);
	  return;
	}
	console.log(result);
	//结果是对象，如果对象下的affectedRows的值是0说明删除失败，否则删除成功
	if(result.affectedRows===0){
	  res.send({code:201,msg:'删除失败'});
	}else{
	  res.send({code:200,msg:'删除成功'});
	}
  });  
});
//4.修改用户(put /)
//接口地址：http://127.0.0.1:8080/v1/users
//请求方式：put
r.put('/',(req,res,next)=>{
  //4.1获取post(body)传递的参数
  var obj=req.body;
  console.log(obj);
  //4.2判断各项是否为空 
  var i=400;//状态码初始值
  for(var k in obj){
	i++;//状态码加1
	//k 属性名  obj[k] 属性值
    //console.log(k,obj[k]);
	//如果属性值为空，提示属性名这项不能为空
	if(!obj[k]){
	  res.send({code:i,msg:k+'不能为空'});
	  return;
	}
  }
  //4.3执行SQL命令
  pool.query('update xz_user set? where uid=?',[obj,obj.uid],(err,result)=>{
    if(err){
	  next(err);
	  return;
	}
	console.log(result);
	//结果是对象，如果对象下的affectedRows为0说明修改失败，否则修改成功
	if(result.affectedRows===0){
	  res.send({code:201,msg:'修改失败'})
	}else{
	  res.send({code:200,msg:'修改成功'});
	}
  });
  
});



//导出路由器对象
module.exports=r;