"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = exports.insertarUsuario = exports.getAll = void 0;
const usuarios = [];
let index = 0;
const getAll = () => {
    return usuarios;
};
exports.getAll = getAll;
const insertarUsuario = (usuario) => {
    usuario.id = ++index;
    usuarios.push(usuario);
};
exports.insertarUsuario = insertarUsuario;
const getById = (id) => {
    return usuarios.find(usuario => {
        return usuario.id === id;
    });
};
exports.getById = getById;
