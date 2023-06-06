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
exports.updateCategoria = exports.getById = exports.getAll = exports.createCategoria = void 0;
const prisma_1 = require("../services/prisma");
const createCategoria = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = yield prisma_1.prisma.categoria.create({
        data,
    });
    return categoria;
});
exports.createCategoria = createCategoria;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = yield prisma_1.prisma.categoria.findMany({
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
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = yield prisma_1.prisma.categoria.findFirst({
        where: {
            id,
        },
    });
    return categoria;
});
exports.getById = getById;
const updateCategoria = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = yield prisma_1.prisma.categoria.update({
        where: {
            id,
        },
        data,
    });
    return categoria;
});
exports.updateCategoria = updateCategoria;
//# sourceMappingURL=categoria.repository.js.map