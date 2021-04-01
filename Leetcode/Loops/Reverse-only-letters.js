
/*
Reverse Only Letters

Given a string S, return the "reversed" string 
where all characters that are not a letter 
stay in the same place, and all letters reverse their positions.

Input: "ab-cd!"
Output: "dc-ba!"



Strategy:
- Iterate thru str
 - If not "-" add to stack 
 - If "-", add idx to set to track 
- From 0 -> str.length 
 - At i, check if set has that idx
 if so, add "-" to res arr
 - If not, pop ele from stack 

Better strategy : Use two pointers to swap letters, leave the 
symbols alone 

Edge cases/ considerations:
- Ints, dashs, asteriks, parentheses, etc? 

*/

// lots of space
var reverseOnlyLettersHeavy = function(S) {
    let res = [], 
        stack = [],
        symbolQ = [],
        symbolSet = new Set();
    
    for(let i = 0; i < S.length; i++) {
        if(!isLetter(S[i])) {
            symbolQ.push(S[i]);
            symbolSet.add(i);
        } else {
            stack.push(S[i]);
        }
    }
    
    for(let j = 0; j < S.length; j++) {
        if(symbolSet.has(j)) {
            res.push(symbolQ.shift());
        } else {
            res.push(stack.pop());
        }
    }
    return res.join("");
};


var isLetter = function(char) {
    return char.toLowerCase() !== char.toUpperCase();
}






