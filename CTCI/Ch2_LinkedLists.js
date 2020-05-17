
/*
Linked lists

A linked list is a collection of data broken down by nodes, 
in which each node contains two main things- data and a reference 
to the next node; reference is called  a pointer. A linked list will 
always (unless number of nodes is less than 2), have a head and a tail node.

Linked lists allow run-time efficient data manipulation. Often constant 
time. If the data set in the structure is quite large, when we insert or 
remove a new node, there’s no need to reorganize the entire structure like 
what happens when you add/remove an element to an array.

Very fast prepend and append, but very slow lookups, compared to arrays.

One thing that's useful for LL is using two pointers 1 faster and 1 slower.

Recursive solutions can be fundamental to solving it. 
*/

// Q1: Write code to remove duplicates from an unsorted linked list. 

/*
node = val, next
*/

var removeDupes = function(list) {
    const n = list.length; 
    const dupeTracker = {};
    let previous = null;

    while (n !== null) {

        if(dupeTracker.hasOwnProperty(n.val)) {
            previous.next = n.next; 
        } else {
            dupeTracker.add(n.val, true);
            previous = n;
        }
        n = n.next;
    }
}

// Now do it without a hash table

var removeDupes = function(list) {

    if(list.head == null) return; 

    let current = list.head;
    while(current !== null) {
        let runner =  current;
        while(runner.next !== null) {
            if(runner.next.data == current.data) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
    }
}



// Q2: Implement an algo to find the kth to last element of a singly linked list. 

var findKthLast = function(list, k) {
    if(k <= 0) return null;

    // two pointer solution
    let p1 = head; 
    let p2 = head;

    // move p2 forward k number of times into the list
    for(let i = 0; i < k - 1; i++) {
        if(p2 == null) return null;
        p2 = p2.next; 
    }
    if(p2 == null) return null;
    
    // Move p1 and p2 at the same speed. 
        // When p2 hits the end, p1 will be at the right spot
    while(p2.next !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}



// Q3: Delete a node in the middle of a singly linked list.

var deleteMiddle = function(list) {
    let length = list.size; 
    let middle = Math.floor(length/2);
    let counter = 0;

    let node = list.head; 
    while(node !== null) {
        counter++;
        if(counter == middle) {
            node.prev.next = node.next.next;
        }
    }
}
// Now if there's only access to that middle node 
var deleteMiddle = function(node) {
    if(node == null || node.next == null) {
        return false; 
    }
    next = node.next; 
    node.val = next.val;
    node.next = next.next; 
    return true;
}



// Q4: Partition a linked list around a value x, such that all nodes less than x
// come before all nodes greater than or equal to x. 

var partitionLinkedList = function(list, x) {
    // loop through list; check if val is < x, move into 1 box 
    // if greater than x, move into different box
    // at the end, combine the two new linked lists 
    let lessThanX = new LinkedList;
    let greaterThanX = new LinkedList; 

    let n = list.head; 
    while(n.next !== null) {
        if(n.val < x) {
            lessThanX.add(n);
        } else {
            greaterThanX.add(n);
        }
    }
    // Merge the linked lists: this is a bad way to do this 
    return lessThanX + greaterThanX;
}

var add = function(node) {
    let n = new Node(node);
    let current; 

    if(this.head === null) {
        this.head = n; 
    } else {
        current = this.head; 
        // Get to the tail of the linked list to add new node 
        while(current.next) {
            current = current.next;
        }
        current.next = n; 
    }
    this.size++;
}

// Another, better way to do the above: 
var partition = function(node, x) {
    let beforeStart = new Node();
    let afterStart = new Node();
    let beforeEnd = new Node();
    let afterEnd = new Node();

    while(node != null) {
        let next = node.next; 
        node.next = null; 
        // Insert the node into end of BEFORE list
        if(node.val < x) {
            if(beforeStart == null) {
                beforeStart = node; 
                beforeEnd = beforeStart;
            } else {
                beforeEnd.next = node;
                beforeEnd = node; 
            }
        } else if (node.val >= x) {
        // Insert node into end of AFTER list
            if(afterStart == null) {
                afterStart = node; 
                afterEnd = afterStart; 
            } else {
                afterEnd.next = node; 
                afterEnd = node; 
            }
        }
        node = next; 
    }

    if(beforeStart == null) {
        return afterStart;
    }
    // Merge the two lists 
    beforeEnd.next = afterStart;
    return beforeStart;
}



// Q5: You have two numbers represented by a linked list, where each node 
// has a single digit. The digits are stored in reverse order. 
// Write a function that adds the two numbers and returns sum as linked list. 

// (2 -> 1 -> 3) + (4 -> 5 -> 6) 312 + 654 = 966 Output: (6 -> 6 -> 9)

var addReverse = function(l1, l2, carry) {

    // Recurse: Done when there's no carry and both lists are null 
    if(l1 == null && l2 == null && carry == 0) return null;

    let result = new Node(carry, null, null); 

    // Let's do maths on the tails
    let value = carry;
    if(l1 != null) {
        value = value + l1.val;
    }
    if(l2 != null) {
        value = value + l2.val;
    }

    result = value % 10;

    // Recurse:
    if(l1 !== null || l2 != null || value >= 10) {
        let more = addReverse(l1 == null ? null : l1.next,
                              l2 == null ? null: l2.next, 
                              value >= 10 ? 1: 0)
    result.setNext(more);
    }
    return result;
}

