/*
 * 创建产品的资源业务逻辑实现
 *
 * 
 *
 * 
 * 
 * 
 * Author: 余文童
 * 
*/

const express = require('express')
const lines = require('./lines');//业务代码
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.get('/', async (req, res, next) => {
    var data = await lines.getTopLines(
        req.query.type, 
        req.query.sort,
        req.query.limit,
        req.query.daynum,
        ( data ) => {      
            res.json(data)
    }) 
})



module.exports = router