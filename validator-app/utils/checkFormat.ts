

export function verifyFormat(email: string){
    let emailFormat: RegExp = new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$`);
    return emailFormat.test(email);
}

