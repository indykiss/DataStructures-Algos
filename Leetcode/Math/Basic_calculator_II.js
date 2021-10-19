

/*
Basic Calculator II
https://leetcode.com/problems/basic-calculator-ii/

Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().


Strategy:
- Operations to manage: /, *, +, - 
- Get str, returning int 
- "3" -> toNumber -> 3
- Iterate through s
    - Helper: if char is "1", return 1 ... 9 
    - Adding the ints to a stack
    - If we hit one of the above operators, add to stack 

- Stack of ints & operators
- Order of operations, / and * happens before and - 
    - 1 + 2 * 2  =>  5
- Iterate thru stack, do multiply and divide maths first 
    - [2, *, 2] -> [4] 
    - Further: can change to work w/ [12, *, 12]
- Iterate thru stack again and do additions/ subtracts

- Return a final return int 

*/



// Actually very close! 
var calculate = function(s) {
    let stack = s.split(""),
        st = [],
        res = 1; 
    
    // get rid of white spaces and combine multiply digits
    for(let j = 0; j < stack.length; j++) {
        let char = stack[j]
        if(char !== " ") {
            st.push(char); 
        }
    }
        
    // Do math with our stack: multiply and division  
    for(let i = 0; i < st.length; i++) {
        let operator = st[i+1], 
            num1 = parseInt(st[i]), 
            num2 = parseInt(st[i+2]); 
        
        // [4, /, 4]
        if(operator == "*") {
            let sum = num1 * num2; 
            st[i] = sum;
            st.splice(i+1, 2); // delete operatior and num2
            i--; 
        } else if(operator == "/") {
            let tempSum = Math.floor(num1 / num2);
            if(tempSum < 0 && num1 % num2 !== 0) tempSum++;
            
            st[i] = tempSum; 
            st.splice(i+1, 2);
            i--;
        } else {
            i++;
        }
    }
        
    // Do math with our stack: add and subtract
    for(let j = 0; j < st.length; j++) {
        let operator = st[j+1], 
            num1 = parseInt(st[j]), 
            num2 = parseInt(st[j+2]); 
        
        if(operator == "+") {
            let sum = num1 + num2; 
            st[j] = sum;
            st.splice(j+1, 2); // delete operatior and num2
            j--; 
        } else if(operator == "-") {
            let sum = num1 - num2; // % maybe 
            st[j] = sum; 
            st.splice(j+1, 2);
            j--;
        } else {
            j++;
        }
    }
    
    // hopefully have 1 num left in st
    return st[0];
};

