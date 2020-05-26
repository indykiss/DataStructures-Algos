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
    3. Traverse the right subtree, i.e., call Preorder(right-subtree)

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

var checkHeight = function(root) {
    if(root == null) return 0; 

    // Check if the left subbranch is balanced
    let leftHeight = checkHeight(root.left);
        if(leftHeight == -1) return -1;  
    
    // Check if the right subbranch is balanced 
    let rightHeight = checkHeight(root.right); 
        if(rightHeight == -1) return -1;

    let heightDiff = leftHeight - rightHeight;

    if(Math.abs(heightDiff) > 1) {
        return -1; 
    } else {
        return Math.max(leftHeight, rightHeight) + 1; // Return the height
    }
}

var isBalanced = function(node) {
    if(checkHeight(node) == -1) {
        return false;
    } else {
        return true; 
    }
}

// Runs in O(N) time and O(log N) space


/* OK but inefficient:
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
*/


// Q2: Given a directed graph, design an algo to find out whether there
// is a route between two nodes. 
    // A simple BFS (use a queue), tracking the nodes we've visited

var route = function(graph, first, second) {
    let queue = []; 
    let visited = {first: true}

    queue.push(first);

    while(queue.length > 0) {
        let node = queue.pop();
        if(node == second) {
            return true;
        } 
        for(let i = 0; i < graph.length; i++) {
            if(visited[i] == false) {
                queue.add(visited[i]);
                visited[i] = true;
            }
        }
    }
    return false; 
}



// Q3: Given a sorted (increasing order) array, right an algo to make a
    // binary search tree with minimal height,s being every branch has 2 leaves. 

// S1: Use the middle of the array as the root, take the left subarr as left branch
// and right subarray as right branch. 
// S2: Recurse 

var convertArrToBST = function(arr, start, end) {

    if(end < start) return null;

    let mid = Math.abs((start +  end) / 2);
    let node = arr[mid];

    node.left = convertArrToBST(arr, start, mid-1);
    node.right = convertArrToBST(arr, mid+1, end);
    return node; 
}



/* Q4:  Given a binary tree, design an algo that creates a linked list of all 
 the nodes at each depth. 
     Ex: If there is a tree with depth D, you'll have D linked lists. 
Do a preorder traversal where we pass in level + 1 to the next recursive call. 
*/

var createLevelLinkedLists = function(root, lists, lvl) {

    if(root == null) return; // base case

    let list = null; 

    if(lists.size() == lvl) {
        list = new LinkedList();
        // Levels are traversed in order. So it's this is the first time we're looking at
        // level i, we must have seen levels 0 through i-1. So we can add this lvl to the end 
        lists.add(list);
    } else {
        list = lists.get(lvl);
    }
    list.add(root); 
    createLevelLinkedLists(root.left, lists, lvl + 1);
    createLevelLinkedLists(root.right, lists, lvl + 1);
}



// Q5: Implement a function to see if a binary tree is a binary search tree. 
    // BST has left node that's smaller than parent and right node that's larger than parent 
    // Note: BST lefts must be MINIMUM num and same with right for MAX num 
    // 10 - (L) 8  (R) 15 - (L) 12 
    // NOT a binary search tree since 12 is larger than 10

// Convert the BST to an array and check if it's sorted    
var copyBST = function(root, arr = []) {
    if(root == null) return;

    copyBST(root.left, arr);
    arr[index] = root.val;
    index++;
    copyBST(root.right, arr);
}

var checkBST = function(root) {
    let arr = [root.size];
    copyBST(root, arr);
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i-1]) return false;
    }
    return false; 
}

// Create min and max stacks. As we go left, update left. As we go right, update right. 
var checkBST = function(node, min, max) {
    if(node == null) return true;  // base case 

    if(node.val <= min || node.val > max) {
        return false;
    } 

    if(!checkBST(node.left, min, node.val)) {
        return false;
    }
    if(!checkBST(node.right, node.val, max)) {
        return false;
    }
    return true;
}



/* Q6: Write an algo to find the next node of a given node in a binary search tree. 
 Assume that each node has a link to its parent.

"Next" node means in-order successor of the given node. 
*/


