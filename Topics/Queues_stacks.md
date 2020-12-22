

## Queue

A queue stores items in a first-in, first-out (FIFO) order.

Picture a queue like the line outside a busy restaurant. First come, first served.

Strengths:
- Fast operations. All queue operations take O(1) time.

Uses:
- Breadth-first search uses a queue to keep track of the nodes to visit next.
- Printers use queues to manage jobs—jobs get printed in the order they're submitted.
- Web servers use queues to manage requests—page requests get fulfilled in the order they're received.
- Processes wait in the CPU scheduler's queue for their turn to run.


Queues are easy to implement with linked lists:

- To enqueue, insert at the tail of the linked list.
- To dequeue, remove at the head of the linked list.

You could implement a queue with an array or dynamic array, but it would get kinda messy. Try drawing it out. You'll notice that you'd need to build out a "scoot over" or "re-center" operation that automatically fires when your queue items hit the bottom edge of the array.



## Stack 

A stack stores items in a last-in, first-out (LIFO) order.

Picture a pile of dirty plates in your sink. As you add more plates, you bury the old ones further down. When you take a plate off the top to wash it, you're taking the last plate you put in. "Last in,first out."

Strengths:
- Fast operations. All stack operations take O(1) time.

Uses:
- The call stack is a stack that tracks function calls in a program. When a function returns, which function do we "pop" back to? The last one that "pushed" a function call.
- Depth-first search uses a stack (sometimes the call stack) to keep track of which nodes to visit next.
- String parsing—stacks turn out to be useful for several types of string parsing.


Implementation: 
You can implement a stack with either a linked list or a dynamic array—they both work pretty well:

                Push            Pop
LinkedList -> insert at head   remove at head

Arrays ->   append      remove last element

