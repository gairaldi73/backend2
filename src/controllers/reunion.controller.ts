import {Request, Response} from "express";
//import {getAll, insertarUsuario, getById} from "../services/usuario.service";
import {getAll, getById, insertarReunion, deleteReunion, updateReunion} from "../repositories/reunion.repository";
import {Reunion} from "../models/reunion";

const altaReunion = (req: Request, res: Response) => {
   if (!req.body.nombre || !req.body.fecha || !req.body.hora || !req.body.duracion || !req.body.participantes || !req.body.detalle) {
    res.status(400).end("Datos de la reunión requeridos");
   }else{
    const reunion = new Reunion(req.body.nombre, req.body.fecha, req.body.hora, req.body.duracion, req.body.participantes, req.body.detalle);
    insertarReunion(reunion);
    res.status(201).end("Reunion guardada con éxito");
   }
};

const consultaReuniones = async (req: Request, res: Response) => {
    const reuniones = await getAll();
    //console.log(reuniones);
    res.json(reuniones);
};

const consultaPorId = async(req: Request, res: Response) => {
    const reunion = await getById(+req.params.id);
    console.log(reunion);
    if (reunion) {
        res.json(reunion)
    } else {
        res.status(404).end("Reunión no encontrada");
    }
};

const deletePorId = async (req: Request, res: Response) =>{
    const cant = await deleteReunion(+req.params.id);
    if (cant ===0) {
        res.status(404).end("No se encontró la reunión");
    } else {
        res.end("Reunión borrada con éxito");
    }
    };
const update = async (req: Request, res: Response) => {
    const reunion = new Reunion(req.body.id, req.body.nombre, req.body.fecha, req.body.hora, req.body.duracion, req.body.participantes, req.body.detalle );
    const cant = await updateReunion(reunion);
    if (cant ===0) {
        res.status(404).end("No se encontró la reunión");
    } else {
        res.end("Reunión actualizada");
    }
};
export {consultaReuniones, altaReunion, consultaPorId, deletePorId, update};
