
/*
Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
*/

# 2025, my initial thing was sliding window but nums can be negative so doesnt work
# bc adding or removing eles doesnt guarantee + or - subsum 


# use a dictionary to save the running list of sums that we've seen
# since we can have negative nums, possible we'll see like -2, 2 

class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        subArrs = 0
        currSum = 0
        #currSumCount = defaultdict(int) #lets us skip the if key doesnt exist, add to dictionary thing
        currSumCount = {}

        # we can that zero is a cumulative sum we've already seen
        # with the count 0 
        currSumCount[0] = 1

        for num in nums:
            currSum += num

            targetPrefixToExclude = currSum - k
            if targetPrefixToExclude in currSumCount:
                subArrs += currSumCount[targetPrefixToExclude]
            
            if currSum in currSumCount:
                currSumCount[currSum] += 1
            else:
                currSumCount[currSum] = 1

        return subArrs


var lowestCommonAncestor = function(root, p, q) {
    // Find all parents, add them into a map
    let parentMap = new Map();
    findParents(root, parentMap); 
    
    // Pick a node 
    let nodeToCompare = p;
    
    // Traverse through the parentMap
    while(nodeToCompare !== null) {
        // IF we have the least common ancestor, return it
        if(nodeToCompare === root || isChild(nodeToCompare, q)) return nodeToCompare;
        
        // Continue through the parents
        nodeToCompare = parentMap.get(nodeToCompare)
    }
    // IF there's no common ancestors
    return null;
};

// Builds a map of the parent-child relationship
var findParents = function(root, parentMap) {
    if(parentMap.size == 0) {
        parentMap.set(root, null);
    }
    if(root === null) return;
    if(root.left) {
        parentMap.set(root.left, root);
        findParents(root.left, parentMap);
    }
    if(root.right) {
        parentMap.set(root.right, root);
        findParents(root.right, parentMap);
    }      
};

// Returns true IF the node we're comparing is a descendant
// Recursive
var isChild = function(root, q) {
    
    if(root === null) return false
    if(q === root) return true
    
    return isChild(root.left, q) || isChild(root.right, q)
};
