import {Request, Response} from "express";
//import {getAll, insertarUsuario, getById} from "../services/usuario.service";
import {getAll, getById, insertarUsuario, deleteUsuario, updateUsuario} from "../repositories/usuario.repository";
import {Usuario} from "../models/usuario";

const altaUsuario = (req: Request, res: Response) => {
   if (!req.body.nombre || !req.body.apellido) {
    res.status(400).end("Nombre y apellido requeridos");
   }else{
    const usuario = new Usuario(req.body.nombre, req.body.apellido);
    insertarUsuario(usuario);
    res.status(201).end("Usuario guardado con éxito");
   }
};

const consultaUsuarios = async (req: Request, res: Response) => {
    const usuarios = await getAll();
    //console.log(usuarios);
    res.json(usuarios);
};

const consultaPorId = async(req: Request, res: Response) => {
    const usuario = await getById(+req.params.id);
    console.log(usuario);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).end("Usuario no encontrado");
    }
};

const deletePorId = async (req: Request, res: Response) =>{
    const cant = await deleteUsuario(+req.params.id);
    if (cant ===0) {
        res.status(404).end("No se encontró el usuario");
    } else {
        res.end("Usuario borrado con éxito");
    }
    };
const update = async (req: Request, res: Response) => {
    const usuario = new Usuario(req.body.id, req.body.nombre, req.body.apellido);
    const cant = await updateUsuario(usuario);
    if (cant ===0) {
        res.status(404).end("No se encontró el usuario");
    } else {
        res.end("Usuario actualizado");
    }
};
export {consultaUsuarios, altaUsuario, consultaPorId, deletePorId, update};
