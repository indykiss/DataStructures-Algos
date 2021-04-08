/*
Is subsequence

Strategy: 
s: abc 
     ^  

t: aabbc
       ^
- Two pointers, one at s and one at t
- While pointer at t is not pointing to
the char at s pointer, then increment 
- Once s[ptS] === t[ptT], increment s pointer 

*/

var isSubsequence = function(s, t) {
    let ptS = 0, 
        ptT = 0; 
    
    for(let ptT = 0; ptT < t.length; ptT++) {        
        if(s[ptS] === t[ptT]) {
            ptS++; 
        }
    }
    
    return ptS === s.length;
};
