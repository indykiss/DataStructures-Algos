
/*
Symmetric Tree

Given a binary tree, check whether it is a mirror of 
itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 
But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 
Follow up: Solve it both recursively and iteratively.
*/

// practice, march 
var isSymmetric = function(root) {
    return isMirror(root, root); 
   
    function isMirror(node1, node2) {
        if(!node1 && !node2) return true; 
        if(!node1 || !node2) return false; 
        
        return (node1.val === node2.val) && 
            isMirror(node1.left, node2.right) && 
            isMirror(node1.right, node2.left);
        }
};

// practice 
var isSymmetric = function(root) {
    
    return isMirror(root, root);
    
    function isMirror(root1, root2) {
        if(!root1 && !root2) return true; 
        if(!root1 || !root2) return false;
        
        if(root1.val !== root2.val) return false; 
        
        return isMirror(root1.left, root2.right) && 
            isMirror(root1.right, root2.left);
    }
};









// This is wrong and bad:

/*
S1: Traverse using a breadth first search. Make each level become an array 
S2: Check if each array is symmetric by looking at the mid of the arr and checking 
if the values next to the mid one level out are equal, if arr length is odd.
    If arr length is even, check the mid two, then check outwards. 
*/


var isSymmetric = function(root) {
    if(root == null) return false; 
    
    var bfs = function(root) {
        let queue = [];
        queue.push([root]);
        
        while(queue.length > 0) {
            let node = queue.shift();
            // node = [1]
            queue.push([node.left, node.right])
            // queue: [[1], [2,2], [3,4]]
    // ???????
        }      
    }
    
};


var isArrSymmetric = function(arr) {
    // Arr length is even
    if(arr.length % 2) {
        let midTwo = [Math.floor(arr.length/2), Math.ceil(arr.length/2)]
        
        if(midTwo[0] == midTwo[1]) {
            for(let l = 0; l < arr.length/2 - 1; l++) {
                for(let r = arr.length/2 + 1; r > arr.length; r--) {
                    if(arr[l] != arr[r]) {
                        return false; // arr is not symmetric
                    }
                }
            }
        } else {
            return false;
        }
    } else {
    // Arr length is odd   
        let mid = arr.length/2;    
        // 
        for(let l = 0; l < mid - 1; l++) {
            for(let r = mid + 1; r > arr.length; r--) {
                if(arr[l] != arr[r]) {
                    return false; // arr is not symmetric
                }
            }
        }
    }    
}