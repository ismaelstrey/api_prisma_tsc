import { prisma } from "../services/prisma";

export const create = async (data: any) => {
  const tiketStatus = await prisma.tiketStatus.create({
    data,
  });
  return tiketStatus;
};

export const getAll = async () => {
  const tiketStatus = await prisma.tiketStatus.findMany({
    select: {
      id: true,
      name: true
    },
  });
  return tiketStatus;
};

export const getById = async (id: number) => {
  const tiketStatus = await prisma.tiketStatus.findFirst({
    where: {
      id,
    },
  });
  return tiketStatus;
};

export const update = async (id: number, data: any) => {
  const tiketStatus = await prisma.tiketStatus.update({
    where: {
      id,
    },
    data,
  });
  return tiketStatus;
};
