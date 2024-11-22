"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = express_1.default.Router();
router.get("/", usuario_controller_1.consultaUsuarios);
router.get("/:id", usuario_controller_1.consultaPorId);
router.post("/", usuario_controller_1.altaUsuario);
router.delete("/:id", usuario_controller_1.deletePorId);
router.patch("/", usuario_controller_1.update);
exports.default = router;
