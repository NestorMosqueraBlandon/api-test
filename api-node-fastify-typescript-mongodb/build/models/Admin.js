"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.adminSchema = void 0;
const mongoose_1 = require("mongoose");
exports.adminSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
});
exports.Admin = (0, mongoose_1.model)('Admin', exports.adminSchema);
