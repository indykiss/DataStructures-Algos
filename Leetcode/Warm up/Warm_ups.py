

# Contains duplicates II
# Given an array of integers and an integer k, find out whether 
# there are two distinct indices i and j in the array such that 
# nums[i] = nums[j] and the absolute difference between i and j 
# is at most k.


function dupeFinder(arr, k):
	tracker = {} # num : idx
 
	for i, val in enumerate(arr): 
		if char in tracker:
			j = tracker[char]
			if i - j <= k: 
				return True
		tracker[char] = i
	
	return False


