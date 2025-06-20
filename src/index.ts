import express, {Request, Response} from "express";
import { compileChecks } from "./utils/checkCompiler";

const app = express();
const PORT = process.env.PORt || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) =>{
    res.send("Welcome to the Email Checker API!");
});

app.get("/check/:email", async (req: Request, res: Response)  =>{
    const email = req.params.email;
    console.log(email)
    let result = await compileChecks(email)
    res.send(result)
})

app.listen(PORT, () =>{
    console.log(`server is on ${PORT}`);
});