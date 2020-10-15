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




/*
Reverse a linked list, in-place. 

Input: head of the list
Output: new head of the list

Reverse the pointers, starting from the head. 

*/


class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverse(headOfList) {

  // S1: Define our nodes 
  let currentNode = headOfList;
  let nextNode = null;
  let previousNode = null;
  
  // S2: Loop through list, until no more nodes
  while(currentNode) {
    
    // Change pointer to the next element, so we can 
      // prepare to move forward
    nextNode = currentNode.next;
    
    // Reverse the next pointer;
    currentNode.next = previousNode;

    // Step forward 
    previousNode = currentNode;
    currentNode = nextNode; 
  }

  // S3: Return the last node we see, which is the new head
  return previousNode;
}

// O(n) time bc loop, constant space bc variables only 






/*
You have a linked list and want to find the kth to last node.

Write a function kthToLastNode() that takes an integer
k and the headNode of a singly-linked list, and 
returns the kth to last node in the list.

Strat: Basically like pretending the linked list has index.
Find the length of the list. Minus k from length
and return the node at that place. 

We have to look at every element in the list 
since we need to find the length, so O(n) time minimum. 

Lesson: Always check for bad input. 
Both approaches are same time and space BUT second approach
is a little better because we're accessing the node the 2nd 
time quickly after seeing it the first time. 
This would mean we access the processor's cache, which 
would make the 2nd algo a little faster. 

*/


class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// O(n) time and constant space
function kthToLastNodeOneWay(k, head) {
  // S1: Track list length, currentNode, distance
    // Start at 1 so we count the head
  let listLength = 1;
  let currentNode = head;
  const distance = listLength - k;
  // S2: Find the length of the linked list by 
    // counting the nodes as we loop through the list
  while(currentNode.next) {
    currentNode = currentNode.next;
    listLength += 1;
  }
  // S3: Return the node that's listLength - k
    // through another loop, starting from head
  kthNode = head;
  for(let i = 0; i < distance; i++) {
     kthNode = kthNode.next;
  }
  // S4: Now that we've looped the distance, return this node
  return kthNode;
}


// Another, better, way to do this! With O(n) time and constant space
function kthToLastNode(k, head) {
  // Edge: If K is zero/ negative. Check for bad input
  if(k < 1) {throw new Error("Can't do this.")}
  // S1: Create two pointers to track the variables that are
    // left and right of a stick with k node length 
  let leftNode = head;
  let rightNode = head;
  // S2: Move rightNode to kth node 
  for(let i = 0; i < k - 1; i++) {
    rightNode = rightNode.next;
  }
  // S3: Move leftNode and rightNode down the list w/
    // a distance of K between them until right hits the end
  while(rightNode.next) {
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }
  // S4: Since leftNode is K nodes behind rightNode
    // leftNode is now Kth to the last node
  return leftNode;
}
