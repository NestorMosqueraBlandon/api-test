"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllAdmins = void 0;
const update_1 = __importDefault(require("../controllers/products/update"));
exports.fetchAllAdmins = {
    url: '/admins',
    method: 'GET',
    handler: update_1.default
};
exports.default = exports.fetchAllAdmins;
