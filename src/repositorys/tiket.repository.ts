import { prisma } from "../services/prisma";

export const createTiket = async (data: any) => {
  const tiket = await prisma.tiket.create({
    data,
  });
  return tiket;
};

export const getAll = async () => {
  const tiket = await prisma.tiket.findMany({
    select: {
      id: true,
      problema_informado: true,
      observacao: true,
      created_at: true,
      updated_at: true,
      prioridadeId: false,
      tecnicoId: false,
      tiketStatusId: false,
      empresaId: false,
      categoriaId: false,

      empresa: true,
      prioridade: true,
      tecnico: {
        include: {
          tecnico_tipo: true,
        },
      },
      categoria: true,
      status: true,
    },
  });
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
