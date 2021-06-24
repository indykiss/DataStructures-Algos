
/*
Happy Number

Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Strat: Recursive two pointer?


Ex: 23 => true 

2^2 + 3^2 = 1 + 9 = 13
1^2 + 3^2 = 1 + 9 = 10
1^2 + 0^2 = 1 + 0 = 1  HAPPY! 


Ex: 12 => false 
1^2 + 2^2 = 1 + 4 = 5
5^2 = 25 
2^2 + 5^2 = 4 + 25 = 29
... 4 + 81 = 85 
... 64 + 25 = 89
... 142
... 42
... 20
... 4
... 16
... 37
... 58
... 89

False bc we've seen 89 twice. BC of this, we won't see a 1 ever. 
It's a cycle of non-one numbers. 

vars: sum, 

St1. loop thru the num, square each int within and add to sum 
St2. Recurse bc we need to loop thru this new sum 
St3. Base case: if sum = 1, we're happy 


*/


// FB/ Bloomb, Oct. Definitely do me again
    // Very common one. 
    // Youtube has great videos on this. 
var isHappy = function(n) {
    let slow = n, 
        fast = n;
    
    while(true) {
        slow = find_square(slow); // go 1 step
        fast = find_square(find_square(fast)) // go 2 steps
     
        if(slow === fast) { // we have a cycle so sad number
            break;
        }
    }
    
    return slow === 1; // check if our final squared num is 1
    
    function find_square(num) {
        let sum = 0;
        while(num > 0) {
            let digit = num % 10; // ID each digit in the 23 num
            sum += digit * digit;
            num = Math.floor(num/10) // move to the next digit spot
        }
        return sum;
    }
};
