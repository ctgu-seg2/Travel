// const express = require('express');
// const router = express.Router();
// const sqlite3 = require('sqlite3').verbose();  

// let db = new sqlite3.Database('./DB/sqlite.db', (err) => {
//     if(err) {
//         return console.error(err.message);
//     }
//     console.log('Connect to the database!');
// });

// router.get('/', (req, res) => {
//     var data;
//     var is = false;
//     db.serialize(() => {
//         db.each('SELECT * FROM demo', (err, row) => {
//             if(err) {
//                 throw err;
//             }
//             // if(is==false){
//             //     data = row;
//             //     is = true;
//             // }
//             console.log(row.id + '\t', row.name, row.hint);
//         });
//     });
//     res.send(data);
// });

// module.exports = router;