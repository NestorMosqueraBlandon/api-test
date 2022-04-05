"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAll = void 0;
const list_1 = __importDefault(require("../controllers/products/list"));
exports.fetchAll = {
    url: '/products',
    method: 'GET',
    handler: list_1.default
};
exports.default = exports.fetchAll;
