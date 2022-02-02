

# License Key Formatting

# You are given a license key represented as a string s that consists of 
# only alphanumeric characters and dashes. The string is separated into 
# n + 1 groups by n dashes. You are also given an integer k.

# We want to reformat the string s such that each group contains exactly 
# k characters, except for the first group, which could be shorter 
# than k but still must contain at least one character. Furthermore, 
# there must be a dash inserted between two groups, and you should 
# convert all lowercase letters to uppercase.

# Return the reformatted license key.


# Input: s = "5F3Z-2e-9-w", k = 4
# Output: "5F3Z-2E9W"
# Explanation: The string s has been split into two parts, each part has 4 chars.
# Note that the two extra dashes are not needed and can be removed.

# Input: s = "2-5g-3-J", k = 2
# Output: "2-5G-3J"
# Explanation: The string s has been split into three parts, each part has 2 
# characters except the first part as it could be shorter as mentioned above.



class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        
        caps_no_dashes = s.replace('-', '').upper()
        rev_raw = caps_no_dashes[::-1]
        res = ''        
        count = 0 
        
        for char in rev_raw:
            if count == k:
                res += '-'
                count = 0
            res += char
            count += 1
            
        return res[::-1]
        
        