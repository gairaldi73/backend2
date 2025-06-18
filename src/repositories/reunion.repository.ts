import * as mysql from "mysql2";
import { Reunion } from "../models/reunion";
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
    .query<RowDataPacket[]>("SELECT * FROM reuniones");
  return row;
};
const getById = async (id: number) => {
  const [rows] = await conn
    .promise()
    .query<RowDataPacket[]>("SELECT * FROM reuniones WHERE id = ${id}", [id]);
  return rows[0];
};

const insertarReunion = async (reunion: Reunion) => {
  const [fields] = await conn
    .promise()
    .query<ResultSetHeader>(
      "INSERT INTO reuniones (id, nombre, fecha, hora, duracion, participantes, detalle) VALUES (?,?,?,?,?,?,?)",
      [reunion.id, reunion.nombre, reunion.fecha, reunion.hora, reunion.duracion, reunion.participantes, reunion.detalle]
    );
};
const deleteReunion = async (id: number) => {
  const [fields] = await conn
    .promise()
    .query<ResultSetHeader>("DELETE FROM reuniones WHERE id = ?", [id]);
  return fields.affectedRows;
};

const updateReunion = async (reunion: Reunion) => {
  const [fields] = await conn
    .promise()
    .query<ResultSetHeader>(
      "UPDATE reuniones SET nombre = ?, fecha = ?, hora = ?, duracion = ?, participantes = ?, detalle = ? WHERE id = ?",
      [reunion.nombre, reunion.fecha, reunion.hora, reunion.duracion, reunion.participantes, reunion.detalle]
    );
  return fields.affectedRows;
};

export { getAll, getById, insertarReunion, deleteReunion, updateReunion };
