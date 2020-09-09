// Connect Node to MySQL.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "bnf3sezrbroz05c9",
    port: 3306,
    password: "pct3ja3xg8pbwota",
    database: "evnor8favndlcvn2"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  } else
    console.log("Connected as ID: " + connection.threadId);
});

// Export the connection.
module.exports = connection;