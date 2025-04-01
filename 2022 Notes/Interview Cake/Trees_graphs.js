// Write a function that tells us if a tree is "superbalanced."

// Superbalanced is a thing we made up.
// A tree is superbalanced if the difference between the depths 
// of any two leaf nodes is no greater than 1. 

// So like this is a short tree. 
  // So check if the distance between the min/ max nodes 
    // is greater than 1. If it so, then no superbalanced

// Depth first search
  // As we go, if path is ever greater than 1, then no go 
  // We pick depth because it's faster, hitting leaves 1st
  // Could've done either for this one.


// Sample binary tree node class
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// Strat: Do a depth-first walk through the tree. 
  // Keep track of depths as we go, in an arr.
  // Add depth to the arr, if we haven't seen it already.
  // Not a superbalanced tree:
    // If there's more than 2 dif leaf depths 
    // If there's 2 than are more than 1 apart 
  
// Edge: Like 0 leaves total = superbalanced

function isBalanced(treeRoot) {
  // Determine if the tree is superbalanced
  // Edge: if tree has no root
  if(!treeRoot) {
    return true;
  }
  
  // S1: Keep track of all the depths and the nodes 
  const depths = [];
  const nodes = [];
  nodes.push([treeRoot, 0]);
  
  // S2: Loop for as long as the nodes exist basically 
    // Goal is to disqualify a tree
  while(nodes.length) {
    
    // S3: Pop a node and its depth from top of our stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];
    
    // S4: If there is no left or right node 
    if(!node.left && !node.right) {
      
      // We haz a leaf. Now what's its depth? 
        // We only care if it has a new depth
      if(depths.indexOf(depth) < 0) {
        depths.push(depth);

      // S5: Check if theres's an unbalanced tree 
        // 1. If there's more than 2 different depths 
        // 2. If there's 2 leaf depths that are more than 1 apart
              // Math.abs in case depths[1] is a larger number than [0]
        if((depths.length > 2) || 
          (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ){
          return false;
        }
      }
      // S6: We no haz leaf. Let's keep going down 
    } else {
      if(node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if(node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  // S7: If we haven't disqualifed the tree, then it's superbalanced
  return true;  
}





// Write a function to check that a binary 
// tree is a valid binary search tree. 

// Strat: Set up tests to see if a node is a left child. If it is
  // then it must be less than its parent. 
  // Or if it's right, it must be more than parent. 
  // Since we're looking at a branch in each subtree, use DFS
// Do this by using a depth first walk through the tree, 
  // test each node for validity as we go
  // Validity being: node.left < node parent, node.right > node parent
  // We'll use a largest number each node must be greater than 
    // and smallest it be be less then (upper and lower bounds)
  
// Edge: No root = yes a BST

// Two ways to do this. Recursively (pretty but not time/space 
// efficient). AND iteratively. 



class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}


// Iterative!
function isBinarySearchTree(treeRoot) {

  // Determine if the tree is a valid binary search tree

  // S2: Start at root. Make fake lower and upper bounds
  
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY    
  })

  // Depth-first traversal 
  while(nodeAndBoundsStack.length) {
    const{ node, lowerBound, upperBound } = 
      nodeAndBoundsStack.pop();
      
      // Make sure node is valid to continue 
      if(node.value <= lowerBound || node.value >= upperBound) {
        return false;
      }
      
      // If it's a left child node, it has to be smaller than the 
        // current node (parent node)
      if(node.left) {
        nodeAndBoundsStack.push({
          node: node.left,
          lowerBound,
          upperBound: node.value
        });
      }
      
      // if it's a right child node, it must be bigger than parent
      if(node.right) {
        nodeAndBoundsStack.push({
          node: node.right, 
          lowerBound: node.value,
          upperBound
        })
      }
  }
  
  // If all nodes passed the tests, then we have a superbalanced tree
  return true;
}


// Recursive!
// S1: Add a second and third input parameter for lower/upper bounds
function isBinarySearchTree2(treeRoot) {

  // Determine if the tree is a valid binary search tree

  // S2: Start at root. Make fake lower and upper bounds
  lowerBound = Number.NEGATIVE_INFINITY;
  upperBound = Number.POSITIVE_INFINITY;

  // S2b: If tree root doesn't exist, then yes BST
  if(!treeRoot) {
    return true;
  }
  
  //S3:  If treeRoot is not within the bounds, not BST
  if(treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
    return false;
  }
  
  // S4: Let's check if the left and right node are in the bounds
    // by recursing ???
  return isBinarySearchTree2(treeRoot.left, lowerBound, treeRoot.value)
    && isBinarySearchTree2(treeRoot.right,  treeRoot.value, upperBound);
}

  
 // O(n) space and O(n) time 
// Smoosh patterns together to get answer 
// It's not about "this is X problem, lets do X"
  // It's a little bit that and a little bit
    // smoosh smoosh smoosh
  
  
  
  
  
  
  
// Write a function to find the 2nd largest element 
// in a binary search tree.

// Start by finding the largest element 
// Since it's a BST, we know that the "rightmost"
// element is going to be the largest 


class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// Find largest iteratively. Keep looking to right child 
// node until one doesnt exist anymore
function findLargest(rootNode) {
  
  if(!rootNode) {
    throw new Error("Needs a node")
  }
  
  let current = rootNode;
  
  // Keep looking for current.right node (largest)
    // once there's not any left, current.value is biggest
  while(current) {
    if(!current.right) {
      return current.value;
    }
    current = current.right;
  }
}


// Start: The 2nd largest node will be the largest' parent 
// EXCEPT IF the largest has a left (no right obvi)
  // no right, bc if it had a right, it wouldn't be 
  // largest subtree. 
// So we have a couple cases here


function findSecondLargest(rootNode) {

  // Find the second largest item in the BST
  
  // Edge: Needs at least 2 nodes
  if(!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error("Needs at least 2 nodes")
  }
  
  let current = rootNode
  
  // S1: We cycle through each node and check on 
    // the situation for that current node
  
  while(current) {
    
    // S2: If we have a left subtree but not a right subtree
      // then current node is the largest, so 2nd
      // largest must be the largest in left subtree
    if(current.left && !current.right) {
      return findLargest(current.left)
    }
      
    // S3: If we have a right child, but that right child
      // node doesn't have any children. 
      // THEN right child is largest AND current is 2nd 
    if(current.right && 
      (!current.right.left && !current.right.right)) {
      return current.value;
    }
    
   // S4: Else, we have a right subtree with >1 ele,
      // so largest/ 2nd largest are somewhere so we 
      // keep on stepping right 
    current = current.right;
  }
}
 
// O(h) time where h is tree height  
  // if tree is balanced, that means O(lg(n))
  // IF not, O(n) time
// And O(1) space

  
  


  
// Given an undirected graph with maximum degree DD, 
// find a graph coloring using at most D+1 colors.


// Break down in small bits:
// Undirected, so no arrows 
// Maximum number of colors = D +1 

// Example: Graph has a maximum number of degrees as 
  // 2. So 3 colors are allowed. 
  
// Qs: To confirm, we want to make sure that the graph
// is colored legally? 
  // No 2 nodes of the same color are adjacent 

// Example input: 
// const a = new GraphNode("a")
// const b = new GraphNode("b")
// const c = new GraphNode("c")

// a.neighbors.add(b);
// b.neighbors.add(a);
// b.neighbors.add(c);
// c.neighbors.add(b);

// Expected output: {[a],color1; 
  // [b], color2; 
  // [c], color1} 
  // Or something, whatever

// Strat: Look at each node and assign color thats legal
  // based on previous color 
  // Loop through node's neighbors and check if color
    // is taken. If not by any, change the color


class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

function colorGraphInefficient(graph, colors) {

  // Create a valid coloring for the graph
  graph.forEach(node =>{
    // make an illegal colors set and legal colors arr
    const illegalColors = new Set();
    const legalColors = [];
    // if a nodes neighbor has a color
      // that color is now illegal
    node.neighbors.forEach(neighbor => {
      if(neighbor.color !== null) {
        illegalColors.add(neighbor.color);
      }
    })
    // look at each color. if it's legal, move into 
    // legal arr
    colors.forEach(color => {
      if(!illegalColors.has(color)) {
        legalColors.push(color)
      }
    })
    // assign first legal color to node
    node.color = legalColors[0];
  })
}

/*
Time/space: Iterate through all nodes in graph. 
  Iterate through all neighbors of each node 
    to capture the illegal colors
  Iterates through all the colors to find the legal
    colors 
We can do better by stopping once we find 1 legal color
  
Time?
  N number of nodes + M illegal colors + 1 
  * 2 most neighbors per node (if not 2, def a constant)
 = O(N + M) Best possible option for time efficiency! 
 
 Space? 
 illegalColors is O(D), D being number of colors 
  Increases as number of nodes in graph increase.
  Every other action is constant. 
  
  
Edge cases: 
Nodes with no edges? 
    Still works b/c we're looking at an arr of them, 
    not transversing
Any cycles in graph?    
    Still works because we accounting for the neighboring
    colors.
Any loops? 
    This could be a problem. BC we are saying that a neighbor
    is itself. Which will mess up our illegalColors arr
    Throw error if this happens
*/

function colorGraph(graph, colors) {

  // S1: Loop through graph and find illegal colors
  graph.forEach(node =>{
    const illegalColors = new Set();

    // Take care of edge case of node in a loop
    if(node.neighbors.has(node)) {
      throw new Error("Can't color this node legally")
    }
      
    // S2: If a nodes neighbor has a color, its illegal
    node.neighbors.forEach(neighbor => {
      if(neighbor.color !== null) {
        illegalColors.add(neighbor.color);
      }
    });
  
    // S3: Look at each color. If it's legal, assign it to node
    for(let i = 0; i < colors.length; i++) {
      const color = colors[i]; 
      
      if(!illegalColors.has(color)) {
        node.color = color;
        return;
      }
    }
  })
}


  
  
  
  
/* Find the shortest path from startNode to 
endNode, given a network.

Make a mesh network: 

  const network = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam'    : ['Nathan', 'Jayden', 'William'],
  'Omar'    : ['Ren', 'Min', 'Scott'],
  ...
};

For the network above, a message from Jayden to Adam 
should have this route:

  ['Jayden', 'Amelia', 'Adam']
  
Get the shortest path from startNode to endNode 
This seems like a undirected, unweighted graph 
  (ask interviewer to confirm)
  Undirected because a person can send messages both 
  ways, so no distinction there 
  No nums, so unweighted
Shortest path -> breadth first traversal

Edge cases: 
Invalid input
  Throw error

If there's no route
  It's ok, message won't be delivered
*/
  
  
class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}

// Use breadth first algo
// Find the shortest route in the network between two ppl

function getPath(graph, startNode, endNode) {

  // Edge: No start or end Node
  if(!startNode || !endNode) {
    throw new Error("Need a start or end node")
  }
  
  // S1: Make a queue and add the startNode to it 
  const nodesToVisit = new Queue();  
  nodesToVisit.enqueue(startNode);

  // S2: Keep track of the nodes && path we've seen
  const howWeReachedEndNode = {};
  howWeReachedEndNode[startNode] = null;
  
  // S3: Loop through nodes. Enque/ dequeue to reduce size
  while(nodesToVisit.size > 0) {
    // S4: Look @ 1st node. Remove it in the queue
    const currentNode = nodesToVisit.dequeue();
    
    // S5: Check if current node is the end. 
        // If yes, return the path we looked at
    if(currentNode === endNode) {
      return findPath(howWeReachedEndNode, startNode, endNode);
      // We found everything minus path finding. Then added in helper func
    }

    // S6: K, havent seen it. Let's move on. Add it to path and 
      // queue up next node to keep looking
    graph[currentNode].forEach(neighbor => {
      if(!howWeReachedEndNode.hasOwnProperty(neighbor)) {
        nodesToVisit.enqueue(neighbor);
        howWeReachedEndNode[neighbor] = currentNode;
      }
    })    
  }
  
  // S7: If there's no path
  return null;
}


function findPath(howWeReachedEndNode, startNode, endNode) {
  const shortestPath = [];
  
  // S1: Start from end of path and go backwards 
  let currentNode = endNode;
  
  // S2: startNode is null, hence why we go backwards
  while(currentNode !== null) {
    shortestPath.push(currentNode);
    currentNode = howWeReachedEndNode[currentNode];
  }
  
  // S3: We're tracing path backwards so need to 
  // reverse it to have it start correctly
  return shortestPath.reverse();
}
  
// Time: O(N + M), where N is the number of nodes and 
// M is the number of neighbors for each node
// Space: Constant amount of info per node. O(N) space


  
  
  
/*
Find the first duplicate that appears in an array. 
in O(n) time [literally the lowest possible as we must iterate]
AND O(1) SPACE, which is hard 


Strat for normal solving: Binary search 
Assumption: There is at least 1 duplicate 
Inputs are always integers 

Find a number that appears more than once ... in O(n) time
  
In a BS, I need to make a ceiling and a floor for each the 
  bottom half and the top half
  And a midpoint
And a guess index/value 
Then update ceiling/ floor as we go 
Also need to sort it I think? So that whenever there's 2 things 
in a row that are the same, that's a dupe 


Strat for super optimizing space: 
Think about it like this is a linked list, where the position (position 
is not index. position = index + 1) exists. 
The value in linked list is the integer value. 
The pointer is pointing to the next position in the arr. 

Linked List is O(n) space, so can't use that. But will
THINK about it as a linked list. 

Thinking about it as a linked list, with the end of the arr 
  as the head of the LL
There would be a cycle of pointers around the area of a dupe
  The 1st node we hit in the cycle always has at least 2 incoming
  pointers. 
Find the beginning of the cycle in order to find the dupe
  We can do this by finding the length of the cycle. 
  We would use 2 pointers:
    One starts at the beg of the list (end of arr)
    Second is at the end of list (beg of arr)
    We move each pointer one node at a time 
    When the two pointers converge, that is the start of the cycle


Work backwards! 
S1: We know that the position of the node w/
multiple incoming pointers is a duplicate in our arr, because the 
nodes that have pointed to it must have the same value.

S2: We find a node with multiple incoming points by finding the
1st node in a cycle. 

S3: We find the first node in a cycle by finding the length of the
cycle and the advancing two pointers: one starting from the end 
and one starting from the front. And find where they converge. 
They will meet at the first node in the cycle. 

S4: Find the length of the look by remembering a position in
the cycle and count the number of steps it takes to get back
to that position 

S5: We get inside a cycle by starting at the head (end of arr)
and walking n steps. We know the head of the list is at 
n+ 1 position 

*/


function findDuplicate(intArray) {

  const n = intArray.length - 1;

  // S1: GET INSIDE CYCLE
    // Start at posiition n+1 and walk n steps to find 
    // a position definitely within a cycle
  let positionInCycle = n + 1 
  for(let i = 0; i < n; i++) {
    // Subtract 1 from current position so we can step ahead 
      // BC 2nd position in arr = ele at index 1
    positionInCycle = intArray[positionInCycle - 1];
  }
  
  // S2: FIND LENGTH OF CYCLE
    // Find length by remembering a position inside cycle 
    // and count the steps it takes to get back to that position
    // This gives us the head and length of cycle 
  const rememberedPositionInCycle = positionInCycle;
  let currentPositioninCycle = intArray[positionInCycle - 1];
  let cycleCount = 1; 
  
  while(positionInCycle !== rememberedPositionInCycle) {
    currentPositioninCycle = intArray[currentPositioninCycle - 1];
    cycleCount += 1;
  }
  
  
  // S3: FIND 1ST NODE OF THE CYCLE
    // Create 2 pointers, starting at opposite ends 
      // 1. Position n+1
      // 2. Position n+1, as many steps as the cycle length 
    let startPointer = n + 1;
    let endPointer = n - 1;
    for(let i = 0; i < cycleCount; i++) {
      endPointer = intArray[endPointer - 1];
    }
    
  // S4: GO UNTIL POINTERS ARE IN SAME POSITION
    // This is the 1st node in the cycle 
    // The 1st node in the cycle have multiple pointers at it
    // So we know its position is where the dupe is
  while(startPointer !== endPointer) {
    startPointer = intArray[startPointer - 1]; 
    endPointer = intArray[endPointer - 1]; 
  }
  
  // RETURN THE DUPE
  return startPointer;

}

/*
Input: [2,1,2,3] => 2 

O(n) time. Worst thing is a loop.
O(1) space. We only make variables to store. 

Lesson for this one: 
  SHIT BE CRAY but it's fine bc interviewers always expect to 
  give hints. It's important to know how to drop what I'm doing
  and accept those hints. Adjust. And code to whats being said. 
  I need to work on coding based on what's being said. 
  Think about it all in smaller pieces. 
*/

