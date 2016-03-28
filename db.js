var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/admin_page");
var db = mongoose.connection;
module.exports = db;