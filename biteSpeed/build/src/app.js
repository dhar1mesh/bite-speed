"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const identifyRouter_1 = __importDefault(require("./router/identifyRouter"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(`/enpoints`, identifyRouter_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({
        error: "error occcured",
    });
});
app.listen(3000, () => {
    console.log(`listening at port ${port}`);
});
