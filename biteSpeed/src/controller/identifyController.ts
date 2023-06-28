import { Request, Response } from "express";
import { scyllaClient } from "../../connections/scyllaClient";
import { Identify } from "../service/identify";
import { error } from "console";

export class IdentifyController {
    identify: Identify;
    constructor() {
        this.identify = new Identify();
    }
    registerIdentify = async (req: Request, res: Response, next: any) => {
        try {
            const { email, phoneNumber } = req.body;
            const result = await this.identify.getIdentiyfyDetails(email, phoneNumber);
            res.json({ contact: result });
        } catch (error: any) {
            res.status(500).json({
                error: "error occcured",
            });
        }
    }
}