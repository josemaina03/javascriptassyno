function generatePassword(firstName, lastName) {
    let first = firstName.slice(0, 3);
    let last = lastName.slice(-3);
    let password = first + last + "@2024";
    return password;
}

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let generatedPassword = generatePassword(firstName, lastName);
console.log("Generated password:", generatedPassword);
