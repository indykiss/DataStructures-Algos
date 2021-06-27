
/*
Count Primes

Count the number of prime numbers less than a non-negative number, n.

n = 10
Output: 4
Explanation: There are 4 prime nums less than 10 => 2, 3, 5, 7.

Strategy:
- Make func that checks if num is prime
- Iterate from 3 -> n, using helper
- Increment count when we find a prime number

*/

// Correct : O(n * sqrt(n))
var countPrimes = function(n) {
    let count = 1; 
    
    if(n <= 2) return 0; 
    
    function isPrime(num) {
        // Sqrt of prime num is irrational, so can do this:
        for(let j = 3; j <= Math.sqrt(num); j += 2) {
            // if there is no remainder, then not prime
            if(num % j === 0) return false;
        }
        return true; 
    }
    
    for(let i = 3; i < n; i += 2) {
        if(isPrime(i)) count++;
    }
    
    return count;
}



// slow but simple
var countPrimesSlow = function(n) {
    let count = 1; 
    
    if(n <= 2) return 0
    
    // check if prime 
    function isPrime(num) {
      for(var i = 2; i < num; i++) {
        if(num % i === 0) return false;          
      }
      return true;
    }

    // Count nums from 0 to n
    for(let i = 3; i < n; i++) {
        if(isPrime(i)) count++;
    }
    
    return count;
};


