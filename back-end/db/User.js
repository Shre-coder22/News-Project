const mongoose = require('mongoose');
require('./Config');

const userSchema = mongoose.Schema({
    name:String,
    mail:String,
    pass:String
});

module.exports = mongoose.model("users",userSchema)