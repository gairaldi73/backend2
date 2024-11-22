import mysql from "mysql2";

const conn = mysql.createConnection({
host: "127.0.0.1",
user: "root",
password: "bianca2022",
database: "agenda",
port: 3306,
});

conn.query(
    "select * from usuarios where username like ?", ['%ró%'],
    (errors, results, field) => {
    if (errors) {
        throw errors;
    }
    console.log(results);

});