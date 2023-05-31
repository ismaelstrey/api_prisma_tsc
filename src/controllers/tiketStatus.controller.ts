import { Request, Response } from "express";
import {
  create,
  getAll,
  getById,
  update,
} from "../repositorys/tiketStatus.repository";

export const newTiketStatus = async (req: Request, res: Response) => {
  try {
    const tiketStatus = await create(req.body);
    res.status(200).send(tiketStatus);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllTiketStatus = async (req: Request, res: Response) => {
  try {
    const tiketsStatus = await getAll();
    console.log(tiketsStatus);
    res.status(200).send(tiketsStatus);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const findOneTiketStatus = async (req: Request, res: Response) => {
  try {
    const tiketStatus = await getById(Number(req.params.id));
    res.status(200).send(tiketStatus);
  } catch (error) {
    console.log(error);
  }
};
export const updateTiketStatus = async (req: Request, res: Response) => {
  try {
    const tiketStatus = await update(Number(req.params.id), req.body);
    res.status(200).send(tiketStatus);
  } catch (error) {
    console.log(error);
  }
};
