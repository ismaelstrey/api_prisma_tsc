import { Request, Response } from "express";
import {
  create,
  getAll,
  getById,
  update,
} from "../repositorys/subcategoria.repository";

export const newSubcategory = async (req: Request, res: Response) => {
  try {
    const subcategoria = await create(req.body);
    res.status(200).send(subcategoria);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllSubcategory = async (req: Request, res: Response) => {
  try {
    const subcategorias = await getAll();
    console.log(subcategorias);
    res.status(200).send(subcategorias);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const findOneSubcategory = async (req: Request, res: Response) => {
  try {
    const subcategoria = await getById(Number(req.params.id));
    res.status(200).send(subcategoria);
  } catch (error) {
    console.log(error);
  }
};
export const updateOneSubcategory = async (req: Request, res: Response) => {
  try {
    const subcategoria = await update(Number(req.params.id), req.body);
    res.status(200).send(subcategoria);
  } catch (error) {
    console.log(error);
  }
};
