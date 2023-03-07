import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen({ host: process.env.HOST, port: process.env.PORT }, () =>
  console.log(`${process.env.HOST}:${process.env.PORT}`)
);
