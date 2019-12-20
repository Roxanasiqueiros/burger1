let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    password: 8890,
    port: 3306,
    user: "root",
    database: "burger_db"

});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;