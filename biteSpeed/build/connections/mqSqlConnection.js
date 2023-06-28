"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
// Create a MySQL connection pool
const poolConfig = {
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name',
    waitForConnections: true,
    connectionLimit: 10,
};
const pool = promise_1.default.createPool(poolConfig);
exports.default = pool;
