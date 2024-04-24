import express, { Application, json } from "express";
import "express-async-errors";
import { handleError } from "./middlewares/handleError.middleware";

const app: Application = express();

app.use(json());

app.use(handleError);

export default app;