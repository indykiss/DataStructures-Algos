


/*
Path With Given Sequence- Grokking 

Given a binary tree and a number sequence,
find if the sequence is present as a root-to-leaf 
path in the given tree.

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1

Sequence: [5, 8, 4, 1] => True 

[2,4] = [2,4] =>    true? 

Strat: 
- Vars: currPath in an arr
- DFS search prob. 
- Add the curr node into currPath. 
- IF we're at the end of a path, check if it's the
exact same as the sequence
    Return true 
    // how? helper function that loops thru the currPath 
- Traverse the left & right 
- If we traverse entire tree and nothing, false
*/


//   5
//  / \
// 4   8

// [5, 8]

// Grokking, not a leetcode. 
function isThisAPath(root, sequence) {
    if(!root || ! sequence) return false;

    dfs(root, []);

    function dfs(node, currPath) {
        currPath.push(node.val);
        if(!root.left && !root.right) {
            if(currPath === sequence) { // does this work? no? => use checkIfTwoArrsEqual
                return true; 
            } 
        }
        if(root.left) dfs(root.left, currPath);
        if(root.right) dfs(root.right, currPath);
    }
    return false;
}



// speed practice. helper function 
function checkIfTwoArrsEqual(arr1, arr2) {
    let str1 = "",
        str2 = "";

    for(let num1 of arr1) {
        str1 += num1;
    }

    for(let num2 of arr2) {
        str2 += num2;
    }
    return str1 === str2;
}
