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
const database_1 = __importDefault(require("./database"));
const port = process.env.PORT || 7000;
const server = (0, fastify_1.default)({
    logger: true
});
const uri = "mongodb+srv://user:api12345@cluster0.2tqpl.mongodb.net/apirest?retryWrites=true&w=majority";
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield server.listen(port);
        console.log('Server start successfully');
        yield (0, database_1.default)(server, { uri });
    }
    catch (error) {
        server.log.error(error);
        process.exit(1);
    }
});
main();
