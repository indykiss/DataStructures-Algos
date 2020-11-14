
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


/* 
Strat: 
- Convert to arr so easy to handle
- Stack that holds openers' indices
- If we find a closer, we can remove an opener from stack 
so that's a matching set. Nothing to remove here 
- If we find a closer when there is nothing left in stack, 
we can set this new closer equal to "" 
- At the end of 1st loop, we loop through stack of indices, 
and set arr[index] = ""
- Return arr.join('');
*/

// Was fine. Took 30 but got close. 
var minRemoveToMakeValid = function(s) {
    let arr = s.split(''),
        stack = [];
    
    for(let i = 0; i < arr.length; i++) {
        let char = arr[i];
        if(char == '(') {
            stack.push(i)
        }
        else if (char == ')') {
            if(stack.length > 0) stack.pop();
            else arr[i] = '';
        }
    }
    
    // we also need to handle extra openers 
    // at each index saved in stack
    for(let index of stack){
        arr[index] = "";
    }
    return arr.join('');
};



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