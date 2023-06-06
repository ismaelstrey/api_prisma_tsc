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
exports.update = exports.getById = exports.getAll = exports.create = void 0;
const prisma_1 = require("../services/prisma");
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const tiketStatus = yield prisma_1.prisma.tiketStatus.create({
        data,
    });
    return tiketStatus;
});
exports.create = create;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const tiketStatus = yield prisma_1.prisma.tiketStatus.findMany({
        select: {
            id: true,
            name: true
        },
    });
    return tiketStatus;
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tiketStatus = yield prisma_1.prisma.tiketStatus.findFirst({
        where: {
            id,
        },
    });
    return tiketStatus;
});
exports.getById = getById;
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const tiketStatus = yield prisma_1.prisma.tiketStatus.update({
        where: {
            id,
        },
        data,
    });
    return tiketStatus;
});
exports.update = update;
//# sourceMappingURL=tiketStatus.repository.js.map