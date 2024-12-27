import * as mysql from "mysql2";
import { Usuario } from "../models/usuario";
import {
  ResultSetHeader,
  RowDataPacket,
} from "../../node_modules/mysql2/index";

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB,
  port: process.env.DB_PORT ? +process.env.DB_PORT : 3306,
});

/*
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB,
  dialect: process.env.DB_DIALECT,
  port: +process.env.DB_PORT,
*/
const getAll = async () => {
  const [row, fields] = await conn
    .promise()
    .query<RowDataPacket[]>("SELECT * FROM usuarios");
  return row;
};
const getById = async (id: number) => {
  const [rows] = await conn
    .promise()
    .query<RowDataPacket[]>("SELECT * FROM usuarios WHERE id = ${id}", [id]);
  return rows[0];
};

const insertarUsuario = async (usuario: Usuario) => {
  const [fields] = await conn
    .promise()
    .query<ResultSetHeader>(
      "INSERT INTO usuarios (id, username, password) VALUES (?,?,?)",
      [500, usuario.username, usuario.password]
    );
};
const deleteUsuario = async (id: number) => {
  const [fields] = await conn
    .promise()
    .query<ResultSetHeader>("DELETE FROM usuarios WHERE id = ?", [id]);
  return fields.affectedRows;
};

const updateUsuario = async (usuario: Usuario) => {
  const [fields] = await conn
    .promise()
    .query<ResultSetHeader>(
      "UPDATE usuarios SET username = ?, password = ? WHERE id = ?",
      [usuario.username, usuario.password, usuario.id]
    );
  return fields.affectedRows;
};

export { getAll, getById, insertarUsuario, deleteUsuario, updateUsuario };
