"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const usuario_router_1 = __importDefault(require("./routes/usuario.router"));
const port = process.env.PORT || 5555;
const app = (0, express_1.default)();
function auth(req, res, next) {
    if (req.headers.authorization === 'AABBCC') {
        next();
    }
    else {
        res.status(401);
        res.end();
    }
}
console.log(process.env.NODE_ENV);
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use("/usuarios", usuario_router_1.default);
//app.use("/pedidos", pedidosRouter);
app.get("/segurizado1", (req, res) => {
    res.send("hola");
});
app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ${port}');
});
