Lowest Common Ancestor of a Binary Tree
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# strategy: 
# iterate through tree, dfs, toggle if found one + its parent
# when find the other
# node can be descendant of itself
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root:
            return None
        ans = None

        def dfs(root):
            nonlocal ans 
            if not root:
                return False # return false if no matches
            # check if current node is a match
            maybeAnc = root == p or root == q
            # check if left or right have match
            left = dfs(root.left)
            right = dfs(root.right)
            # if any 2/3 flags are true, good enough
            if left + right + maybeAnc >= 2:
                ans = root
            # return true if we find one
            return maybeAnc or left or right

        dfs(root)
        return ans
