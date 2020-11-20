const mysql = require ('mysql');
const mysqlConnection = mysql.createConnection ({
  host:'bezoffode5qwgunacuvu-mysql.services.clever-cloud.com',
  user:'ux8tkycfpqeueaw0',
  password:'McpLkZJIBXwSJsa1yhNG',
  database:'bezoffode5qwgunacuvu',
  multipleStatements:true
});


mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Base de Datos conectada!');
  }
});

module.exports = mysqlConnection;