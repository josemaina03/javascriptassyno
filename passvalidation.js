function isStrongPassword(password, commonWords = []) {
    if (password.trim() === "") {
        return false;
    }
    
    for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) {
            return false;
        }
    }
    
    for (let word of commonWords) {
        if (password.toLowerCase() === word.toLowerCase()) {
            return false;
        }
    }
    
    return true;
}

let password = prompt("Enter your password:");
let commonWords = ["password", "123456", "jose" , "muhia"];
if (isStrongPassword(password, commonWords)) {
    console.log("Password is strong!");
} else {
    console.log("Password is not strong.");
}
