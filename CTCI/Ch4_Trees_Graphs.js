/*
Trees and graphs aren't linear, so harder to traverse. 
Worst and average time can vary really wildly too. 

Binary Tree = tree with every branch having 2 or fewer leaves/ children brances 
Binary Search Tree = Binary tree where the left node is smaller than the parent 
node and the right child is larger than the parent node. 

Balanced vs unbalanced trees:

A BST is balanced when the left and right subtrees' heights differ by 1 level at the most. AND the left subtree is balanced AND the right subtree is balanced. 
    - Note: A tree can be height or weight balanced. One does not affect the other. 
    - https://stackoverflow.com/questions/8015630/definition-of-a-balanced-tree 

A full and complete tree is when all the leaves in a tree are at the bottom of
the tree and all non-leaf nodes have exactly two children. 

Traversing a tree:

In-order:
Post-order: 
Pre-order: 

Breadth-first search is a way to explore a tree or graph by looking 
at the nodes one step away, then two steps away. 

Depth-first search is a way to explore a tree or graph by traveling down
one node branch to the end, then turning around if couldn't find the thing, 
then traveling down another branch, etc, until we find the find we want. 


DFS:
var search = function(root) {
    if(root == null) return;
    visit(root);
    root.visited = true; 
    root.forEach(n in root.next) {
        if(n.visited == false) {
           search(n)
        }
    }
}

BFS:
var search = function(root) {
    let queue = [];
    visit(root);
    root.visited = true; 
    queue.enqueue(root); // Add root to end of the queue

    while(!queue.isEmpty) {
        let r = queue.dequeue();
        root.forEach(let n in r.adjacent) {
            visit(n);
            n.visited = true;
            queue.enqueue(n);
        }
    }
}

*/


// Q1: Implement a function to check if a binary tree is balanced. 
    // That is left side and right side of the tree height differs by 
    // max 1 level. 

var balanced = function(root) {
    let left = root.left; 
    let right = root.right; 

    // Count height for left branch and right branch

    if(dfs(left) + 1 < dfs(right) || dfs(left) + 1 > dfs(right)) {
        return false; 
    } else {
        return true; 
    }

}

// Returns height branch
var dfs = function(root) {
    let height = 0; 

    if(!root) return;
    let left = dfs(root.left);
    let right = dfs(root.right);

    height = Math.max(height, left + right);

    return Math.max(left, right) + 1;
}



// Q2: Given a directed graph, design an algo to find out whether there
// is a route between two nodes. 


var route = function(graph, first, second) {


    // traverse the 

}



// Q3: Given a sorted (increasing order) array, right an algo to make a
    // binary search tree with minimal height,s being every branch has 2 leaves. 

var convertArrToBST = function(arr) {

    // arr: [1,2,3,4,5,6]
    // rules?   
        // root would be the 


}



// Q4:  Given a binary tree, design an algo that creates a linked list of all 
// the nodes at each depth. 
    // Ex: If there is a tree with depth D, you'll have D linked lists. 



// Q5: 