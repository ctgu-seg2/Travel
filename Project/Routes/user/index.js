// import modules
const express = require('express');
const lines = require('./lines');//业务代码
//router
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('../../static/user/home.html', {title: 'home'}, function(err, html) {
        //console.log(html);
        if(err) {
            throw err;
        }
        res.send(html);
    })
    next();
})  
//.../lines?type=out&sort=hot&num=6
//type={out,in,island,self}
//sort={hot,recent}
//num={1~10}
router.get('/top-products', async(req, res, next) => {
    // var type = req.query.type;
    // var sort = req.query.sort;
    // var num = req.query.num;
    var data = await lines.getLines(req.query.type,req.query.sort,req.query.limit,(data)=>{      
        res.send(data);
    }); 
    //console.log(data);
})

module.exports = router;