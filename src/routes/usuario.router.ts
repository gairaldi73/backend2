import express from "express";
import{
    altaUsuario,
    consultaUsuarios,
    consultaPorId,
    deletePorId,
    update
} from "../controllers/usuario.controller";

const router = express.Router();
router.get("/", consultaUsuarios);
router.get("/:id", consultaPorId);
router.post("/", altaUsuario);
router.delete("/:id", deletePorId);
router.patch("/", update);
export default router;