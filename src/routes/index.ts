import { NextFunction, Request, Response, Router } from "express";
import { get, create } from "../controllers/ticket.controller";

const router = Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Time: ", Date.now(), req.body);

  next();
  router.get("/", (req: Request, res: Response) => {
    res.send("Olá mundo");
  });
  router.get("/tiket", get);
  router.post("/tiket", create);
});

export default router;
