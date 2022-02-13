
# Delete Nodes And Return Forest

# Given the root of a binary tree, each node in the tree has a distinct value.

# After deleting all nodes with a value in to_delete, we are left with 
# a forest (a disjoint union of trees).

# Return the roots of the trees in the remaining forest. You may 
# return the result in any order.

# Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
# Output: [[1,2,null,4],[6],[7]]
# Example 2:

# Input: root = [1,2,4,null,3], to_delete = [3]
# Output: [[1,2,4]]


class Solution:
    def delNodes(self, root: Optional[TreeNode], to_delete: List[int]) -> List[TreeNode]:
        del_items = set(to_delete)
        ans = []
        
        def dfs(node):
            if not node: return 
            node.left = dfs(node.left)
            node.right = dfs(node.right)
            
            # add children into ans for nodes to be deleted
            if node.val in del_items: 
                if node.left: ans.append(node.left)  
                if node.right: ans.append(node.right) 
                return None # deleting the node
            else:
                return node 
            
        dfs(root)
        if root.val not in del_items:
            ans.append(root)
        
        return ans
        