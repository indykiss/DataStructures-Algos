

/*
Strategy:
- Same depth, different parents
- Given 2 nums. Do they have same depth but arent siblings?

- DFS, recursive stack to ID depth for both nodes
- Vars: xDepth = 0, yDepth = 0

- As iterating thru tree, dfs(root, depth, parent)
    - Track curr depth 
    - If num === x or y, update depth variable
    - IF xDepth and yDepth > 0, 
        - IF xParent !== yParent, true
        - IF equal, false
    
Edge:
- x or y doesnt exist in the tree
- BT 
*/

var isCousins = function (root, x, y) {
    if (!root) return false;
    const depths = {};
    const parents = {};
      
    dfs(root, root, 0);
    return depths[x] === depths[y] && parents[x] !== parents[y];
      
    function dfs(node, parent, depth) {
      if (!node) return;
      if (node.val === x || node.val === y) {
        depths[node.val] = depth;
        parents[node.val] = parent.val;
      }
      dfs(node.left, node, depth + 1);
      dfs(node.right, node, depth + 1);
    }
  
  };
  