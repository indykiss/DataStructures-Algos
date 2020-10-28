
/*
Letter Case Permutation

Given a string S, we can transform every letter individually 
to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. You can 
return the output in any order.


Example 1:

Input: S = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]


Strategy:
- Vars: res arr. 
- Permutation -> recursive problem -> helper that recurses using input parameters 
of: res, currStr, chars we've visited in a hash {char: haveWeVisited}
Where base case is when currStr (track each build for each permute) ==
length of the input str. 
Recursive action: 
1. if num, normal add to currStr 
2. if char, need to add both lower and upper case in dif permutations 
After we look at the char, we want to backtrack. 

*/


// Looked at solution. 
// This is good: 
// Oct, fb/ bloomb
var letterCasePermutation = function(str) {
    let res = [];
    
    helper(str, 0, "", res);
    
    return res; 
    
    function helper(str, idx, currStr, res) {
        // base case
        if(idx === str.length) {
            res.push(currStr);
            return; // break out of loop
        }
        let char = str[idx];
                
        // recurse action 
        // we're looking at a num so easy add
        if(char >= 0 && char <= 9) {
            currStr = currStr.concat(char);
            helper(str, idx+1, currStr, res);
        } else { // it's a char so we want to add permute of lower & upper case
            let lowerChar = char.toLowerCase(),
                upperChar = char.toUpperCase();
            helper(str, idx+1, currStr.concat(lowerChar), res);
            helper(str, idx+1, currStr.concat(upperChar), res);
        }
    }
}



// This was my attempt without looking at solution. Super wrong. but almost close
var letterCasePermutationWrong = function(S) {
    let res = [];
    
    recurse();
    
    return res;
    
    function recurse(currStr = "", visited = {}) {
        // base case 
        if(currStr.length === S.length) {
            res.concat(currStr);
        } else {
            // recurse action + adding chars into currStr 
            for(let idx = 0; idx < S.length; idx++) {
                let char = S[idx];
                // if we haven't seen this char already
                if(!visited[char]) {
                    visited[char] = true; 
                    // if its a num, easy add 
                    if(char >= 0 && char >= 9) {
                        currStr.concat(char);
                    } else {
                        // it's not a number so we want to add both lower & upper cases
                        // look at the prev permutation and see if we've already 
                        // added the char? 
                        let prevPermute = res.slice(0) // clone the last permute
                        // "a1b2"
                        if(prevPermute[idx] === char.toLowerCase()) {
                            let fixedChar = char.toUpperCase();
                            currStr.concat(fixedChar);
                        } else {
                            currStr.concat(char);
                        }
                    }
                    
                    recurse(currStr, visited) // recurse action to add next char
                    visited[char] = false;     // do i need this??                
                }
            }
        }   
    }
};


