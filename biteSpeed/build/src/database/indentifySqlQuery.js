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
exports.DbQueries = void 0;
const mqSqlConnection_1 = __importDefault(require("../../connections/mqSqlConnection"));
class DbQueries {
    constructor() {
        this.insertIndentyfy = (details) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`insertIndentyfy`);
                const result = yield mqSqlConnection_1.default.query('INSERT INTO Contact SET ?', details);
                console.log(`result::${result}`);
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.getIdentifyDetailsById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`getIdentifyDetailsById`);
                console.log(id);
                const [newPrimaryContact] = yield mqSqlConnection_1.default.query('SELECT * FROM Contact WHERE id = ?', [id]);
                console.log(newPrimaryContact);
                return newPrimaryContact;
            }
            catch (error) {
                throw error;
            }
        });
        this.updatePrimaryDetails = (primaryContact) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`updatePrimaryDetails`);
                yield mqSqlConnection_1.default.query('UPDATE Contact SET email = ?, phoneNumber = ? WHERE id = ?', [
                    primaryContact.email,
                    primaryContact.phoneNumber,
                    primaryContact.id
                ]);
            }
            catch (error) {
                throw error;
            }
        });
        this.getPrimaryDetails = (phoneNumber, email) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`getPrimaryDetails`);
                const [primaryContact] = yield mqSqlConnection_1.default.query('SELECT * FROM Contact WHERE (email = ? OR phoneNumber = ?) AND linkPrecedence = "primary"', [email, phoneNumber]);
                console.log(`data fetched : ${primaryContact}`);
                console.log(primaryContact);
                return primaryContact;
            }
            catch (error) {
                console.log(`error: ${error}`);
                throw error;
            }
            // Rest of your code...
        });
        this.getSecondaryDetails = (primaryContact) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`getSecondaryDetails`);
                console.log(primaryContact.id);
                const [secondaryContacts] = yield mqSqlConnection_1.default.query('SELECT * FROM Contact WHERE linkedId = ?', [primaryContact.id]);
                return secondaryContacts;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
            // Rest of your code...
        });
    }
}
exports.DbQueries = DbQueries;
exports.default = DbQueries;
