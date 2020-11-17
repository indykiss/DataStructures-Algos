/*
Serialize and Deserialize Binary Tree

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"

*/



// IDK. Just be familiar with this
var serialize = function(root, res = []) {
    if(root) {
        res.push(root.val);
        res.push(...serialize(root.left));
        res.push(...serialize(root.right));
    } else {
        res.push(null);
    }
    return res;
};


var deserialize = function(data = []) {
    let val = data.shift();
    
    if(val === null) {
        return null;
    }
    let node = new TreeNode(val);
    
    node.left = deserialize(data);
    node.right = deserialize(data);
    
    return node;
};



var serialize = function(root, res = []) {    
    if(root) {
        res.push(root.val);
        res.push(...serialize(root.left));
        res.push(...serialize(root.right));
    } else {
        res.push(null)
    }
    return res;
};



var deserialize = function(data = []) {
    let val = data.shift();
    if(val == null) return null; 
    let node = new TreeNode(val);
    
    node.left = deserialize(data);
    node.right = deserialize(data);
    
    return node;
};




