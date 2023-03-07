import { PrismaClient, Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.random.numeric(5),
  },
];
const tiketData: Prisma.TiketCreateInput[] = [
  {
    problema_informado: faker.random.words(5),
    observacao: faker.random.words(10),
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
