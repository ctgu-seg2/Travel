// all routes


const Api_Route = require('./routes/user/api');
const User_Route = require('./routes/user/user');
const Index_Route = require('./routes/user/index');
const Products_Route = require('./routes/user/products');
module.exports = {
    api: Api_Route,
    user: User_Route,
    index:Index_Route,
    products:Products_Route
}
