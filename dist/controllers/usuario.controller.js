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
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.deletePorId = exports.consultaPorId = exports.altaUsuario = exports.consultaUsuarios = void 0;
//import {getAll, insertarUsuario, getById} from "../services/usuario.service";
const usuario_repository_1 = require("../repositories/usuario.repository");
const usuario_1 = require("../models/usuario");
const altaUsuario = (req, res) => {
    if (!req.body.nombre || !req.body.apellido) {
        res.status(400).end("Nombre y apellido requeridos");
    }
    else {
        const usuario = new usuario_1.Usuario(req.body.nombre, req.body.apellido);
        (0, usuario_repository_1.insertarUsuario)(usuario);
        res.status(201).end("Usuario guardado con éxito");
    }
};
exports.altaUsuario = altaUsuario;
const consultaUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield (0, usuario_repository_1.getAll)();
    //console.log(usuarios);
    res.json(usuarios);
});
exports.consultaUsuarios = consultaUsuarios;
const consultaPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield (0, usuario_repository_1.getById)(+req.params.id);
    console.log(usuario);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).end("Usuario no encontrado");
    }
});
exports.consultaPorId = consultaPorId;
const deletePorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cant = yield (0, usuario_repository_1.deleteUsuario)(+req.params.id);
    if (cant === 0) {
        res.status(404).end("No se encontró el usuario");
    }
    else {
        res.end("Usuario borrado con éxito");
    }
});
exports.deletePorId = deletePorId;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = new usuario_1.Usuario(req.body.id, req.body.nombre, req.body.apellido);
    const cant = yield (0, usuario_repository_1.updateUsuario)(usuario);
    if (cant === 0) {
        res.status(404).end("No se encontró el usuario");
    }
    else {
        res.end("Usuario actualizado");
    }
});
exports.update = update;
