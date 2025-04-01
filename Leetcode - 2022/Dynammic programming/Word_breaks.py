


# Word break I:
# DP Strategy:
# DP, build a matrix of T or F
# Check if the substr is in worddict or not 

# Return T or F if all the words in str is in given word dict
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        n = len(s)
        dp = [False for i in range(n+1)]
        dp[0] = True 

        for start in range(n):
            # check if our starting char is wordDict
            if not dp[start]:
                continue
            for end in range(start+1, n+1):
                # check if substr from start to end is in 
                # our word dict
                if s[start:end] in wordDict:
                    dp[end] = True 


        return dp[n]


# Word break II
# Lol no, I dont understand 
