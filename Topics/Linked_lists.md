## Linked lists 

A linked list is a collection of data broken down by nodes, in which each node contains two main things- data and a reference to the next node; reference is called  a pointer. A linked list will always (unless number of nodes is less than 2), have a head and a tail node.

Linked lists allow run-time efficient data manipulation. Often constant time. If the data set in the structure is quite large, when we insert or remove a new node, there’s no need to reorganize the entire structure like what happens when you add/remove an element to an array.

Very fast prepend and append, but very slow lookups, compared to arrays.
