
/*
Regular Expression Matching

Given an input string (s) and a pattern (p), 
implement regular expression matching with support for '.' and '*' where: 

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".


Edge:
- Assume lengths must be equal? No:
str = "aab" , pattern = "c*a*b"
Where c* can be zero and a* can be aa. 

Strat:
- Recursive solution where we just look at a char and if there's
* or . after it 

*/

// Legit just read and copied. IDK. 
var isMatch = function(s, p) {
    
    // base case: when we're done with pattern
        // if str still has stuff, false
        // if str done too, true
    if(!p) {
        if(s.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    
    // 
    let hasFirstCharMatch = Boolean(s) && 
        (p[0] === "." || p[0] === s[0]) 
    
    // track when the next char is *
    // if next pattern match (after *) is fine with current string, then proceed with it (s, p+2).  That's because the current pattern may be skipped.
        // otherwise check hasFirstCharMatch. That's because if we want to proceed with the current pattern, we must be sure that the current pattern char matches the char
		// If hasFirstCharMatch is true, then do the recursion with next char and current pattern (s+1, p).  That's because current char matches the pattern char. 
    if(p[1] === "*") {
        return (isMatch(s, p.slice(2)) || (hasFirstCharMatch && isMatch(s.slice(1), p))); 
    }
    
    // now we know for sure that we need to do 2 simple actions
	// check the current pattern and string chars
	// if so, then can proceed with next string and pattern chars (s+1, p+1)
    return hasFirstCharMatch ? isMatch(s.slice(1), p.slice(1)) : false 
    
};
