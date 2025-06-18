import express from "express";
import{
    altaReunion,
    consultaReuniones,
    consultaPorId,
    deletePorId,
    update
} from "../controllers/reunion.controller";

const router = express.Router();
router.get("/", consultaReuniones);
router.get("/:id", consultaPorId);
router.post("/", altaReunion);
router.delete("/:id", deletePorId);
router.patch("/", update);
export default router;