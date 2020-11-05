

/*
Pow(x, n)

Implement pow(x, n), which calculates x raised to the power n (i.e. xn).

Input: x = 2.00000, n = 10
Output: 1024.00000

x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

*/

var myPow = function(x, n) {
    
    // If n is negative, we need to do 1/x and 
    // make n become positive
    if(n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    // use helper for recursion
    return powMath(x, n);
    
    function powMath(x, n) {
        
        // base case
        if(n === 0) return 1;
        
        // N**N = N**(N/2 x 2) = N**(N/2) x N**(N/2) 
        let half = powMath(x, parseInt(n/2));
        
        // if even 
        if(n % 2 === 0) { 
            return half * half;
        } else {
            return half * half * x;   
        }
    }
    
    
}
// Time: O(log N)
// Space: O(log N)


// If we can use x**n:
var myPowEasy = function(x, n) {
    return x**n; 
};
