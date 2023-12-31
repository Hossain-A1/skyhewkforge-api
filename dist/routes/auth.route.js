"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../controller/auth.controller"));
const authInstance = new auth_controller_1.default();
const authRouter = express_1.default.Router();
// user route
authRouter.post('/register', authInstance.register);
authRouter.post('/login', authInstance.login);
// drone route
exports.default = authRouter;
