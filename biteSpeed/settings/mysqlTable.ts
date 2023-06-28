
import pool from "../connections/mqSqlConnection";




const createIdentifyTable = async () => {
    // const query= `CREATE TABLE IF NOT EXISTS ${settings.KEYSPACE}.${settings.TABLE_NAME} (id int,phoneNumber text,email text,linkedId int,linkPrecedence text, createdAt Date, updatedAt Date, deletedAt Date, PRIMARY KEY (id));`
	// await scyllaClient.execute(query);
   const query= `CREATE TABLE Contact ( id INT PRIMARY KEY AUTO_INCREMENT, phoneNumber VARCHAR(20), email VARCHAR(100), linkedId INT, linkPrecedence ENUM('secondary', 'primary'), createdAt DATETIME, updatedAt DATETIME, deletedAt DATETIME, FOREIGN KEY (linkedId) REFERENCES Contact(id) )`;
   await pool.query(query);
};

const init = async () => {
	try {
        await createIdentifyTable();
	} catch (error) {
		console.log('error'+ JSON.stringify(error));
	}
};

init();


