let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    password: c505r775xqol4pk3,
    port: 3306,
    user: "sb5otb3a56uqn4r6",
    database: "nyku70joareue10j"

});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;