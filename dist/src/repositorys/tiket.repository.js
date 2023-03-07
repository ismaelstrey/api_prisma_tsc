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
exports.updateTiket = exports.getById = exports.getAll = exports.createTiket = void 0;
const prisma_1 = require("../services/prisma");
const createTiket = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data);
    const tiket = yield prisma_1.prisma.tiket.create({
        data,
    });
    return tiket;
});
exports.createTiket = createTiket;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const tiket = yield prisma_1.prisma.tiket.findMany({});
    return tiket;
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tiket = yield prisma_1.prisma.tiket.findFirst({
        where: {
            id,
        },
    });
    return tiket;
});
exports.getById = getById;
const updateTiket = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const tiket = yield prisma_1.prisma.tiket.update({
        where: {
            id,
        },
        data,
    });
    return tiket;
});
exports.updateTiket = updateTiket;
//# sourceMappingURL=tiket.repository.js.map