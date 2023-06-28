import express , {Application, Request, Response} from "express";
import identifyRouter from "./router/identifyRouter";
const app : Application=express();

const port: number =3000;

app.use(express.json());

app.use(`/identify`, identifyRouter)

app.use( (err: any,req: any, res: any, next: any) =>{
    res.status(500).json({
        error:"error occcured",
    });
});

app.listen(3000, ()=>{
    console.log(`listening at port ${port}`);
})
