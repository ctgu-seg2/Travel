// import modules
const express = require('express');
const products = require('./products')
//router
const router = express.Router();

router.use('/top-products', products)

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

module.exports = router;