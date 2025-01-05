import {Request, Response} from "express";
import {getByUsernameAndPassword} from "../repositories/auth.repository";
import jsonwebtoken from "jsonwebtoken";

import {Usuario} from "../models/usuario";

const authUsuario = async(req: Request, res: Response) =>{
    const user= await getByUsernameAndPassword(
    req.body.username,
    req.body.password 
    );
    if (user){
    //genero JWT
    const payload = {
        name: user.username,
        role: "guest",
        iss: new Date()
    };
    const token = jsonwebtoken.sign(payload,'ESTE_ES_EL_SECRET_DEL_JWT');
    res.end(token);
    }else{
    res.status(401).end("Usuario o password inválido");
}
};

export {authUsuario};