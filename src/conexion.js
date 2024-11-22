import mysql from "mysql";

const connection = mysql.createConnection({
host: '127.0.0.1',
user: 'root',
password: 'bianca2022',
database: 'agenda',
port: 3306,
});

connection.connect();

connection.query('select 1 + 1 as solution', (error, results, fields) => {
    if (error) {
        throw error;
    }
    console.log('el resultado es:' + results[0].solution);

});