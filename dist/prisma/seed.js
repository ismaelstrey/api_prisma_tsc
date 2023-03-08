"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const faker_1 = require("@faker-js/faker");
const prisma = new client_1.PrismaClient();
const userData = [
    {
        name: faker_1.faker.internet.userName(),
        email: faker_1.faker.internet.email(),
        password: faker_1.faker.random.numeric(5),
        phone: faker_1.faker.phone.number(),
    },
];
const tiketData = [
    {
        problema_informado: faker_1.faker.random.words(5),
        observacao: faker_1.faker.random.words(10),
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
                name: faker_1.faker.internet.userName(),
                email: faker_1.faker.internet.email(),
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
                name: faker_1.faker.company.name(),
                razao_social: faker_1.faker.company.name(),
                nome_fantasia: faker_1.faker.company.name(),
                tipo: faker_1.faker.company.companySuffix(),
                ie: faker_1.faker.random.numeric(5),
                clientes: faker_1.faker.random.numeric(4),
                cliente: {
                    connectOrCreate: {
                        where: {
                            email: faker_1.faker.internet.email(),
                        },
                        create: {
                            name: faker_1.faker.internet.userName(),
                            email: faker_1.faker.internet.email(),
                            status: true,
                        },
                    },
                },
            },
        },
        categoria: {
            create: {
                color: faker_1.faker.color.rgb(),
                name: "suporte",
                subcategoria: {
                    create: {
                        color: faker_1.faker.color.rgb(),
                        name: "Falta de internet",
                    },
                },
            },
        },
    },
];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Start seeding ...`);
        for (const u of userData) {
            const user = yield prisma.user.create({
                data: u,
            });
            console.log(`Created user with id: ${user.id}`);
        }
        for (const t of tiketData) {
            const tiket = yield prisma.tiket.create({
                data: t,
            });
            console.log("Tiket faker criado com sucesso");
        }
        console.log(`Seeding finished.`);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
//# sourceMappingURL=seed.js.map