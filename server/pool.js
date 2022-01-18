// 钟瑞
// 这是连接池，本地版，如果上线，需要修改数据

const mysql = require('mysql');
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'tpp',
    connectionLimit: 15
})
module.exports = pool;