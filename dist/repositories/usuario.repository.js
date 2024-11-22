"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsuario = exports.deleteUsuario = exports.insertarUsuario = exports.getById = exports.getAll = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const conn = mysql2_1.default.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "bianca2022",
    database: "agenda",
    port: 3306
});
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
        .query('SELECT * FROM usuarios WHERE id = ${id}', [id]);
    return rows[0];
});
exports.getById = getById;
const insertarUsuario = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const [fields] = yield conn.promise().query('INSERT INTO usuarios (id, username, password) VALUES (?,?,?)', [
        500,
        usuario.username,
        usuario.password
    ]);
});
exports.insertarUsuario = insertarUsuario;
const deleteUsuario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [fields] = yield conn
        .promise()
        .query('DELETE FROM usuarios WHERE id = ?', [id]);
    return fields.affectedRows;
});
exports.deleteUsuario = deleteUsuario;
const updateUsuario = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const [fields] = yield conn.promise().query('UPDATE usuarios SET username = ?, password = ? WHERE id = ?', [usuario.username, usuario.password, usuario.id]);
    return fields.affectedRows;
});
exports.updateUsuario = updateUsuario;
