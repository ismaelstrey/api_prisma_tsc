import { prisma } from "../services/prisma";

export const createCategoria = async (data: any) => {
  const categoria = await prisma.categoria.create({
    data,
  });
  return categoria;
};

export const getAll = async () => {
  const categoria = await prisma.categoria.findMany({
    select: {
      id: true,
      name: true,
      subcategoria: {
        select: {
          name: true,
          color: true
        }
      }
    },
  });
  return categoria;
};

export const getById = async (id: number) => {
  const categoria = await prisma.categoria.findFirst({
    where: {
      id,
    },
  });
  return categoria;
};

export const updateCategoria = async (id: number, data: any) => {
  const categoria = await prisma.categoria.update({
    where: {
      id,
    },
    data,
  });
  return categoria;
};
