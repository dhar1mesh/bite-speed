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
exports.Identify = void 0;
const indentifySqlQuery_1 = require("../database/indentifySqlQuery");
class Identify {
    constructor() {
        this.getIdentiyfyDetails = (email, phoneNumber) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.dbQueries.getPrimaryDetails(phoneNumber, email);
                if (result.length != 0) {
                    const existingContact = result[0];
                    if (existingContact.linkPrecedence === 'secondary') {
                        const findPrimaryContactQuery = this.dbQueries.getIdentifyDetailsById(existingContact.linkedId);
                        const primaryContact = result[0];
                        const consolidatedContact = {
                            primaryContactId: primaryContact.id,
                            emails: [primaryContact.email, existingContact.email],
                            phoneNumbers: [primaryContact.phoneNumber, existingContact.phoneNumber],
                            secondaryContactIds: [],
                        };
                        return consolidatedContact;
                    }
                    const secondaryContact = {
                        id: Math.floor(Math.random() * 10000000),
                        phoneNumber,
                        email,
                        linkedId: existingContact.id,
                        linkPrecedence: 'secondary',
                        createdAt: new Date,
                        updatedAt: new Date(),
                        deletedAt: null,
                    };
                    yield this.dbQueries.insertIndentyfy(secondaryContact);
                    const consolidatedContact = {
                        primaryContactId: existingContact.id,
                        emails: [existingContact.email, secondaryContact.email],
                        phoneNumbers: [existingContact.phoneNumber, secondaryContact.phoneNumber],
                        secondaryContactIds: [],
                    };
                    return consolidatedContact;
                }
                else {
                    const details = {
                        id: Math.floor(Math.random() * 100000000),
                        phoneNumber,
                        email,
                        linkedId: null,
                        linkPrecedence: 'primary',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        deletedAt: null,
                    };
                    const result = yield this.dbQueries.insertIndentyfy(details);
                    const consolidatedContact = {
                        primaryContactId: details.id,
                        emails: [details.email],
                        phoneNumbers: [details.phoneNumber],
                        secondaryContactIds: [],
                    };
                    console.log(consolidatedContact);
                    return consolidatedContact;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.dbQueries = new indentifySqlQuery_1.DbQueries();
    }
}
exports.Identify = Identify;
