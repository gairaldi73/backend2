import mysql from "mysql2";
async function main(){
const conn = mysql.createConnection({
host: "127.0.0.1",
user: "root",
password: "bianca2022",
database: "agenda",
port: 3306,
});

//Store procedure
const connProm = conn.promise();
const [rows, fields] = await connProm.execute(
    "CALL get_all_usuarios()"
    );
    console.log(rows);
    console.log(fields);
}
main();