


/*
Vertical Order Traversal of a Binary Tree
https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/

Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

Return the vertical order traversal of the binary tree.

Strategy:
- Vars: res [], dict {column: [node value], ...}
- Traverse the tree, DFS -> recursive stack to traverse
    As we traverse, add vals to our dict 
- Sort by cols
- Strip dict to only pull [node vals] into res arr  
- Return res arr

*/

const verticalTraversal = function(root) {
    let dict = {},
        que = [[root,0]];
      
    while(que.length){
      let len = que.length;
      let newQue = [];
        
      for(let i = 0; i < len; i++){  
          let [node, idx] = que[i];
          // Populate hash-table
          if(!dict[idx]) dict[idx] = []; 
          dict[idx].push(node.val);
          // create next-level
          if(node.left) newQue.push([node.left, idx-1]);
          if(node.right) newQue.push([node.right, idx+1]);
        }
      que = newQue.sort((a,b)=> a[0].val - b[0].val); // sort by node-value
    };
      
      return Object.entries(dict).sort((a,b)=>a[0]-b[0]).map(el=> el[1]); //sort by column
  };
  
  
  
  
  