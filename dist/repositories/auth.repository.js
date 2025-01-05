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
exports.getByUsernameAndPassword = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const conn = mysql2_1.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB,
    port: process.env.DB_PORT ? +process.env.DB_PORT : 3306,
});
function getByUsernameAndPassword(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield conn
            .promise()
            .query('select * from usuarios where username = ? and password = ?', [username, password]);
        return rows[0];
    });
}
exports.getByUsernameAndPassword = getByUsernameAndPassword;
