// Connect Node to MySQL.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "password",
    database: "burgers_db"
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