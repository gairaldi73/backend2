import mariadb from "mariadb";

const pool = mariadb.createPool({
host: '127.0.0.1',
user: 'root',
password: 'bianca2022',
database: 'agenda',
port: 3306,
connectionLimit: 5,
debug: true,
});

async function consulta(){
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("select * from usuarios");
        console.log(rows);
        const res = await conn.query("insert into usuarios values ('Lore', 'lore1234')");
        console.log(res);
        } catch(error){
            console.log();
        }finally{
            if (conn){
                return conn.end();

            }
        }
}
consulta();

pool.query('select 1 + 1 as solution', (error, results, fields) => {
    if (error) {
        throw error;
    }
    console.log('el resultado es:' + results[0].solution);

});