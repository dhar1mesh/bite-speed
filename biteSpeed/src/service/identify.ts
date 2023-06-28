import { DbQueries } from "../database/indentifySqlQuery";
import { v4 as uuidv4 } from 'uuid';


export class Identify {
    dbQueries: DbQueries;
    constructor() {
        this.dbQueries = new DbQueries();
    }
    getIdentiyfyDetails = async (email: string, phoneNumber: string) => {
        try {
            const result: any = await this.dbQueries.getPrimaryDetails(phoneNumber, email);
            if (result.length != 0) {
                const existingContact: any = result[0] as Contact;
                if (existingContact.linkPrecedence === 'secondary') {
                    const findPrimaryContactQuery = this.dbQueries.getIdentifyDetailsById(existingContact.linkedId as any)
                    const primaryContact = result[0] as Contact;
                    const consolidatedContact: ConsolidatedContact = {
                        primaryContactId: primaryContact.id,
                        emails: [primaryContact.email, existingContact.email],
                        phoneNumbers: [primaryContact.phoneNumber, existingContact.phoneNumber],
                        secondaryContactIds: [],
                    };
                    return consolidatedContact;
                }
                const secondaryContact: Contact = {
                    id: Math.floor(Math.random() * 10000000),
                    phoneNumber,
                    email,
                    linkedId: existingContact.id,
                    linkPrecedence: 'secondary',
                    createdAt: new Date,
                    updatedAt: new Date(),
                    deletedAt: null,
                }
                await this.dbQueries.insertIndentyfy(secondaryContact);
                const consolidatedContact: ConsolidatedContact = {
                    primaryContactId: existingContact.id,
                    emails: [existingContact.email, secondaryContact.email],
                    phoneNumbers: [existingContact.phoneNumber, secondaryContact.phoneNumber],
                    secondaryContactIds: [],
                };
                return consolidatedContact;
            } else {
                const details: Contact = {
                    id: Math.floor(Math.random() * 100000000),
                    phoneNumber,
                    email,
                    linkedId: null,
                    linkPrecedence: 'primary',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                }
                const result: any = await this.dbQueries.insertIndentyfy(details);
                const consolidatedContact: ConsolidatedContact = {
                    primaryContactId: details.id,
                    emails: [details.email],
                    phoneNumbers: [details.phoneNumber],
                    secondaryContactIds: [],
                };
                console.log(consolidatedContact);
                return consolidatedContact;
            }
        } catch (error: any) {
            throw error;
        }
    }

}