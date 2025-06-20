import { checkMXRecords } from "./MXCheck";
import { verifyFormat } from "./checkFormat";
import { checkForDisallowedRoles } from "./roleCheck";
import { checkOptions } from "./types";

const gibberish = require("gibberish-detective")({useCache: false});
gibberish.set("useCache", true)

export async function compileChecks(email: string, options: checkOptions = {verifyFormat: true, verifyRole: true}){
    let formatCheck = verifyFormat(email)

    if(!formatCheck && options.verifyFormat){
        return{
            success: false,
            message: "Invalid Email Format"
        }
    }
    if(!checkForDisallowedRoles(email) && options.verifyRole){
        return{
            success: false,
            message: "Address is a business address"
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