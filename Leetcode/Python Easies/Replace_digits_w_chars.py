# Replace All Digits with Characters

# Input: s = "a1c1e1"
# Output: "abcdef"
# Explanation: The digits are replaced as follows:
# - s[1] -> shift('a',1) = 'b'
# - s[3] -> shift('c',1) = 'd'
# - s[5] -> shift('e',1) = 'f'


class Solution:
    def replaceDigits(self, s: str) -> str:
        res = ''
        
        for i in range(len(s)):
            if i % 2 == 0:
                res += s[i]
            else:
                char = chr(ord(s[i-1]) + int(s[i]))
                res += char
            
        return res
    