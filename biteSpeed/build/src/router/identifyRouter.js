"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const identifyController_1 = require("../controller/identifyController");
const identifyRouter = express_1.default.Router();
const identifyController = new identifyController_1.IdentifyController;
identifyRouter.post("/", identifyController.registerIdentify);
exports.default = identifyRouter;
