# Remove Outermost Parentheses

# Input: s = "(()())(())"
# Output: "()()()"
# Explanation: 
# The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
# After removing outer parentheses of each part, this is "()()" + "()" = "()()()".


class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        res = ""
        openCount = 0
        
        for char in s:
            if char == ")":
                openCount = openCount - 1
            if openCount > 0:
                res += char
            if char == "(":
                openCount = openCount + 1
        
        return res