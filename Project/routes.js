// all routes


const Api_Route = require('./routes/user/api');
const User_Route = require('./routes/user/user');

module.exports = {
    api: Api_Route,
    user: User_Route
}
