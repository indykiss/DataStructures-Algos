

/*
Bit manipulation  / Bit Math

Bits are base 2 nums, where 0 = no and 1 = yes; 
16-8-4-2-1 etc. 
1 1 1 1 1 = 16 + 8 + 4 + 2 + 1 = 31 

OR, using two's complement ie negative num, 
where the first num is neg: 
- 16 + 8 + 4 + 2 + 1 = -1 


Ex:
0110 + 0010 = 1000
*/

// Top 3 Bit questions:


// Binary to String: Convert a string into binary 




// Add Binary: Given two binary strs a and b, return their sum as a binary string.


function addBinary(a, b) {

    let convertA = BigInt("0b" + a), 
        convertB = BigInt("0b" + b); 
    
        return (convertA + convertB).toString(2);
}

/*
Strat:
- Make 2 pointers
- Process each individual addition by digit place 
as we run through the length of both nums 
*/

function addBinaryNoLib(a,b) {
    let sum = "";

    let r1 = a.length - 1, 
        r2 = b.length - 1,
        carry = false; 

    while(r1.length >= 0 || r2.length >= 0) {
        sum = sum + binaryAdder(r1, r2); 
        r1--;
        r2--;
    }

    function binaryAdder(r1, r2) {
        let miniSum = 0; 

        if(carry) {
            miniSum++; 
            carry = false; 
        }

        if(a[r1] === "1") {
            miniSum++;
        }
        if(b[r2] === "1") {
            miniSum++;
        }

        if(miniSum >= 2) {
            carry = true; 
            miniSum = miniSum - 2; 
        }  

        return miniSum; 
    }

    if(carry) {
        sum = "1" + sum; 
    }

    return sum; 
}