"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_service_1 = require("../services/usuario.service");
const usuario_1 = require("../models/usuario");
const altaUsuario = (req, res) => {
    if (!req.body.nombre || req.body.apellido) {
        res.status(400).end("Nombre y apellido requeridos");
    }
    else {
        const usuario = new usuario_1.Usuario(req.body.nombre, req.body.apellido);
        (0, usuario_service_1.insertarUsuario)(usuario);
        res.status(201).end("Usuario guardado con éxito");
    }
};
const consultaUsuarios = (req, res) => {
    res.json((0, usuario_service_1.getAll)());
};
