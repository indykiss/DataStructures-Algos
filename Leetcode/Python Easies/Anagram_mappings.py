# Find Anagram Mappings

# You are given two integer arrays nums1 and nums2 where nums2 is 
# an anagram of nums1. Both arrays may contain duplicates.

# Return an index mapping array mapping from nums1 to nums2 where 
# mapping[i] = j means the ith element in nums1 appears in nums2 at index j. 
# If there are multiple answers, return any of them.

# An array a is an anagram of an array b means b is made by 
# randomizing the order of the elements in a.

# Input: nums1 = [84,46], nums2 = [84,46]
# Output: [0,1]

class Solution:
    def anagramMappings(self, nums1: List[int], nums2: List[int]) -> List[int]:
        mapping = []
        for i, num in enumerate(nums1):
            j = nums2.index(num) 
            mapping.insert(i, j) 

        return mapping       


class Solution2:
    def anagramMappings(self, nums1: List[int], nums2: List[int]) -> List[int]:
        arr = []
        dict2 = {}

        for j in range(len(nums2)):
            dict2[nums2[j]] = j
            
        for i in range(len(nums1)):
            idx = dict2[nums1[i]]
            arr.append(idx)
            
        return arr        
        
