import express, {Request, Response} from "express";
import { compileChecks } from "./utils/checkCompiler";
import { checkOptions } from "./utils/types";

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
app.get("/check/:email/:options", async (req: Request, res: Response)  =>{
    const email = req.params.email;
    const options = req.params.options as unknown as checkOptions;
    console.log(email)
    console.log(options)
    let result = await compileChecks(email, options)
    res.send(result)
})

app.listen(PORT, () =>{
    console.log(`server is on ${PORT}`);
});