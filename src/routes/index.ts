import { NextFunction, Request, Response, Router } from "express";
import { getAllTiket, newTiket } from "../controllers/ticket.controller";
import { findOneCategory, getAllCategory, newCategory, updateOneCategory } from "../controllers/categoria.controller";
import { findOneSubcategory, getAllSubcategory, newSubcategory, updateOneSubcategory } from "../controllers/subcategoria.controller";
import { getAllTiketStatus, newTiketStatus } from "../controllers/tiketstatus.controller";

const router = Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Time: ", Date.now(), req.body);

  next();
  router.get("/", (req: Request, res: Response) => {
    res.send("Olá mundo teste");
  });
  //tiket
  router.get("/tiket", getAllTiket);
  router.post("/tiket", newTiket);
  //tiketStatus
  router.get("/tiketstatus", getAllTiketStatus);
  router.post("/tiketstatus", newTiketStatus);
  //categoria
  router.get("/categoria", getAllCategory);
  router.post("/categoria", newCategory);
  //subcategoria
  router.get("/subcategoria", getAllSubcategory);
  router.post("/subcategoria", newSubcategory);
});

export default router;
