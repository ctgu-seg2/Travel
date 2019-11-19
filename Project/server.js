// import modules
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const Routers = require('./routes');
// static files
app.use(express.static('./static'));



// middleware
app.use('/api', Routers.api);
app.use('/user', Routers.user);





// app.get('/', (req, res) => {
//     res.send('This is the default webpage!');
// });

// 设置views文件夹，即模板文件夹，__dirname是node.js里面的全局变量，
// 即取得执行的js所在的路径，另外__dirname是目前执行的js文件名,是设置views的文件夹。
//参考： https://blog.csdn.net/qq_31411389/article/details/53673792
app.set('views', __dirname+'/static/user');
//通过中间插件指定使用的模板引擎
app.set( 'view engine', 'ejs' );
//app.engine( '.html', ejs.__express );//__express还未查明作用
//ejs内置的方法，配置当扩展名为html时候调用ejs进行渲染
app.engine('.html',ejs.renderFile)  
app.get('/', function(req, res) {
    res.render(__dirname+'/static/user/home.html', {title: 'home'}, function(err, html) {
        //console.log(html);
        res.send(html);
    })
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Listening ', port, '...'); 
});
