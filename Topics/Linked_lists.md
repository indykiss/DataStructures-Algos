## Linked lists 

A linked list is a collection of data broken down by nodes, in which each node contains two main things- data and a reference to the next node; reference is called  a pointer. A linked list will always (unless number of nodes is less than 2), have a head and a tail node.

Linked lists allow run-time efficient data manipulation. Often constant time. If the data set in the structure is quite large, when we insert or remove a new node, there’s no need to reorganize the entire structure like what happens when you add/remove an element to an array.

Very fast prepend and append, but very slow lookups, compared to arrays.


Strengths:
- Fast operations on the ends. Adding elements at either end of a linked list is O(1). Removing the first element is also O(1).
- Flexible size. There's no need to specify how many elements you're going to store ahead of time. You can keep adding elements as long as there's enough space on the machine.

** Use a linked list over an array when I don't know the size of the array and it's not a dynammic array and I'm ok with slower lookups. ** 

Weaknesses:
- Costly lookups. To access or edit an item in a linked list, you have to take O(i) time to walk from the head of the list to the iith item.

Uses:
- Stacks and queues only need fast operations on the ends, so linked lists are ideal.


# Doubly linked list 

In a basic linked list, each item stores a single pointer to the next element.

In a doubly linked list, items have pointers to the next and the previous nodes.

Doubly linked lists allow us to traverse our list backwards. In a singly linked list, if you just had a pointer to a node in the middle of a list, there would be no way to know what nodes came before it. Not a problem in a doubly linked list.

- Weakness: Not cache-friendly
Most computers have caching systems that make reading from sequential addresses in memory faster than reading from scattered addresses.

Array items are always located right next to each other in computer memory, but linked list nodes can be scattered all over.

So iterating through a linked list is usually quite a bit slower than iterating through the items in an array, even though they're both theoretically O(n) time
