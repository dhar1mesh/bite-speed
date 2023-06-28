

import { scyllaClient } from "../connections/scyllaClient";
import { settings } from "./local";
const createKeyspace =  async () => {
    const query=`CREATE KEYSPACE IF NOT EXISTS ${settings.KEYSPACE} WITH REPLICATION={'class': '${settings.REPLICATION_STRATEGY}', 'replication_factor':${settings.REPLICATION_FACTOR}};`;
    console.log(query);
	 await  scyllaClient.execute(query);
};

const createIdentifyTable = async () => {
    const query= `CREATE TABLE IF NOT EXISTS ${settings.KEYSPACE}.${settings.TABLE_NAME} (id int,phoneNumber text,email text,linkedId int,linkPrecedence text, createdAt Date, updatedAt Date, deletedAt Date, PRIMARY KEY (id));`
	await scyllaClient.execute(query);
};

const init = async () => {
	try {
		await  createKeyspace();
        await createIdentifyTable();
	} catch (error) {
		console.log('error'+ JSON.stringify(error));
	}
};

init();
