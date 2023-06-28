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
const scyllaClient_1 = require("../connections/scyllaClient");
const local_1 = require("./local");
const createKeyspace = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `CREATE KEYSPACE IF NOT EXISTS ${local_1.settings.KEYSPACE} WITH REPLICATION={'class': '${local_1.settings.REPLICATION_STRATEGY}', 'replication_factor':${local_1.settings.REPLICATION_FACTOR}};`;
    console.log(query);
    yield scyllaClient_1.scyllaClient.execute(query);
});
const createIdentifyTable = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `CREATE TABLE IF NOT EXISTS ${local_1.settings.KEYSPACE}.${local_1.settings.TABLE_NAME} (id int,phoneNumber text,email text,linkedId int,linkPrecedence text, createdAt Date, updatedAt Date, deletedAt Date, PRIMARY KEY (id));`;
    yield scyllaClient_1.scyllaClient.execute(query);
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield createKeyspace();
        yield createIdentifyTable();
    }
    catch (error) {
        console.log('error' + JSON.stringify(error));
    }
});
init();
