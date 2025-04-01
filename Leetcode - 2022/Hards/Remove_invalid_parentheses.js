

/*
Remove Invalid Parentheses

Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).


Input: "()())()"  =>.  Output: ["()()()", "(())()"]

"(a)())()"   =>. Output: ["(a)()()", "(a())()"]


Strat:
- Find the unmatched (, because we know ) should come after (. 
- Iterate thru str:
    - Track the number of ( and ) there is
    - Once we have the number of unmatched ( or ), we go back and delete the unmatched 
- 
?????

*/


// Literally copied and pasted. Have zero clue whats
// going on. 
var countInvalidParenthesis = function(str) {
    
    // Let's see how many unmatched chars we have 
    let count = 0;
    for(let char of str) {
        if(char === "(") {
            count++;
        } else if(char === ")") {
            count--;
        }
        if(count < 0) {
            return false;
        }
    }
    return count === 0;  
}


var removeInvalidParentheses = function(s) {
    let res = []
    
    // Look around the char. 
    let l = 0, r = 0;
      for (const ch of s) {
         l += ch == "(";
         if (l == 0) {
             r += ch == ")";
         } else {
             l -= ch == ")";
         }
      }
        
    // DFS around chars? 
    const dfs = (s, start, l, r) => {
        if (!l && !r) {
          if (countInvalidParenthesis(s)) res.push(s);
          return;
        }
        for (let i = start; i != s.length; i += 1) {
          if (i != start && s[i] == s[i - 1]) continue;
          if (r) {
            if (s[i] != ")") continue;
            dfs(s.substr(0, i) + s.substr(i + 1), i, l, r - 1);
          } else {
            if (s[i] != "(") continue;
            dfs(s.substr(0, i) + s.substr(i + 1), i, l - 1, r);
          }
        }
      };
    
    dfs(s, 0, l, r); 

    
    return res;
    
};