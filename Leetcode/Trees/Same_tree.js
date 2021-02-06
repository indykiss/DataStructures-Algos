/*
Strategy: Recursive. O(n) time where n is total num of nodes, O(n) space bc of call stack 
- Base: if we reach null for both left & side sides, 
never returned false, return true
- Action: if p !== q, return false 
- call function on p.left, q.left && p.right, q.right 

Edge cases:
- Empty tree or trees
- Situation: 
[1,1,2]:

 1
1 2

[1,2,1]:

 1
2 1

False! 

- Other edge cases? 

*/



// recursive
var isSameTree = function(p, q) {
    // we've reached end of tree and never returned false
    if(!p && !q) return true; 
    
    // trees are different size. 1 is null, but not both
    if(!p || !q) {
        return false;
    }
    
    // not the same value
    if(p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

