/*
Delete a node from a singly-linked list,
given only a variable pointing to that node.

One way to do this could be traversing the list from start to end.
But that would be pretty inefficient. 

I'm thinking we can use the previous node's pointer to just
skip over the node we're deleting, to the next node. 

Since we don't have direct access to the previous node, 
we can do this by taking the value/ pointer from the 
input node's next node and copying them into the input node. 


Lesson: JS has a garbage collector that automatically frees
up memory that a program isn't using anymore. 

*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Implementation of linked list node:
const a =  new LinkedListNode("A");
const b =  new LinkedListNode("B");
const c =  new LinkedListNode("C");

a.next = b; 
b.next = c;

deleteNode(b);


function deleteNode(nodeToDelete) {

  // S1: Get the input node's next node
  const nextNode = nodeToDelete.next;
  
  // S2: If node exists and is not the tail
    // Replace the input node's info w/ the next node's info
  if(nodeToDelete && nodeToDelete.next !== null) {
    nodeToDelete.value = nextNode.value;
    nodeToDelete.next = nextNode.next;
  } else {

  throw new Error("Can't delete this.")
  }
}


/*
O(1) time and space
Note the problems:
  - Any references to the input node have been reassigned to 
  the next node. 
  - If there are pointers to the input node's original next node,
  then now those points point to a dangling node, one that's not 
  reachable by walking down our list anymore. 
*/





/*
You have a singly-linked list and want to check if 
it contains a cycle.

Define a cycle: 
When a node points to a node we've seen already. 
Returns a boolean if yes cycle. 

We have to look at every value at least once, so there's
a minimum time efficiency of O(n). 

Strat: Create two pointers. One pointer slowly loops the linked list
while the other goes normally. 
If there is a loop, the normal runner will overlap the 
slower runner. 
If there isn't a loop, the normal runner will hit the end. 
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function containsCycle(firstNode) {
  
  // S1: We're making two runners to run through list
  const slowRunner = firstNode;
  const fastRunner = firstNode; 
  
  // S2: Until we hit the end of the list, we go
  while(fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
    
    // S3: If the fast runner laps the slow runner, 
      // there is a cycle
    if(fastRunner === slowRunner) {
      return true;
    }
    
  }
  // S4: Fast runner hits the end, no cycle
  return false;
}

// O(n) time, bc while loop through list
  // O(1) space, bc only storing variables
