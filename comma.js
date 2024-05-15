function sumOfNumbers(input) {
    if (input.trim() === "") {
        return 0;
    }

    return input.split(",").reduce((sum, num) => {
        const parsedNum = parseFloat(num);
        if (isNaN(parsedNum)) {
            return sum + 0;
        }
        return sum + parsedNum;
    }, 0);
}

console.log(sumOfNumbers("1,2,3,4,5"));
console.log(sumOfNumbers("10,20,thirty,40"));
console.log(sumOfNumbers(""));
console.log(sumOfNumbers("100,200,300,4.5,5")); 
console.log(sumOfNumbers("0,0,0,0")); 
console.log(sumOfNumbers("1,2,3,4,5,6,7,8,9,10")); 
console.log(sumOfNumbers("one,two,three")); 

