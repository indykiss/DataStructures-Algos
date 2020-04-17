#### FAQs
 
- Customer Obsession – it really is all about the impact/benefit to the customer! (internal and external)
- Insist on the Highest Standards
- Bias for action
- Invent and Simplify
- Ownership
- Earns Trust
- Think big
- Learn & Be Curious
- Deliver Results
- Have Backbone, Disagree and Commit
- Dealing with Ambiguity (not an LP, but important)

#### Object oriented Qs

Object-oriented programming (OOP) is a style of programming that focuses on using objects to design and build applications.

OOP organizes the program to combine data and functionality and wrap it inside something called an “Object”.

OOP uses objects to build functional blocks of info and classes that act like blueprints for those objects. 

Designing a online shopping system, we'd make shopping cart, customer, products all as objects. The customer object would have attributes like username, password, address from a Class. 

FOUR PRINCIPLES OF OBJECT ORIENTED PROGRAMMING:
- Encapsulation: Binding data together and keeping it private from other objects 
- Abstraction: Hiding all but the most revelant data about an object.
- Inheritance: Where classes are created from existing ones 
- Polymorphism: An object can take different forms. Can be used in different situations.

USE ME:
https://jamboard.google.com/d/1FJF_6_NHFs3Cc8_P8iVHpOfT-gtfzTp4phlrHluFOAs/viewer 

In object oriented design interviews, we want to ID four things:
- Use case diagram. Whole system + what happens 
- Class diagram. Look at responsibilities of the system 
- Seqeuence diagram. 

Steps to an OO design question:
- Clarifying questions
- Clarify the main entities in the system and their behaviors 
- Use case model:
    - Use case description 
    - Triggers
    - Actors 
    - Preconditions / Possible failures
    - Goals 
    - Steps of execution 
- Class Diagram 
    - Boxes with the actors/ objects WITH FIELDS w/ data types
    - Interactions between the objects
- Sequence Diagram
    - Options with conditions
    - Classes for the objects from prev: go on the top
    - Actions are lines across 
    - Make functions ex: getRandomCoin(), etc
- Activity Diagram 
    - Boxes with activities



#### Other

Big O is how time scales with respect to some input variables. 


Ram is basically like a super tall bookshelf. RAM is memory. Random access memory. 

Each shelf is a numbered address. 

Each address holds 8 bits. 
        8 bits is a byte AND: 
        Power of 2    Exact Value (X)     Approx. Value    X Bytes into MB, GB, etc.
        7             128
        8             256
        10            1024                1 thousand        1 KB
        16            65,536              64 KB
        20            1,048,576           1 million         1 MB
RAM is connected to a memory controller, which is connected to a processor. 
    Processor -> Memory controller -> RAM (with its address shelves of bits)
    This helps access memory randomly (don't need to go down the ladder of shelves)

A processor has a cache that basically saves recent stuff from the RAM. 


Computer's are base 2 aka binary. 0s and 1s

How to read binary? 

    In base 10, we have 101 which means 1 hundred, 0 tens, 1 one. Each of which is a sequential power of 10: 
        10^0 = 1
        10^1 = 10
        10^2 = 100


A call stack is what a program uses to keep track of function calls.
    Call stacks are made up of stack frames-- one frame for each function call. 
Recursion uses a LOT of call stacks. Which impacts the space complexity significantly. Usually O(n) space even if no data structures are created. 
    - Iterative functions uses constant space, much better. 
        RN: When we run out of space, it's called a stack overflow.




## Binary Tree Data Structure

A binary tree is a tree where each node has 2 or fewer children nodes. A perfect tree is when every node has 2 children nodes. 
Node.left and node.right

For all perfect trees, the number of nodes in the last level of the tree will be (n + 1)/2 -- +1 because the first level of tree is one, so the number of nodes will always be odd in a perfect tree. Half.ish of the nodes will be in the last level, because of the whole doubling at every level thing.

SO to find the height of a perfect tree, that breaks down mathmatically to (n is total of nodes and h is height): 
    h = log(2)(n+1) 


## Binary Search Tree

A binary search tree is a binary tree where the left children nodes are smaller in value than the parent node and the right children node are larger in value than the parent node. 

Pros: IF the tree is balanced (ask the interviewer if it's not stated), then they're good at optimizing space/ time for inserts/ deletes and good worst case scenarios. 
BSTs are sorted so can take out the sorted elements in O(n). Finding an element that's closest to a value would be O(lg(n)). 

Cons: BSTs are never the fastest for anything. There's no O(1) time option for anything. An arr or hash will be faster for any 1 operation. 

## Breadth-first search

Breadth-first search is a way to explore a tree or graph by looking at the nodes one step away, then two steps away. 
Kinda like throwing a stone in a cave pond. You explore the nodes that ripple out from the starting point, until we reach all the nodes.  

Pros: Finds the shortest path between the starting node and any other node. 
Cons: Generally takes more memory than the depth-first search, since we are looking at all the nodes. Breadth and all. 


## Depth-first search

Depth-first search is a way to explore a tree or graph by traveling down one node branch to the end, then turning around if couldn't find the thing, then traveling down another branch, etc, until we find the find we want. 

Kinda like being in a maze and going down each hallway option until we find the exit. 

Pros: DFS generally takes less memory than BFS. 
Can use recursion here pretty easily. 

Cons: Does not find the shortest path to a node. 

Note that BREADTH first uses a queue and DEPTH first uses a stack. 

This will help us decide which of the two to use. 

Are we looking for a solution that would needs a first in, first out (queue! therefore breadth) OR a last in, last out
(stack! therefore depth). Are we visiting nodes in the order we see them (queue) or the last seen node first (stack)? 




## Graphs

Depth first and breadth first searches will answer alll the questions when it comes to graphs. Like basically. 

###### Is there a path between these two nodes in this undirected graph? 
        Run a depth first search or breadth first search from one node to see if you reach the other. 
        
###### What's the shortest path between these two nodes in an undirected, unweighted graph? 
        Run Breadth first search from one node and backtrack until you reach the second. 
        NOTE that Breadth first always find the shortest path, when the graph is undirected and unweighte. 
        Depth first does not find the shortest path. 
       
###### Can this undirected graph be colored with two colors? 
        Run a breadth first search, assign colors as nodes are visited. 
        Abort if we ever try to assign a node a color that's different from the color it already has. 

###### Does this undirected graph have a cycle? 
        Run a breadth first search and keep track of the number of times we visit a node. 
        If we've seen it, then yes, the graph has a cycle. 


## Linked lists 

A linked list is a collection of data broken down by nodes, in which each node contains two main things- data and a reference to the next node; reference is called  a pointer. A linked list will always (unless number of nodes is less than 2), have a head and a tail node.

Linked lists allow run-time efficient data manipulation. Often constant time. If the data set in the structure is quite large, when we insert or remove a new node, there’s no need to reorganize the entire structure like what happens when you add/remove an element to an array.

Very fast prepend and append, but very slow lookups, compared to arrays.


## Heaps 

There are two types. Min heaps and max heaps. 
A min heap is very similar to a binary tree in that there is a root node and the root node has a left and right node. But ordering of nodes are a little different. 
In a min heap, the child nodes for a parent node are always bigger than the parent. 
In a max heap, the arrangement goes from biggest number as the root to smallest numbers as the leaves. 

If we need to insert a node, we push it to the bottom. THEN we use logics to swap the new node with nodes tiered up until it goes where it fits. 

We use arrays to create heaps and access the parent/ left child/ right node like this:

Parent = (index - 2) / 2
Left child = (index * 2) + 1;
Right child = (index * 2) + 2; 