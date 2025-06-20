import express, {Request, Response} from "express";
import compileCheck

const app = express();
const PORT = process.env.PORt || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) =>{
    res.send("Welcome to the Email Checker API!");
});

app.get("/check/:email", (req: Request, res: Response) =>{
    const email = req.params.id;
    res.send(Promise.resolve(compileChecks(email)))
})

app.listen(PORT, () =>{
    console.log(`server is on ${PORT}`);
});