const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "46.185.114.91",
    port: "3306",
    user: "Maykun",
    database: "vitek",
    password: "123456789d",
});

connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    let sql = `INSERT INTO clients (name, age) VALUES ('lagodron', '13')`;
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(`success`);
    });
    connection.query(
        "SELECT * FROM clients",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
    connection.end(function(err) {
        if (err) {
          return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
      });
});
