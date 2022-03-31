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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)({
    logger: true
});
const port = 8300;
server.get('/status', (request, reply) => {
    reply.send("Server is working");
});
server.route({
    method: "GET",
    url: '/',
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        reply.send("Server is working in the main route");
    })
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield server.listen(port);
    }
    catch (error) {
        server.log.error(error);
        process.exit(1);
    }
});
main();
