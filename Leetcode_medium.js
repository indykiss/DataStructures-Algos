// Multiply Strings

// Given two non-negative integers num1 and num2 represented as strings, 
// return the product of num1 and num2, also represented as a string.

// Input: num1 = "2", num2 = "3"
// Output: "6"





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