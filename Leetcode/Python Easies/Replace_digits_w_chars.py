# Replace All Digits with Characters

# Input: s = "a1c1e1"
# Output: "abcdef"
# Explanation: The digits are replaced as follows:
# - s[1] -> shift('a',1) = 'b'
# - s[3] -> shift('c',1) = 'd'
# - s[5] -> shift('e',1) = 'f'

# a1c1e1 
# abcdef, bitwise
class Solution:
    def replaceDigits(self, s: str) -> str:
        # take in char and x to add # to shift, then convert back to char 
        def shift(og_char, num_to_shift): 
            return chr(ord(og_char) + num_to_shift)
        
        arr = list(s)
        res = [""] * len(arr)
        for i, ch in enumerate(arr):
            prev = arr[i-1] 
            if ch.isdigit():
                res[i] = shift(prev, int(ch))
            else:
                res[i] = ch
        return "".join(res)


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
    
