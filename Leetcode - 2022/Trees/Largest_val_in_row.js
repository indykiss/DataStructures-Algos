

/*
Find Largest Value in Each Tree Row

Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).


Strat:
- Traverse the tree and add all the vals to 
a hash that tracks row and the vals in a row
{1: [1], 2: [3, 2], 3: [5, 3, 9]}

- After traversing tree, go through the hash 
and pick the largest num in the val and push into an arr

Time: O(n) at least bc we have to look at every value in the tree. 
Space: O(n) bc we're making a hash that holds all the vals
*/


var largestValues = function(root) {
    if(!root) return [];
    
    let hash = {},
        res = [];
    
    dfs(root, 1);
    
    function dfs(root, row){
        if(hash[row]) {
            hash[row].push(root.val);
        } else {
            hash[row] = [root.val];
        }
        if(root.left) dfs(root.left, row+1);      
        if(root.right) dfs(root.right, row+1);   
    }

    Object.keys(hash).forEach(key => {
        
        let ele = Math.max(...hash[key]);
        
        res.push(ele);
    })
    return res;
};

