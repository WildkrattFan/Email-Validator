
const disallowedRoles = [
    "support",
    "noreply",
    "donotreply",
    "no-reply",
    "dontreply",
    "editor",
    "manager",
    "IT",
    "humanresources",
    "human-resources",
]

export function checkForDisallowedRoles(email: string){
    let passing = true
    for(let role of disallowedRoles){
        if(email.includes(role)){
            passing = false
        }
    }
    return passing
}