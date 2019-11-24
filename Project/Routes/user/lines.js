const sqlite3 = require('sqlite3').verbose();  
require('dotenv').config({ path: '../../config' })

//使用绝对路径，用读写模式打开可以成功访问数据库
//如果路径上没有，会创建一个空的内存数据库
//var db = new sqlite3.Database('E:/Willian_pc/Git/CTGUTravel/Project/database/travel.db',sqlite3.OPEN_READWRITE, (err) => {
//./表示当前，目录，但这里可以连通
var db = new sqlite3.Database('./database/travel.db', sqlite3.OPEN_READWRITE, (err) => {
        //var db = new sqlite3.Database(process.env.DATABASE_DIR, sqlite3.OPEN_READWRITE,(err) => {
    if(err) {
        return console.error(err.message);
    }   

    console.log('Connect to the database!');
});

const getTopLines = (type, sort, limit, days, callback) => { 
    
    let data = []
    let sql_days = db.prepare(`SELECT  * FROM Line WHERE ? <= days and days <= ? order by ? desc limit ?`);
    let sql_type = db.prepare(`SELECT  * FROM Line WHERE lineTypeID == ? order by ? desc limit ?`);
    let _type;  
    let _sort;
    var mindays,maxdays;

    if (type == 'all') __type = '00';
    if (type == 'in') _type = '01';
    if (type == 'out') _type = '02';
    if (type == 'island') _type = '03';
    if (type == 'self') _type = '04';

    if (sort == 'fresh') _sort = 'onTime';
    if (sort == 'hot') _sort = 'hot';

    if (days == -1) {//-1表示没有限制几日游
        mindays = '1';
        maxdays = '9';
    } else {
        mindays = days;
        maxdays = days;
    }
    db.serialize(() => {//串行,在外面就是并行    
        if (days != undefined) {
            sql_days.each(
                [             
                    mindays,
                    maxdays,
                    _sort,//'hot',
                    limit//6
                ], (err, row) => {
                if(err) {
                    throw err;
                } else {
                    data.push(row)
                }
            }, (err, count) => {
                if(err) throw err;
                else {
                    callback(data)
                }
            });
        } else {
            sql_type.each([_type, _sort, limit], (err, row) => {
                if(err) throw err;
                else data.push(row)
            }, (err, count) => {
                if(err) throw err;
                else callback(data)
            });
        } 
    });
}


module.exports = {
    getTopLines: getTopLines
}