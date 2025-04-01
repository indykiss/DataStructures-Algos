


/*

Greatest Common Divisor of Strings

For strings S and T, we say "T divides S" if and only
 if S = T + ... + T  (T concatenated with itself 1 or 
    more times)

Return the largest string X such that X divides str1 
and X divides str2.

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Input: str1 = "LEET", str2 = "CODE"
Output: ""

*/

// YA IDK WTF HAPPENED HERE 

var gcdOfStrings = function(str1, str2) {
    let longer, shorter;
    
    // IDs the longest str
    if(str1.length > str2.length) {
         longer = str1; 
         shorter = str2;
    } else {
         longer = str2; 
         shorter = str1;        
    }
    // Helper that finds the greatest common divisor, X
    let gcd2 = gcd(str1.length, str2.length);
    
    // Loop through longest str and see if shorter exists in longer at least twice?
    for(let i = 0; i < longer.length; i++) {
        let j = i % gcd2;
        if(longer[i] != shorter[j]) {
            return ""
        }
    }
    // Return longest substr
    return shorter.substring(0, gcd2);
}

// Recursive
var gcd = function(a, b) {
    if (a === 0) return b;
    if(b === 0) return a;
    
    if(b > a) {
        [a, b] = [b, a];
    }
    
    return gcd(b, a % b);
}
