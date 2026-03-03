var mysql2 = require('mysql2');
var db = require('mysql-promise')();
var opts = {
	"host": "localhost",
	"user": "supundi",
	"password": "apple$123",
	"database": "Todo_app"
};

db.configure(opts, require('mysql2'));

module.exports = db;