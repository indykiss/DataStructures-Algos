
/*
Add Strings

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Input: 
"2", "4" => '16'
"12", "4" => '16'

No using BigInteger lib or converting number to integer directly

*/
// Need to just memorize. Do this again
var addStrings = function(num1, num2) {
    let result= ""; 
    let temp = 0;
    let num1i = num1.length - 1;
    let num2i = num2.length - 1;
    
    // While loop through the end of each num 
    while(num1i >=0 || num2i >=0) {
        const val1 = num1[num1i--] || 0;
        const val2 = num2[num2i--] || 0;
        // The +variable gives us its numeric representation
        const sum = +val1 + +val2 + temp;
        result = sum % 10 + result;
        temp = Math.trunc(sum/10)
    }
    if(temp) {
        result = temp + result;
    }
    return result;
}
