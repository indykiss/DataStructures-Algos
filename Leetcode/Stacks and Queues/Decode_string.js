
/*
Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string 
inside the square brackets is being repeated exactly k times. Note 
that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white 
spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain 
any digits and that digits are only for those repeat numbers, k. 
For example, there won't be input like 3a or 2[4].

Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Input: s = "3[a2[c]]"
Output: "accaccacc"

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"
*/

/* 
Just looked at solution: 1 hr for wrong way 

Strat: 
- Traverse the string s and push into a stack for non-] character
- When we meets the ] character, we should do these steps
pop all characters until meets [
pop all numbers to get the repeat count
repeat the substring and push it back to stack
Finally, we join all the pieces in the stack
*/
var decodeString = function(s) {
    let stack = [];
    
    for(let char of s) {
        
        if(char !== ']') {
            stack.push(char);
            continue;
        }
        
        let curr = stack.pop(),
            str = "";
        
        while(curr !== '[') {
            str = curr + str;
            curr = stack.pop();
        }
        
        let numToMulti = "";
        
        curr = stack.pop();
        
        while(curr >= 0 && curr <= 9) {
            numToMulti = curr + numToMulti;
            curr = stack.pop();
        }
        
        stack.push(curr);
        stack.push(str.repeat(Number(numToMulti)));
    }
    return stack.join('');
}


/*
Strat: Wrong way to do this

Not right but a valiant effort. 1 distracted hour. 

- Iterate thru str 
- If we find a number, next har should be a [. 
] is when the slice ends. SO we need to save:
    - Vars: numToMultiple, index start [, index stop ]
    Once we see a stop. Slice s from start-stop, multiply it by numToMulti, 
    then concat to the res str.  
    - Once we have an end, reset the num/start/stop 
*/
var decodeStringWrong = function(s) {
    let res = "",
        start = 0, 
        numToMulti = 0;
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if(char >= 1 && char <= 9) {
            numToMulti = char; 
            
        } else if(char === "[" && numToMulti > 0) {
            start = i + 1;
            
        } else if(char === "]" && numToMulti > 0 && start > 0) {
            let j = 0
            
            while(j < numToMulti - 1) {
                res += s.slice(start, i);
                j++;
            }
            start = 0;
            numToMulti = 0;
        } else {
            res += char;  // if not a num or [] then it's a letter 
        }
    }
    return res;
};


function isALetter(char) {
    if(char.toUpperCase() !== char.toLowerCase() )
       return true;
    else {
        return false;
    }
}



