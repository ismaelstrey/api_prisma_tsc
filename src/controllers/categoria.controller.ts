import { Request, Response } from "express";
import {
  createCategoria,
  getAll,
  getById,
  updateCategoria,
} from "../repositorys/categoria.repository";

export const newCategory = async (req: Request, res: Response) => {
  try {
    const categoria = await createCategoria(req.body);
    res.status(200).send(categoria);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const categorias = await getAll();
    console.log(categorias);
    res.status(200).send(categorias);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const findOneCategory = async (req: Request, res: Response) => {
  try {
    const categoria = await getById(Number(req.params.id));
    res.status(200).send(categoria);
  } catch (error) {
    console.log(error);
  }
};
export const updateOneCategory = async (req: Request, res: Response) => {
  try {
    const categoria = await updateCategoria(Number(req.params.id), req.body);
    res.status(200).send(categoria);
  } catch (error) {
    console.log(error);
  }
};
