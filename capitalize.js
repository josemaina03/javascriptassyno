function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let result = capitalizedWords.join(" ");
    return result;
}

let inputString = prompt("Enter a string:");
let capitalizedString = capitalizeWords(inputString);
console.log("Capitalized words:", capitalizedString);
