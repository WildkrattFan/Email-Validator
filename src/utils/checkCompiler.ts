import { checkMXRecords } from "./MXCheck";
import { verifyFormat } from "./checkFormat";

const gibberish = require("gibberish-detective")({useCache: false});
gibberish.set("useCache", true)

export async function compileChecks(email: string){
    let formatCheck = verifyFormat(email)

    if(!formatCheck){
        return{
            success: false,
            message: "Invalid Email Format"
        }
    }
    try{
    let mxCheck = await checkMXRecords(email)
        if(!mxCheck.success){
            return{
                success: false,
                message: "mxCheck Failed"
            }
        }
        else{

            let gibberishResult = gibberish.detect(email)

            return {
                mxCheck,
                likelyGibberish: gibberishResult
            }
        }
    
    }
    catch(err){
        return{
            success: false,
            message: "Invalid Email Format"
        }
    }
}