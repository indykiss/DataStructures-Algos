

/*
Plus one 

Given a non-empty array of decimal digits representing a 
non-negative integer, increment one to the integer.

[1,2,3] => [1,2,4]
[9,9,9] => [1,0,0,0]
Neg? no negative nums 

*/


var plusOne = function(digits) {
    let res = [...digits],
        carry = false;
    
    for(let i = digits.length - 1; i >= 0; i--) {
        let num = digits[i]; 
        
        if(num < 9) {
            res[i] += 1; 
            return res; 
        }
        res[i] = 0;
    }
    
    res.unshift(1);
    return res;
    
};

