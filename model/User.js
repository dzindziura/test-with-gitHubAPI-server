const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {
       type: String,
       required: true, 
    },
    followers: {
        type: Number,
        required: true,
    },
    blog: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    public_repos: {
        type: Number
    }
});

module.exports = mongoose.model('User', userSchema);