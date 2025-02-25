import express, { Request, Response } from "express";
import morgan from "morgan";
import userRouter from "./routes/usuario.router";
import authRouter from "./routes/auth.router";
import cors from "cors";
const port = process.env.PORT || 4444;
const app = express();

function auth(req: Request, res: Response, next: any) {
  if (req.headers.authorization === "AABBCC") {
    next();
  } else {
    res.status(401);
    res.end();
  }
}
console.log(process.env.NODE_ENV);
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/usuarios", userRouter);
app.use("/auth", authRouter);
app.get("/segurizado1", (req: Request, res: Response) => {
  res.send("hola");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
