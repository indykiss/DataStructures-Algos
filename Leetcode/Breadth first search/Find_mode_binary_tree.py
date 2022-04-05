
# Find Mode in Binary Search Tree

# Given the root of a binary search tree (BST) with duplicates, 
# return all the mode(s) (i.e., the most frequently occurred 
# element) in it.

# If the tree has more than one mode, return them in any order.

# Assume a BST is defined as follows:

# The left subtree of a node contains only nodes with keys 
# less than or equal to the node's key.
# The right subtree of a node contains only nodes with keys 
# greater than or equal to the node's key.
# Both the left and right subtrees must also be binary search trees.

class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        freq = {}
        
        q = []
        q.append(root)
        while q:
            ele = q.pop(0)
            freq[ele.val] = freq.get(ele.val, 0) + 1
            if ele.left: q.append(ele.left)
            if ele.right: q.append(ele.right)
                        
        max_modes = []
        max_freq = max(freq.values())
        
        for key, val in freq.items(): 
            if val == max_freq:
                max_modes.append(key)
                
        return max_modes
        
        