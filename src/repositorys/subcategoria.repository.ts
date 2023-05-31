import { prisma } from "../services/prisma";

export const create = async (data: any) => {
  const subcategoria = await prisma.subcategoria.create({
    data,
  });
  return subcategoria;
};

export const getAll = async () => {
  const subcategoria = await prisma.subcategoria.findMany({
    select: {
      id: true,
      name: true,
      color: true,
      categoria: {
        select: {
          name: true,
          color: true
        }
      }
    },
  });
  return subcategoria;
};

export const getById = async (id: number) => {
  const categoria = await prisma.categoria.findFirst({
    where: {
      id,
    },
  });
  return categoria;
};

export const update = async (id: number, data: any) => {
  const categoria = await prisma.categoria.update({
    where: {
      id,
    },
    data,
  });
  return categoria;
};
