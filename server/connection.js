var mysql = require('mysql');

var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:'colegios'
});

con.on('error', function(err) {
    console.log("[mysql error]", err);
});

module.exports = con;