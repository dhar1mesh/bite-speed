import express from "express"
import { IdentifyController } from "../controller/identifyController";

const identifyRouter= express.Router();

const identifyController= new IdentifyController;

identifyRouter.post("/"
,identifyController.registerIdentify);


export default identifyRouter;