import { PrismaClient, Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.random.numeric(5),
    phone: faker.phone.number(),
  },
];
const tiketData: Prisma.TiketCreateInput[] = [
  {
    problema_informado: faker.random.words(5),
    observacao: faker.random.words(10),
    status: {
      create: {
        name: "aberto",
      },
    },
    prioridade: {
      create: {
        name: "média",
        icon: "acitive",
        color: "green",
      },
    },
    tecnico: {
      create: {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        type: "ativo",
        tecnico_tipo: {
          create: {
            name: "nv2",
          },
        },
      },
    },
    empresa: {
      create: {
        name: faker.company.name(),
        razao_social: faker.company.name(),
        nome_fantasia: faker.company.name(),
        tipo: faker.company.companySuffix(),
        ie: faker.random.numeric(5),
        clientes: faker.random.numeric(4),
        cliente: {
          connectOrCreate: {
            where: {
              email: faker.internet.email(),
            },
            create: {
              name: faker.internet.userName(),
              email: faker.internet.email(),
              status: true,
            },
          },
        },
      },
    },
    categoria: {
      create: {
        color: faker.color.rgb(),
        name: "suporte",
        subcategoria: {
          create: {
            color: faker.color.rgb(),
            name: "Falta de internet",
          },
        },
      },
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  for (const t of tiketData) {
    const tiket = await prisma.tiket.create({
      data: t,
    });
    console.log("Tiket faker criado com sucesso");
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
