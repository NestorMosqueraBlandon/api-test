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
const Product_1 = require("../../models/Product");
const Create = (request, replay) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.Product.create({});
        // console.log(products.length)
        return replay.code(200).send(products);
    }
    catch (error) {
        console.error(error);
        return replay.code(500);
    }
});
exports.default = Create;
