## Binary Tree Data Structure

A binary tree is a tree where each node has 2 or fewer children nodes. A perfect tree is when every node has 2 children nodes. 

The children are referred to left and right nodes. In a branch with a node having two children nodes, the left node is left and right is right. Node.left and node.right is a way to refer to them. 

If a node has no children, then it's a leaf. 

The top node is the root.

One algo that's asked often is, "given a number of nodes, what's the tree's height, as in how many levels of nodes there are?"

Basically as we go down each level, the number of nodes progressively doubles. So the Q is basically, how many times do we need to double 1 in order to get to N. 

For all perfect trees, the number of nodes in the last level of the tree will be (n + 1)/2 -- +1 because the first level of tree is one, so the number of nodes will always be odd in a perfect tree. Half.ish of the nodes will be in the last level, because of the whole doubling at every level thing.

SO to find the height of a perfect tree, that breaks down mathmatically to (n is total of nodes and h is height): 
    h = log(2)(n+1) 



## Binary Search Tree

A binary search tree is a binary tree where the left children nodes are smaller in value than the parent node and the right children node are larger in value than the parent node. 

A BST is balanced when the left and right subtrees' heights differ by 1 level at the most. AND the left subtree is balanced AND the right subtree is balanced. 
    - Note: A tree can be height or weight balanced. One does not affect the other. 
    - https://stackoverflow.com/questions/8015630/definition-of-a-balanced-tree 

One fav question is checking if a binary tree is a binary search tree. 

Pros: IF the tree is balanced (ask the interviewer if it's not stated), then they're good at optimizing space/ time for inserts/ deletes and good worst case scenarios. 

BSTs are sorted so can take out the sorted elements in O(n). Finding an element that's closest to a value would be O(lg(n)). 

Cons: BSTs are never the fastest for anything. There's no O(1) time option for anything. An arr or hash will be faster for any 1 operation. 


### (Search info goes here too because we LOVE dfs/ bfs in trees in particular)
## Breadth-first search

Breadth-first search is a way to explore a tree or graph by looking at the nodes one step away, then two steps away. 

Kinda like throwing a stone in a cave pond. You explore the nodes that ripple out from the starting point, until we reach all the nodes.  

Pros: Finds the shortest path between the starting node and any other node. 

Cons: Generally takes more memory than the depth-first search, since we are looking at all the nodes. Breadth and all. 


## Depth-first search (also called depth-first traversal) 

Depth-first search is a way to explore a tree or graph by traveling down one node branch to the end, then turning around if couldn't find the thing, then traveling down another branch, etc, until we find the find we want. 

Kinda like being in a maze and going down each hallway option until we find the exit. 

Pros: DFS generally takes less memory than BFS. 
Can use recursion here pretty easily. 

Cons: Does not find the shortest path to a node. 

Note that BREADTH first uses a queue and DEPTH first uses a stack. 

This will help us decide which of the two to use. 

Are we looking for a solution that would needs a first in, first out (queue! therefore breadth) OR a last in, last out
(stack! therefore depth). Are we visiting nodes in the order we see them (queue) or the last seen node first (stack)? 