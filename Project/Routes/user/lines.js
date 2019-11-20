const sqlite3 = require('sqlite3').verbose();  
require('dotenv').config({ path: '../../config' })

//使用绝对路径，用读写模式打开可以成功访问数据库
//如果路径上没有，会创建一个空的内存数据库
//var db = new sqlite3.Database('E:/Willian_pc/Git/CTGUTravel/Project/database/travel.db',sqlite3.OPEN_READWRITE, (err) => {
//./表示当前，目录，但这里可以连通
var db = new sqlite3.Database('./database/travel.db',sqlite3.OPEN_READWRITE, (err) => {
        //var db = new sqlite3.Database(process.env.DATABASE_DIR, sqlite3.OPEN_READWRITE,(err) => {
    if(err) {
        return console.error(err.message);
    }   

    console.log('Connect to the database!');
});

function getLines(type,sort,num,callback){ 
    let data = []
    db.serialize(() => {//串行,在外面就是并行
        db.each('SELECT * FROM Line',(err, row) => {
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
        }
        );
    });  
 }

//  function getLines(type,sort,num){ 

//      getLinesData(type,sort,num,(data)=>{
//         console.log(data);
//         return data;
//      });
//  }


//  function getLines(type,sort,num){ 
//     db.serialize(() => {//串行,在外面就是并行
//         var data = new Array();
//         var n = 0;
//         //db.each('SELECT * FROM $table ', {$table:'Line'},(err, row) => {
//         db.each('SELECT * FROM Line',(err, row) => {
//             if(err) {
//                 throw err;
//             }
//             //data.push(row);
//             //console.log(row.lineID, row.lineName, row.lineTypeID);
//             data[n++] = row;
//         });
//         console.log('data:'+data);
//         console.log('data length:'+data.length);
//         console.log('n:'+n);
//         return data;
//     });  
//  }
module.exports = {
    getLines:getLines
}