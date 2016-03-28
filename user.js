var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = new Schema ({
    userName:
    {
        type: String,
        required: true
    },
    firstName:
    {
        type: String,
        required: true
    },
    lastName:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    }
});
var UserModel = mongoose.model("UserModel", User);
module.exports = UserModel;