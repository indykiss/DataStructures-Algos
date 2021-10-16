

/*
Smallest string starting from leaf

You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.

Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

As a reminder, any shorter prefix of a string is lexicographically smaller.

For example, "ab" is lexicographically smaller than "aba".
A leaf of a node is a node that has no children.

Strategy: DFS
- Use a str, treat like queue to track each path 
- lexicographically smallest var to track
    - update as we reach the end of each path
    - helper function to ID smallest 
- helper function:
    - str1, str2 to compare 
    - "123" / abc, "1234" / abcd
        - if lengths are not equal, return the shortest str
        - iterate thru str1.len
            - two pointers, each looking at a str
            - if equal nums, increment pointer
            - until one pointer is looking at a smaller num than the other pointer
            - return the str w/ the smaller num 
    - return the smallest string 
*/


var smallestFromLeaf = function(root) {
    let smallest = "zzzz", 
        alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    
    dfs(root, ""); 
    
    return smallest;
    
    function dfs(root, path) {
        if(root === null) return;

        if(!root.left && !root.right) {
            let currStr = alphabet[root.val] + path; 
            if(currStr < smallest) {
                smallest = currStr;
            }
        }
        
        dfs(root.left, alphabet[root.val] + path); 
        dfs(root.right, alphabet[root.val] + path);
    }    
}



var smallestFromLeafBad = function(root) {
    let smallest = ""; 
    
    dfs(root, []); 
    
    return smallest; 
    
    function dfs(root, path) {
        if(root === null) return;
        
        if(!root.left && !root.right) {
            let pathStr = path.toString();
            smallest = compareStrs(pathStr, smallest);
        }
        path.shift(root.val); 
        
        dfs(root.left, path); 
        dfs(root.right, path);
    }
    
};

// return the smallest str
function compareStrs(str1, str2) {
    if(str1.length < str2.length) {
        return str1;
    } else if(str2.length < str1.length) {
        return str2; 
    }
    
    let pt1 = 0, 
        pt2 = 0; 
    
    while(pt1 < str1.length && pt2 < str2.length) {
        if(str1[pt1] < str2[pt2]) {
            return str1; 
        } else if(str2[pt2] < str1[pt1]) {
            return str2;
        }
        pt1++; 
        pt2++;
    }
}

