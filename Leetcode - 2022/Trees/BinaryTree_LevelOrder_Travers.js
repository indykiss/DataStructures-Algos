

/*
Binary Tree Level Order Traversal


Given a binary tree, return the level order traversal of its nodes' values. 
(ie, from left to right, level by level).

[3, 9, 20, 9, null, 2, 15, 7]
    3
   / \
  9  20
 /   /  \
 2  15   7

=> [
  [3],
  [9,20],
  [2,15,7]
]

*/


// March, practice interview w/ Dom, got very stuck 
function printTreeLevels(root) {
    let queue = [{node: root, level: 1}], 
        currLvl = 1; 
    
    while(queue.length > 0) {
        let ele = queue.shift(); 

        if(ele.level !== currLvl) {
            console.log("---") // print new line 
            currLvl = ele.level; // track what lvl we are on 
        }
        console.log(ele.node.value);
        
        // add left & right to the queue 
        if(ele.node.left) queue.push({node: ele.node.left, level: currLvl + 1});
        if(ele.node.right) queue.push({node: ele.node.right, level: currLvl + 1});
    }
}



// Oct, try again. Grok. FB/ Bloomb
var levelOrder = function(root) {
    if(!root) return [];

    let res = [],
        queue = [];

    queue.push(root);

    // Make a queue 
    while(queue.length) {
        let len = queue.length,
            level = [];

        // Create a loop to add to level
        for(let i = 0; i < len; i++) {
            let curr = queue.shift(); // pop ele off queu

            level.push(curr.val);
            // add anything in the L & R into queue
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
        res.push(level);
    }
    return res;
}




// Oct
var levelOrder = function(root) {
    if(!root) return [];
    
    let res = [],
        queue = [];
    
    queue.push(root);
    
    // Look at every node
    while(queue.length) {
        let lvl = [],
            len = queue.length;
        
        // Create the nested arr/ levels 
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            lvl.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(lvl);
    }
    return res;
};
