/*
Power of 2 

Return true if 2 to the power of anything is equal to the number given 


Ex: 

input: 1
2 ^ 0 = 1
output: true 

Does there exist a "y", whole integer, no float, number that 
equals to n 



*/


var isPowerOfTwo = function(n) {

    // Check if there's any remainder left if we 
    // find the log base 2 of n 

    // ex: Math.log2(1) = 0
    // Math.log2(4) = 2
    // IF there's a remainder, it's because there's not a 
    // whole number 2 ^ x = n, so false 
    if(Math.log2(n) % 1 === 0) {
        return true;
    } else {
        return false;
    }
    
    
};

