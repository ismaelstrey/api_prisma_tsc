import { prisma } from "../services/prisma";

export const createTiket = async (data: any) => {
  const tiket = await prisma.tiket.create({
    data,
  });
  return tiket;
};

export const getAll = async () => {
  const tiket = await prisma.tiket.findMany({});
  return tiket;
};

export const getById = async (id: number) => {
  const tiket = await prisma.tiket.findFirst({
    where: {
      id,
    },
  });
  return tiket;
};
export const updateTiket = async (id: number, data: any) => {
  const tiket = await prisma.tiket.update({
    where: {
      id,
    },
    data,
  });
  return tiket;
};
