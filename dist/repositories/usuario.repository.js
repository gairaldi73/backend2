"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsuario = exports.deleteUsuario = exports.insertarUsuario = exports.getById = exports.getAll = void 0;
const mysql = __importStar(require("mysql2"));
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
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const [row, fields] = yield conn
        .promise()
        .query("SELECT * FROM usuarios");
    return row;
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield conn
        .promise()
        .query("SELECT * FROM usuarios WHERE id = ${id}", [id]);
    return rows[0];
});
exports.getById = getById;
const insertarUsuario = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const [fields] = yield conn
        .promise()
        .query("INSERT INTO usuarios (id, username, password) VALUES (?,?,?)", [500, usuario.username, usuario.password]);
});
exports.insertarUsuario = insertarUsuario;
const deleteUsuario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [fields] = yield conn
        .promise()
        .query("DELETE FROM usuarios WHERE id = ?", [id]);
    return fields.affectedRows;
});
exports.deleteUsuario = deleteUsuario;
const updateUsuario = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const [fields] = yield conn
        .promise()
        .query("UPDATE usuarios SET username = ?, password = ? WHERE id = ?", [usuario.username, usuario.password, usuario.id]);
    return fields.affectedRows;
});
exports.updateUsuario = updateUsuario;
