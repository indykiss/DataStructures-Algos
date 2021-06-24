


/*
Sum of Two Integers

Given two integers a and b, return the sum of the two 
integers without using the operators + and -.

Strategy:
- Add two numbers without using + or -
- Can we increment/ decrement by 1
    - num++, num-- ? 

*/


var getSum = function(a, b) {
    let res = 0;
    
    // if nums are positive
    while(a > 0) {
        res++; 
        a--;
    }
    
    while(b > 0) {
        res++;
        b--;
    }
    // if nums aer negative
    while(b < 0) {
        res--;
        b++;
    }
    while(a < 0) {
        res--; 
        a++;
    }
    
    return res;
    
};