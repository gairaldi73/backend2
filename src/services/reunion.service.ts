import {Reunion} from "../models/reunion";

const reuniones: Reunion[] = [];
let index = 0;

const getAll = () => {
    return reuniones;
};

const insertarReunion = (reunion: Reunion) => {
    reunion.id = ++index;
    reuniones.push(reunion);     
};
const getById = (id: number) =>{
    return reuniones.find(reunion => {
        return reunion.id === id;
    });
};
export {getAll, insertarReunion, getById};
