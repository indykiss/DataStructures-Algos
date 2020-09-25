

/*
Palindrome number 

Determine if a num's a palindrome.
121 => true 
42524 => true
123 = > false

Strat: 2 pointer solution where we look L-> R and R-> L, checking 
that the pointer is equal. 
Also need to check if we've hit the middle num, it's still a 
palindrome if length of num is odd. 
*/

var isPalindrome = function(x) {
    let str = x.toString();
    
    let start = 0,
        end = str.length - 1;
    
    while(start < end) {
        
        if(str[start] != str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};