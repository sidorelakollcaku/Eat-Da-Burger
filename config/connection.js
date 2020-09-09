// Connect Node to MySQL.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createonnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
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