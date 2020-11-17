

/*
Generate Parentheses

Given n pairs of parentheses, write a function to generate 
all combinations of well-formed parentheses.

Examples:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

n = 1 =>  ["()"]

n = 2 => ["(())", "()()"] 

Strat:
- Vars: res arr 
- Recursive 
- Constraints: must be well balanced parenthesis. No closers before openers.
And must have equal number of openers as closers. 
Length of each of our individual strs will be two x N. B/c opener:closer for
every 1 pair. This will be our base case. 

1. We're given N NUMBER OF OPEN PARENTHESIS. (and closing parenthesis). 
Generate all the possible permutations OF PARENTHESIS we can have. No clear
pattern of input- output, so it's O(2^N) time
2. This is a backtracking, recursive problem. 
3. As we go along, we need to track the fact that we have n number of
opening AND closing brackets. After each add of opener OR closer, we 
want to decrement the thing we just used. BUT remember we cant put 
a closer before an opener. 

*/

// not great but fine 
var generateParenthesis = function(n) {
    let res = []; 
    
    generateOne(n-1, n, "("); 
    
    return res;
    
    function generateOne(openers, closers, currStr) {
        // base:
        if(openers === 0 && closers === 0) {
            res.push(currStr); 
            return;
        }
        
        if(openers > 0) {
           generateOne(openers - 1, closers, currStr + "(");
        }  
        
        if(closers > openers && closers > 0) {
            generateOne(openers, closers -1, currStr + ")");
        } 
    }    
}


// Needed like 4 hints. 30 mins. Nov. 
var generateParenthesis = function(n) {
    let res = [];
    
    genHelper(openers = n-1, closers = n, "(");
    
    return res;

    function genHelper(openers, closers, currStr) {
        // base 
        if(openers === 0 && closers === 0) {
            res.push(currStr);
            return;
        }
        
        // Add opener
        if(openers > 0) {
            genHelper(openers-1, closers, currStr + "(");
        }
        // Add closer 
        if(closers > 0 && closers > openers) {
            genHelper(openers, closers - 1, currStr + ")");
        }
    }
}








var generateParenthesis = function(n) {
    
    const res = [];
    recurseHelper(n - 1, n, "("); // we have to start by adding in opener
        // BC we're adding an opener in immediately, we have 1 less opener
    return res; 
    
    function recurseHelper(openers, closers, curr) {
        // base case 
        if (openers === 0 && closers === 0) {
          res.push(curr);
          return; 
        }
        
        // if we have any openers left, let's add opener 
        if (openers > 0) {
            recurseHelper(openers - 1, closers, curr + '(');
        }
        
        // if we have closers and if we have more closers than openers left 
        // to add to our curr str. bc we've used openers, that's why closers > openers
        if (closers > 0 && closers > openers) {
            recurseHelper(openers, closers - 1, curr + ')');
        }
    }
};