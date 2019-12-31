// Multiply Strings

// Given two non-negative integers num1 and num2 represented as strings, 
// return the product of num1 and num2, also represented as a string.

// Input: num1 = "2", num2 = "3"
// Output: "6"

// Need to memorize this I think 

var multiply = function(num1, num2) {

    let sum = [];
    let hold = 0;
    let totalLength = num1.length + num2.length; 

    // If a num is 0, then it will return 0 
    if(num1 === "0" || num2 === "0") {
        return "0"
    }

    // If a num 1 is, then the answer is the other number
        // Note: all if-else statements are O(1), so nest all I want
    if(num1 === "1" || num2 === "1") {
        if(num1 === "1") {
            return num2
        } else {
            return num1
        }
    }

    let num1Arr = num1.split('').reverse();
    let num2Arr = num2.split('').reverse();

}



// NOTE: THIS USES BUILT IN METHODS
var multiply = function(num1, num2) {
    
    let result = 0; 
    
    // Step 1: Make string inputs into numbers
        let actualNum1 = Number(num1);
        let actualNum2 = Number(num2);
    
    // Step 2: Multiply them 
    
    result = actualNum1 * actualNum2
    
    // Step 3: Make the result into a string 
    return result.toString();
}

// Uses built in methods
// var addStrings2 = function(num1, num2) {
//     // Step 1: Convert nums to string 
//         let num1Actual = parseFloat(num1)
//         let num2Actual = parseFloat(num2)

//     // Step 2: Do maths and return that 
//         return (num1Actual + num2Actual).toString();
// };