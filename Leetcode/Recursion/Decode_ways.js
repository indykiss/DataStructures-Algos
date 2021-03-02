/*
Decode Ways

A message containing letters from A-Z can be encoded into numbers using the 
following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be mapped back into 
letters using the reverse of the mapping above (there may be multiple ways). 
For example, "111" can have each of its "1"s be mapped into 'A's to make "AAA", 
or it could be mapped to "11" and "1" ('K' and 'A' respectively) to make "KA". 
Note that "06" cannot be mapped into 'F' since "6" is different from "06".

Given a non-empty string num containing only digits, return the number of ways 
to decode it.

The answer is guaranteed to fit in a 32-bit integer.



Strat:
- Recursive, use memoization (a map) to hold on to substr => counter relationship
    - In recursive case, base is if 

Considerations:
- Capitalization doesn't matter
- Iterations count differently: "mn"/"nm"
- S !== 0, return fase
- Very large? Can assume small.ish number
- "1.6" ? Not a possiblity
*/




var numDecodings = function(str) {
    // Use memo to save mappings
    let memo = new Map(); 
    
    return memoizer(memo, str);
};


var memoizer = function(memo, str) {
    
    // Base case for recursion:
    if(str[0] == '0') return 0; 
    if(str.length <= 1) return 1; 
    
    // Memo to save space
    if(memo.has(str)) return memo.get(str);
    
    let counter = 0; 
    
        // For 1 digit & rest of substr:
    let prefix1 = str.slice(0,1),
        suffix1 = str.slice(1),
        // For 2 digits & rest of substr: 
        prefix2 = str.slice(0,2),
        suffix2 = str.slice(2);
    
    // Recurse using prefix and suffix
    counter += memoizer(memo, suffix1);
    
    // Check if ?????
    if(Number(prefix2) <= 26) {
        counter += memoizer(memo, suffix2);    
    }
    
    // Add to memo for future checks
    memo.set(str, counter);
    
    return counter;
}





// Geek for geeks hw practice: https://www.geeksforgeeks.org/count-possible-decodings-given-digit-sequence/

/*
Strategy: DP
- Base:
    - If n = 1, return 1   // "1" = A => 1 
    - If n = 0, return 0   // "0" => 0 
- Iterate thru the length of the str 
    - Recurse when n >= 10 && n <= 26 


Considerations: 
- Digits? 0 -9 
- Empty str 
- Float? 3.5 No 
*/


function decodings(str) {
    let dp = Array(str.length + 1).fill(0); 

    dp[0] = 1; 

    for(let i = 1; i <= str.length; i++) {
        let singleDigit = str.slice(i-1, i),
            twoDigit = str.slice(i-2, i); // off by 1? 

        if(singleDigit >= 1) {
            dp[i] = dp[i-1];
        }

        if(twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i-2];
        }
    }

    return dp[str.length];
}