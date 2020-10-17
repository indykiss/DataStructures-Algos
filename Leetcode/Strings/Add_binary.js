
/* Add Binary
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
*/


// Oct, FB

// No using BigInt library 
var addBinary = function(a, b) {
    let sum = "";
    
    // Make 2 pointers 
    let idxA = a.length - 1,
        idxB = b.length - 1,
        carry = false; // Check if we have a carry from prev adds
    
    // Run a while loop until a & b are all processed 
    while(idxA >= 0 || idxB >= 0) {
        sum = binarySum(idxA, idxB) + sum;
        idxA--;
        idxB--;   
    }
    
    // Process the actual adding of individual digits in a & b
    function binarySum(posA, posB) {
        let miniSumOfAB = 0;
        if(carry) {
            miniSumOfAB++;
            carry = false;
        }
        // If we see a one, we want to increment one 
        if(a[posA] === "1") miniSumOfAB++;
        if(b[posB] === "1") miniSumOfAB++;
        // we've surpassed the base 2. equivalent to > 10 in base 10
        if(miniSumOfAB >= 2) {
            carry = true;
            miniSumOfAB = miniSumOfAB - 2;
        }
        return miniSumOfAB;    
    }
    
    // If we have any extra carry at the end 
    if(carry) {
        sum = "1" + sum // 1 goes 1st because carry goes to front
    }
    return sum;
};



// Using BigInt library 
var addBinary = function(a, b) {
    let sum = 0;
    // convert the nums to base 10 numbers
        // idk what the "0b" thing is
    let numA = BigInt("0b" + a);
    let numB = BigInt("0b" + b);
    
    // add them 
    sum = numA + numB;
    
    console.log(sum);
    
    // .toString(2) converts the num to base 2 
        // normally .toString() defaults to base 10 
        // but .toString(2) uses base 2
    return sum.toString(2);
};





// Good but really need to remember these bigInt libs
var addBinary = function(a, b) {
    let sum = 0

    // Convert binary to numbers
    let binaryA = BigInt("0b" + a);
    let binaryB = BigInt("0b" + b);
    
    // Add them together 
    sum = binaryA + binaryB; 
    
    // Convert back to binary
        // .toString(base of 2)
    return sum.toString(2);
}



// Attempt 1:
var addBinary = function(a, b) {
    
    // Step 1: Translate inputs into real nums
    const num1 = BigInt('0b' + a);
    const num2 = BigInt('0b' + b);
        
    // Step 2: Sum them and 
        // translate sum back into binary then string 
    return (num1 + num2).toString(2);
};



var addBinary = function(a, b) {
    let sum = 0

    // Convert binary to numbers
    let binaryA = BigInt("0b" + a);
    let binaryB = BigInt("0b" + b);
    
    // Add them together 
    sum = binaryA + binaryB; 
    
    // Convert back to binary
        // .toString(base of 2)
    return sum.toString(2);
}