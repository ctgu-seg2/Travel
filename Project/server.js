const express = require('express');
const app = express();

// static files
app.use(express.static('./public'));

// import modules
const Routers = require('./routes');

// middleware
app.use('/api', Routers.api);
app.use('/user', Routers.user);





app.get('/', (req, res) => {
    res.send('This is the default webpage!');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Listening ', port, '...'); 
});
