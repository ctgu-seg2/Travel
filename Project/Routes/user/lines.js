const sqlite3 = require('sqlite3').verbose();  
require('dotenv').config({ path: '../../config' })

//使用绝对路径，用读写模式打开可以成功访问数据库
//如果路径上没有，会创建一个空的内存数据库
var db = new sqlite3.Database('E:/Willian_pc/Git/CTGUTravel/Project/database/travel.db',sqlite3.OPEN_READWRITE, (err) => {
//var db = new sqlite3.Database(process.env.DATABASE_DIR, sqlite3.OPEN_READWRITE,(err) => {
    if(err) {
        return console.error(err.message);
    }   

    console.log('Connect to the database!');
});

function getLines(type,sort,num){
    var data = new Array();
    db.serialize(() => {//串行
        //db.each('SELECT * FROM $table ', {$table:'Line'},(err, row) => {
        db.each('SELECT * FROM Line',(err, row) => {
            if(err) {
                throw err;
            }
            data.push(row);
            console.log(row.lineID + '/t', row.lineName, row.lineTypeID);
        });
    });
    console.log(data.length);
    return data;
 }
module.exports = {
    getLines:getLines
}