import mysql from "mysql2/promise";
async function main(){
const conn = await mysql.createConnection({
host: "127.0.0.1",
user: "root",
password: "bianca2022",
database: "agenda",
port: 3306,
});

const [rows, fields] = await conn.execute(
    "select * from usuarios where username like ?", ['%ró%'],
    );
    console.log(rows);
    console.log(fields);
}
main();