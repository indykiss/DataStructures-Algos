

# Traverse a tree using:
# - In order 
# - Preorder
# - Postorder
# Return vals in a list



# Inorder
# traverse(left), arr.append(curr.val), traverse(right)
class Solution:
    def increasingBST(self, root: TreeNode) -> TreeNode:
        vals = []
        def inorder(node):
            if node:   
                inorder(node.left)
                vals.append(node.val)
                inorder(node.right)
        inorder(root)
        return vals
        

# Preorder
# arr.append(curr.val), traverse(left), traverse(right)
class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        vals = []
        def rec(root):
            if root:
                vals.append(root.val)
                for child in root.children:
                    rec(child)     
        rec(root)
        return vals

# Postorder:
# traverse(left), traverse(right), arr.append(curr.val)
class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        vals = []
        
        def rec(root):
            if root:
                for child in root.children:
                    rec(child)
                vals.append(root.val)
                
        rec(root)
        return vals