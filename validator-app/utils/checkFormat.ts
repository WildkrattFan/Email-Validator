

export function verifyFormat(email: string){
    let emailFormat: RegExp = new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$`);
    return emailFormat.test(email);
}

export function verifyFormatArray(emails: string[]){
    let returnArray: boolean[] = [];
    for(let email of emails){
        returnArray.push(verifyFormat(email));
    }
    if(returnArray.length < 1){
        return false
    }
    return returnArray;
}