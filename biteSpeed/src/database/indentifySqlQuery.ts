import pool from "../../connections/mqSqlConnection";

export class DbQueries {

    public insertIndentyfy = async (details: any) => {
        try {
            console.log(`insertIndentyfy`)
            const result = await pool.query(
                'INSERT INTO Contact SET ?',
                details
            );
            console.log(`result::${result}`)
            return result;
        } catch (error: any) {
            throw error;
        }


    }

    public getIdentifyDetailsById = async (id: number) => {
        try{
            console.log(`getIdentifyDetailsById`)
            console.log(id);
            const [newPrimaryContact] = await pool.query('SELECT * FROM Contact WHERE id = ?', [id]);
            console.log(newPrimaryContact)
            return newPrimaryContact;
        }catch(error: any){
            throw error;
        }

    }
    public updatePrimaryDetails = async (primaryContact: any) => {
        try {
            console.log(`updatePrimaryDetails`)
            await pool.query('UPDATE Contact SET email = ?, phoneNumber = ? WHERE id = ?', [
                primaryContact.email,
                primaryContact.phoneNumber,
                primaryContact.id
            ]);
        } catch (error: any) {
            throw error;
        }
    }
    public getPrimaryDetails = async (phoneNumber: string, email: string) => {
        try {
            console.log(`getPrimaryDetails`)
            const [primaryContact]: any = await pool.query(
                'SELECT * FROM Contact WHERE (email = ? OR phoneNumber = ?) AND linkPrecedence = "primary"',
                [email, phoneNumber]
            );
            console.log(`data fetched : ${primaryContact}`);
            console.log(primaryContact);
            return primaryContact;
        } catch (error: any) {
            console.log(`error: ${error}`);
            throw error;
        }
        // Rest of your code...
    }


    public getSecondaryDetails = async (primaryContact: any) => {
        try {
            console.log(`getSecondaryDetails`)
            console.log(primaryContact.id)
            const [secondaryContacts] = await pool.query(
                'SELECT * FROM Contact WHERE linkedId = ?',
                [primaryContact.id]
            );
            return secondaryContacts;
        } catch (error: any) {
            console.log(error);
            throw error;
        }
        // Rest of your code...
    }
}

export default DbQueries;