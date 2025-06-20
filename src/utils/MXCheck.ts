const dns = require('dns').promises;
import { dnsResult } from "./types";



export function getDomain(email: string){
    let splitEmail = email.split("@")
    let domain = splitEmail[1]
    return domain
}


export async function checkMXRecords(email: string){
    let domain = getDomain(email)
    try{
        let result = await dns.lookup(domain) as dnsResult;

        if(result.address.length === 0){
            // console.log("returning ")
            // console.log({
            //     success: false
            // })
            return {
                success: false
            }
        }
        else{
            // console.log("returning ")
            // console.log({
            //     success: true,
            //     result
            // })
            return {
                success: true,
                result
            }
        }
    }
    catch(err){
        throw new Error("An error occured during DNS lookup.")
    }

}