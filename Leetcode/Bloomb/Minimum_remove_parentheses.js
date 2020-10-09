
/*
Minimum Remove to Make Valid Parentheses

Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', 
in any positions ) so that the resulting parentheses string is valid and 
return any valid string.

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

*/

var minRemoveToMakeValid = function(s) {
    
    let arr = s.split(''),
        stack = [];
    
    // Loop through str. 
        // Add openers into a stack. 
        // If we find a closer and stack has length, remove from stack
    for(let i = 0; i < arr.length; i++) {
        let char = arr[i];
        
        if(char == '(') stack.push(i);
        
        else if (char == ')') {
            if(stack.length > 0) stack.pop();
            else arr[i] = '';
        }
    }
    
    for(let i of stack) {
        arr[i] = '';
    }
    
    return arr.join('');
};