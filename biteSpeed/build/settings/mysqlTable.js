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
const mqSqlConnection_1 = __importDefault(require("../connections/mqSqlConnection"));
const createIdentifyTable = () => __awaiter(void 0, void 0, void 0, function* () {
    // const query= `CREATE TABLE IF NOT EXISTS ${settings.KEYSPACE}.${settings.TABLE_NAME} (id int,phoneNumber text,email text,linkedId int,linkPrecedence text, createdAt Date, updatedAt Date, deletedAt Date, PRIMARY KEY (id));`
    // await scyllaClient.execute(query);
    const query = `CREATE TABLE Contact ( id INT PRIMARY KEY AUTO_INCREMENT, phoneNumber VARCHAR(20), email VARCHAR(100), linkedId INT, linkPrecedence ENUM('secondary', 'primary'), createdAt DATETIME, updatedAt DATETIME, deletedAt DATETIME, FOREIGN KEY (linkedId) REFERENCES Contact(id) )`;
    yield mqSqlConnection_1.default.query(query);
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield createIdentifyTable();
    }
    catch (error) {
        console.log('error' + JSON.stringify(error));
    }
});
init();
