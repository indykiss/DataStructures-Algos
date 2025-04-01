


/*
Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in 
ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the 
depth of the two subtrees of every node never differs by more than one.



Strategy:
- Mid pt = root. Root.left is left half of arr, same w/ right 
- recursive -- find mid, make left & right part of tree
    - as we go, we convert a midpt to a tree node
    - let root.left = recurse on left of tree
    - root.right = recurse on right of tree
    - we use idx as upper/ lower parameters to make
    sure we're still looking at tree
- return final bst 


edge:
- empty arr
- neg nums
*/



var sortedArrayToBST = function(nums) {
    
    return bstConvert(nums, 0, nums.length - 1);
    
    function bstConvert(nums, lower, upper) {
        if(lower < 0 || upper > nums.length -1) return null; 
        if(nums.length === 0 || lower > upper) return null;
        
        let midIdx = lower + Math.floor((upper-lower) / 2); 
        
        let root = new TreeNode(nums[midIdx]);
        
        root.left = bstConvert(nums, lower, midIdx-1);
        
        root.right = bstConvert(nums, midIdx+1, upper); 
        
        return root;
    }

};



