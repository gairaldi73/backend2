import {Usuario} from "../models/usuario";

const usuarios: Usuario[] = [];
let index = 0;

const getAll = () => {
    return usuarios;
};

const insertarUsuario = (usuario: Usuario) => {
    usuario.id = ++index;
    usuarios.push(usuario);     
};
const getById = (id: number) =>{
    return usuarios.find(usuario => {
        return usuario.id === id;
    });
};
export {getAll, insertarUsuario, getById};
