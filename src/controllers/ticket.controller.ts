import { Request, Response } from "express";
import {
  createTiket,
  getAll,
  getById,
  updateTiket,
} from "../repositorys/tiket.repository";

export const create = async (req: Request, res: Response) => {
  try {
    const tiket = await createTiket(req.body);
    res.status(200).send(tiket);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const tikets = await getAll();
    console.log(tikets);
    res.status(200).send(tikets);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const tiket = await getById(Number(req.params.id));
    res.status(200).send(tiket);
  } catch (error) {
    console.log(error);
  }
};
export const update = async (req: Request, res: Response) => {
  try {
    const tiket = await updateTiket(Number(req.params.id), req.body);
    res.status(200).send(tiket);
  } catch (error) {
    console.log(error);
  }
};
