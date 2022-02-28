
# Given a string replace the largest repeated substring at every point with an asterisk(*). The goal is end result should be a minimal length string after compression

# For example, s = "abcabcd " should become "abc*d", Reason: we know abc has repeated twice, so replace the entire second instance of abc with an *.

# and if s = "aabbaabb" it should become "a*bb*", Reason: At index 1, a is repeated twice so put an * there, and aabb has repeated twice so replace it's second instance with an *. In this example we don't put an * right after b at index 3 because aab* would represent aabaab, but that isn't the case.


def compressStr(s: str): 
    ans = ""

    i = 0 
    while i < len(s): 
        # check if the right half 
        # matches the left half sliced by twice of the size of window 
        if s[:i+1] == s[i+1: 2*i+2]: 
            ans += s[i] + "*"
            # if so, increment 2
            i += (i+2) 
        # otherwise, increment 1 and add normal letter 
        else: 
            ans += s[i]
            i += 1
    return ans 
    

print(compressStr("aabbaabb"))




# String Compression
<!-- Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.


Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
Example 2: -->


class Solution:
    def compress(self, chars: List[str]) -> int:
        chars += " "  # use a dummy char to take care last char
        start = 0
        end = 0
        for i in range(len(chars)):
            if chars[i] != chars[start]: 
                chars[end] = chars[start]
                end += 1
                count = i - start
                # add the num 
                if count > 1:
                    for k in str(count):
                        chars[end] = k
                        end += 1
                start = i
        return end
        


# Given a log file, return IP address(es) which accesses the site most often.
# e.g: 
# "10.0.0.1 - log entry 1 11", 
# "10.0.0.1 - log entry 2 213", 
# "10.0.0.2 - log entry 1 11", 
# "10.0.0.2 - log entry 2 213", 
# "10.0.0.2 - log entry 133132"
# Ans: 10.0.0.2

# strategy:
# split based on " - "
# dictionary, based on IP address: freq
# return max freq, iterate through dictionary 

# O(n) time and O(n) space 
def returnIPAddress(ips): 
  if len(ips) == 0: return ""
  tracker = {}
  
  for ip in ips: 
    str = ip.split(" - ") 
    tracker[str[0]] = 1 + tracker.get(str[0], 0) 

  max_val = max(tracker.values())

  for key, val in tracker.items(): 
    if val == max_val: 
      return key 

print(returnIPAddress(["10.0.0.1 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.2 - log entry 1 11"]))

print(returnIPAddress(["10.0.0.1 - log entry 1 11", "10.0.0.2 - log entry 1 11"]))

print(returnIPAddress([""]))




# Train Map Problem
# Rail network - consists of number of the Station objects. 
# Stations in the map are bi-directionally connected. 
# Distance between any 2 stations is of same constant distance unit. 
# This implies that shortest distance between any 2 stations depends 
# only on number of stations in between.

# Implement def shortestPath(self, fromStationName, toStationName) 
# method to find shortest path between 2 stations.

# Approach: Use BFS, keeping a track of predecessor paths. 
# Maintain visited nodes to avoid cycle.

def shortestPath(fromStationName, toStationName):
  mapping = {"a": ["b", "c"], "b":["a"], "c": ["a", "d"], "d": ["c"]}
  shortestPath = float('inf')    
  queue = []
  queue.append([fromStationName, 1]) 
  visited = set()
    
  while queue: 
    ele = queue.pop(0)
    visited.add(ele[0])
    stations = mapping[ele[0]]
    currPath = ele[1] 

    for station in stations: 
      if station == toStationName: 
        shortestPath = min(shortestPath, currPath)
      else: 
        if station not in visited:
          queue.append([station, currPath+1])

  return shortestPath 


print(shortestPath("a", "d")) # 2
print(shortestPath("a", "b")) # 1
# edge: no connection between start and end? 



# Decode String
# Given an encoded string, return its decoded string.

# The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
    
# Input: s = "3[a]2[bc]"
# Output: "aaabcbc"

class Solution:
    def decodeString(self, string: str) -> str:
        nums = []
        strs = []
        res = ""
        num = ""
        
        for char in string: 
            # if its a num, add to the string
            if char.isdigit():
                num += char
            # if we're at an open bracket, 
            elif char == "[":
                nums.append(int(num))
                strs.append(res)
                num = ""
                res = ""
            elif char == "]":
                res = strs.pop() + (nums.pop() * res)
            else:
                res += char 
                
        return res
            


<!-- Minimum Size Subarray Sum
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2 -->

# strategy
# sliding window 

class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        min_len = float('inf')
        start = 0
        curr_sum = 0
        
        for end in range(len(nums)): 
            curr_sum += nums[end]
            while curr_sum >= target:
                min_len = min(end-start+1, min_len)
                curr_sum -= nums[start]
                start += 1 

        if min_len == float('inf'): return 0
        return min_len


<!-- Decode Ways -->
<!-- A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"

To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it. -->
# DP
class Solution:
    def numDecodings(self, s: str) -> int:
        # Array to store the subproblem results
        dp = [0] * (len(s)+1)

        dp[0] = 1
        dp[1] = 1 if s[0] != '0' else 0 # edge: "06"


        for i in range(2, len(dp)):
            # Check single digit decode
            if s[i - 1] != '0':
                dp[i] = dp[i - 1]

            # Check two digit decode
            two_digit_substr = s[i - 2 : i]
            two_digit_num = int(two_digit_substr)
            if two_digit_num >= 10 and two_digit_num <= 26:
                dp[i] += dp[i - 2]
                
        return dp[len(s)]

<!-- Traversing a tree:

In-order:
    1. Traverse the left subtree, i.e., call Inorder(left-subtree)
    2. Visit the root.
    3. Traverse the right subtree, i.e., call Inorder(right-subtree)
Post-order: 
    1. Traverse the left subtree, i.e., call Postorder(left-subtree)
    2. Traverse the right subtree, i.e., call Postorder(right-subtree)
    3. Visit the root.
Pre-order: 
    1. Visit the root.
    2. Traverse the left subtree, i.e., call Preorder(left-subtree)
    3. Traverse the right subtree, i.e., call Preorder(right-subtree) -->