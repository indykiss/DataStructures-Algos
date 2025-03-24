
/*
Add Strings

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Input: 
"2", "4" => '16'
"12", "4" => '16'

No using BigInteger lib or converting number to integer directly

*/


class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        res = []
        i, j  = len(num1)-1, len(num2)-1 
        carry = False

        while i >=0 or j >=0:
            d1 = int(num1[i]) if i >= 0 else 0
            d2 = int(num2[j]) if j >= 0 else 0
            miniSum = d1 + d2
            miniSum = miniSum + 1 if carry else miniSum
            if miniSum > 9:
                carry = True
                miniSum -= 10
            else:
                carry = False
            res.append(str(miniSum))
            i -= 1
            j -= 1

        if carry:
            res.append("1")

        return ''.join(res[::-1])

        
            
                

// Do me again. Oct, FB: 
var addStrings = function(num1, num2) {
    let sum = 0,
        carry = 0,
        out = "",
        idx1 = num1.length - 1,
        idx2 = num2.length - 1,
        minLength = num1.length > num2.length ? num1.length : num2.length; 
    
    for(let i = 0; i < minLength; i++) {
        sum = parseInt(num1[idx1-i] || 0) 
            + parseInt(num2[idx2-i] || 0) + carry;

        out = sum%10 + out;
        
        carry = Math.floor(sum/10);
    }
    
    if(carry > 0) {
        out = carry + out;
    }
    
    return out;  
};



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
