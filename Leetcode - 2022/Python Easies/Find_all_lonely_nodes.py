# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right



# Find All The Lonely Nodes
# In a binary tree, a lonely node is a node that is the only 
# child of its parent node. The root of the tree is not 
# lonely because it does not have a parent node.

# Strategy:
#     - BFS 
#         - Queue, while q has len, check our loneliness, and add nodes to q 
#     - Check if parent has 2 kids, if not, add the single kid 
#     to the lonely arr 
#     - Return arr 


class Solution:
    def getLonelyNodes(self, root: Optional[TreeNode]) -> List[int]:
        lonely = []
        que = []
        que.append(root)
        while len(que) > 0: 
            node = que[0]
            del que[0]
            if node.left: que.append(node.left)
            if node.right: que.append(node.right)
            if node.left and not node.right:
                lonely.append(node.left.val)
            if node.right and not node.left:
                lonely.append(node.right.val)
        return lonely
                

class Solution2:
    def getLonelyNodes(self, root: Optional[TreeNode]) -> List[int]:
        ls = []
        que = []
        que.append(root)
        
        while len(que) > 0:
            ele = que[0]
            del que[0]
            if not ele.right and ele.left: ls.append(ele.left.val)
            if not ele.left and ele.right: ls.append(ele.right.val)
            if ele.left: que.append(ele.left)
            if ele.right: que.append(ele.right)
        
        return ls 



