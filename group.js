var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Group = new Schema({
    name:
    {
        type: String,
        required: true
    },
    title:
    {
        type: String,
        required: true
    }
});
var GroupModel = mongoose.model("GroupModel", Group);
