# Concepts to remember

Read me! As much as possible: https://www.geeksforgeeks.org/data-structures/


## RAM

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
        30            1,073,741,824       1 billion         1 GS
        32            4,294,967,296       4 GB
        40            1,099,511,627,776   1 trillion        1 TB 

RAM is connected to a memory controller, which is connected to a processor. 
    Processor -> Memory controller -> RAM (with its address shelves of bits)
    This helps access memory randomly (don't need to go down the ladder of shelves)

A processor has a cache that basically saves recent stuff from the RAM. 

When a processor gets content from a particular memory address, the controller also sends a handful of nearby addresses. All of which gets cached. 

Think of RAM like an array; each address is numbered and contains data. 


## Binary numbers

K, let's store some stuff into those bits we've looked at. 

Normal numbers are base 10 aka decimal. B/c 0-9. 

Computer's are base 2 aka binary. 0s and 1s

How to read binary? 

    In base 10, we have 101 which means 1 hundred, 0 tens, 1 one. Each of which is a sequential power of 10: 
        10^0 = 1
        10^1 = 10
        10^2 = 100 ... 
    In base 2, we have 101. This actually adds up to 5 b/c we calculate each as a sequential power of 2: 
        2^0 = 1
        2^1 = 2
        2^2 = 4
        2^3 = 8 
    So that means we are using a mix of 1 (on) and 0 (off) and the values of the placeholder to calculate:
        1: 4 spot, so 2^2 = 4. Yes, so add 4. 
        0: 2 spot, so 2^1 = 2. No, so no add.
        1: 1 spot, so 2^0 = 1. Yes so add 1.
        BOOM. That's 5. 
            Doing another example: 100101. 
                Yes to 1, no to 2, yes to 4, no to 8, no to 16, yes to 32. 
                Adds to 37! 


## Fixed width integers

How many different numbers can we express with 8 bits? 
    2^8 = 256 different numbers 
    Same with any n bits; answer is 2^n 

We usually use 4 or 8 bytes for storing info, bc that'll give us 4 billion or 10 billion billion (2x billion) number options.

Fixed-width integers take up constant space. Doing maths with fixed-width integers always yielf constant space, bc we drop constants when calculating efficiency. Tradeoff being limited to the 2^n number of values.

There's always trade offs. Increase time, decrease space, vice versa. Other tradeoffs exist as well. 


## Arrays 

A data structure used to store a list of similar data type elements, all accesible by their indices. (Arrs can only have 1 )

Looking up an element in an arr takes up constant time. 

    
## Arrays time & space

Really awesome at fast lookups and fast appends, adding stuff at the end of an array. O(1) time. 

BUT terrible inserts, deletes, and space. O(n) time and space. 

Arr.slice(startIndex, endIndex) takes up O(n) time and space, which is a lot, because it is making a new arr and copying over elements into that new arr. Just be careful with this!


## Strings 

Sets of chars. 

We can express strings as arrays of 8-bit chars, in ASCII:

    A: 01000001     S: 01010011      k: 01101011
    B: 01000010     T: 01010100      l: 01101100
    C: 01000011     U: 01010101      m: 01101101
    D: 01000100     V: 01010110      n: 01111110
    E: 01000101     W: 01010111      o: 01101111
    F: 01000110     X: 01011000      p: 01110000
    G: 01000111     Y: 01011001      q: 01110001
    H: 01001000     Z: 01011010      r: 01110010
    I: 01001001     a: 01100001      s: 01110011
    J: 01001010     b: 01100010      t: 01110100
    K: 01001011     c: 01100011      u: 01110101
    L: 01001100     d: 01100100      v: 01110110
    M: 01001101     e: 01100101      w: 01110111
    N: 01001110     f: 01100110      x: 01111000
    O: 01001111     g: 01100111      y: 01111001
    P: 01010000     h: 01101000      z: 01111010


## Pointers

Not a thing in JS. But basically they are variables that let you read or modify another variable. This fixes the issue of needing eles in an arrs to be the same size,but makes the arr not cache-friendly. 

## Dynamic arrays 

All arrs in JS are by default dynamic. In other languages, the number of indices in an arr has to be declared. Dynamic arrs' size increases as necessary. 

## Linked lists 

A linked list is a collection of data broken down by nodes, in which each node contains two main things- data and a reference to the next node; reference is called  a pointer. 

A linked list will always (unless number of nodes is less than 2), have a head and a tail node. Note: sometimes people refer to tail as everything other than head; clarify where needed. 

Pros: Linked lists allow run-time efficient data manipulation. Often constant time. If the data set in the structure is quite large, when we insert or remove a new node, there’s no need to reorganize the entire structure like what happens when you add/remove an element to an array. Flexible size. 

Cons: Costly lookups. Takes O(n) time to walk through head to nth term. Most computers' caches prefer reading sequential addresses in memory over scattered addresses. Linked lists use scattered addresses, so usually accessing the elements in a  linked lists are actually slower than arrays, though theoretically both should be O(n). 

Very fast prepend and append, but very slow lookups, compared to arrays.

                Worst Case
        space	O(n)
        prepend	O(1)
        append	O(1)
        lookup	O(n)
        insert	O(n)
        delete	O(n)
        
In JS, we need to implement a linked list, since it's not really built in. 

        const a = new LinkedListNode(5);
        const b = new LinkedListNode(1);
        const c = new LinkedListNode(9);

        a.next = b;
        b.next = c;
        
        
#### Doubly linked lists

In a doubly linked list, items are doubly linked: pointers to the next AND the previous nodes. 
This lets us traverse the list forwards and backwards. 


## Hash tables 

A hash table is a dictionary like data structure that maps keys to values. It allows people to look up a value based off its key. 
    In order to find keys based off values, we need to loop through all values & keys. Same w/ arrs. Ex:

      const lightBulbToHoursOfLight = {
      'incandescent': 1200,
      'compact fluorescent': 10000,
      'LED': 50000,
      };
    

Really useful for when we want to keep track of counts per char in a string. 

Sometimes when there's duplicates within the keys, there can be a hash collision. Which is bad. It's rare, but if we are dealing with a hash collision, we can have each array slot hold a pointer to a linked list with the key/value pair, instead of the usual having the value itself in that slot. 

Hash tables are also known as objects. 

Hash tables are basically built-on arrays, where instead of indices, we use keys. 

Pros: Quick lookups and flexible keys (most data types can be hashable). O(1) time. 

Cons: 
Worst case lookup is O(n), so not great. This happens when there's hash collisions. 
Not ordered. So can't easily find lowest/highest value. 
Single directional lookups, as in can find a value using a key in O(1) BUT if I'm trying to find the key, using a value, it's O(n) b/c need to loop through the whole structure. 
Not cache friendly. 

## Hashing and Hash functions 

A hash function takes data, like a string or a file, and converts it into a hash-- a fixed-size string or number. 

For example, here’s the MD5 hash (MD5 is a common hash function) for a file simply containing “cake”:
  DF7CE038E2FA96EDF39206F898DF134D
  

## Sets 

A set is like a hash map except it only stores keys, without values.

Sets often come up when we're tracking groups of items—nodes we've visited in a graph, characters we've seen in a string, or colors used by neighboring nodes. Usually, we're interested in whether something is in a set or not.

Sets are usually implemented very similarly to hash maps—using hashing to index into an array—but they don't have to worry about storing values alongside keys.

    lightBulbs = new Set(["incandescent", "compact fluorescent", "LED"]);

    lightBulbs.has("LED");  // true
    lightBulbs.has("halogen");  // false

A set is a collection of any type of element where none of the elements are duplicated and the order isn't important. 

Let's say we want to remove the duplicates in an array. 
We can do a loop where we make a new arr, go through elements in inputted arr, if it doesn't exist in new arr,
push into new arr. 
OR, and this is much better, we use a set and spread operator to make a new arr: 

    var array = ["Mike","Matt","Nancy","Adam","Nancy"];
    let newArr = [...new Set(array)]
    console.log(uniq)



## General programming 

#### Short circuit evaluation 

Strategy to avoid unnecessary work. Program stops as soon as something's off. 

Here is a code example. If Becky isn't even in the friends array, then the code stops immediately. Nothing else gets evaluated. 
          if (friends.hasOwnProperty('Becky') && friends['Becky'].isFreeThisFriday()) {
                  inviteToBoardGameNight(friends['Becky']);
        }

#### Garbage collection / Manual memory management

A garbage collector automaticall frees up space in a program that is not being used. Once a function is returned, we don't have reference to it anymore. In JS, garbage collection is automatic. In other languages, have to do that manually. 


#### Closures 

A closure is essentially a variable outside itself. 

Ex: We'd say that the message is "closed over" by sayMessage(). 
        const message = 'The British are coming.';
        function sayMessage(){
          alert(message); // Here we have access to message,
          // even though it's declared outside this function!
        }

Closures are good because they can create an instance variable (nextGeneratedId) that can change over time and affect the behavior of a function. Ex:

        // Function for getting the id of a dom element,
        // giving it a new, unique id if it doesn't have an id yet
        const getUniqueId = (() => {
          let nextGeneratedId = 0;
          return element => {
            if (!element.id) {
              element.id = `generated-uid-${nextGeneratedId}`;
              nextGeneratedId++;
            }
            return element.id;
          };
        })();
        
        // Somewhere else in the codebase...
        // ...

        // WHOOPS--FORGOT I WAS ALREADY USING THIS FOR SOMETHING
        nextGeneratedId = 0;

Good because it keeps the instance variable (nextGeneratedId) private within the function, in case we call it later on in the function. 

#### Mutable vs immutable objects

A mutable object is one that can be changed after its created. Immutable objects can't be. 

In JS, everything is mutable by default except strings. 

Can freeze an object to be immutable though if desired: 

        const array  = [4, 9];

        // Make it immutable
        Object.freeze(array);

        array[0] = 1;
        // array is still [4, 9]

Mutable changes are food because its all in-place, but notice that all references to the object will change too. 


## Log maths

Log is the inverse of exponentiating. 

Basically, we're trying to figure out what power do we need to raise the base to in order to get the answer.  

What power do we need to raise the base (10) to get the answer (100)?
    10^x = 100 
    x = 2 
    Aka: Log base 10 of 100 = 2

We use log to figure out what X is. Steps so we can do this for harder ones:
    10^x  = 100 
    log(10) * 10^x = log(10) * 100 
        log(10) cancels out 10^ 
    x = log(10) * 100 
        What power do we have to raise 10 to in order to get 100? 
    x = 2

Log rules
Simplification: log(b) * b^x = X 
    Brings down exponents

Multiplication: log(b) * (x * y) = log(b)(x) + log(b)(y)

Division: log(b) (x/y) = log(b)(x) - log(b)(y)

Powers: log(b) (x^y) = y * log(b)(x)

Change of base: log(b)(x) = log(c)(x) / log(c)(b) 
    Changes base from b to c 
    Useful for when we want to change the base of 10 (default) to something else

Important to note: In CS, it's almost always assumed that the base of a log is 2. SO log(n) === log(2)(n). 
    In usual maths, the usual base is 10. BUT computers use binary, so log base 2. 
    Also note, log base 2 is also represented as lg. 

Useful for these types of questions: 
    How many times do we need to double 1 before we get to n?: log(2)n
    Which is what we do in binary search!! 

## Binary search 

Used to find a target number in a sorted array. Note: array must already be sorted! 
   
    1. Find a middle number. Is it bigger or smaller than target?
        Tells us if target is in the left or right half, which... 
    2. Divides the problem in half. Rule out the other half that doesn't contain the target.
    3. Do steps #1-2 with the new half, until we find the target. 

Binary search time cost is O(lg(n)), since we are dividing the problem so it's not O(n)
in terms of equal in and equal out, but not O(1). 

Binary search in code. This is the iterative approach. Better for time and space! : 

    function binarySearch(target, nums) {
        // We make a floor and a ceiling indices to keep track 
        let floorIndex = -1;
        let ceilingIndex = nums.length; 

        // If there isn't at least 1 index between floor & ceiling 
            // then nums does not contain target 
        while(floorIndex + 1 < ceilingIndex) {
            // Find the halfway point, round down to avoid half index
                // Then make a guess index/value to compare to target
            const distance = ceilingLength - floorIndex; 
            const halfDistance = Math.floor(distance/2);
            const guessIndex = floorIndex + halfDistance;
            const guessValue = nums[guessIndex]

            // If we guessed right, boom, done! 
            if(guessValue === target) {
                return true;
            }

            // If target is to the left of our guessed value, lets
                // move the ceiling to the left
            if(guessValue > target) {
                ceilingIndex = guessIndex;
                // OR target is right, so move floor to the right
            } else {
                floorIndex = guessIndex;
            }
        }
        return false;
    }

We will use log maths to figure out the time cost for binary search. Since we are cutting nums in half x number of times until we get the target, we can solve for X using this formula: 
    n * (1/2)^x = 1
    n * (1^x)/(2^x) = 1 
    n /(2^x) = 1
    n = 2^x 
        // Now we use log to pull that exponent down 
    log(2)(n) = log(2)(2^x)
    log(2)(n) = x
        // That's our answer!! The time complexity of our problem is: 
    O(log(2)(n))

So our time complexity of binary search is O(log n)


## Merge Sorts

Log maths is also super useful for finding time complexity for mergeSort. 

Mergesort is an algo where we divide the array, sort the two halves, then merge the two sorted halves into one solved whole. 

Mergesort is one of the most popular sorting algos. It's good because it's a divide and conquer approach. 

Two ways to mergeSort: Recursively and non-recursively 

In code, recursively: 


    function mergeSort(unsortedArr) {
        // If it's an arr of 1, we don't need to sort
        if(unsortedArr.length <= 1) {
            return unsortedArr; 
        }

        // Find the middle of the array, round down
        const middle = Math.floor(unsortedArr.length/2); 

        // Now we divide the arr into halves; 
        const left = unsortedArray.slice(0,middle);
        const right = unsortedArray.slice(middle); 

        // Use recursion to combine left & right 
        return merge(;
            mergeSort(left), mergeSort(right)
        )
    }

So what's our total time cost? O (n * log(2)(n))
Because the log(2)(n) comes from the number of times we have to cut n in half to get down to subarrays of just 1 element (our base case). The additional n comes from the time cost of merging all nn items together each time we merge two sorted subarrays.

## Why use stacks or queues instead of arrays? 

While we can't use indices in queues/ stacks, it IS VERY time efficient. Constant efficiency for all operations. 

That's because we have to build individual operations to add/ remove things. This means we're not reshuffling the entire data structure when we make a change, like what happens when we're dealing with an array. 

## Queue Data Structure 

A queue is like a british line of people; first in, first out order. 

Enqueue = put the item in the queue (end of the queue). 

Dequeue = remove the item from the queue (front of the queue).

Times queues are used:
- During breadth first traversals
- Printers, like physical printers 
- Processes in a CPU as they wait for their turn to run 

Implement a queue with a linked list. 
- To enqueue, insert at the tail of the linked list 
- To dequeue, remove at the head of the linked list 

Pros: Very fast operations. All are constant time. 


## Stack Data Structure 

A stack is like literally a stack of pancakes. Add new pancake to the top. Eat the top pancake. 

Push = Adds to the stack. 

Pop = Removes from the stack. 

Can use an array (js: array, other languages dynamic array) OR a linked list. 

Pros: Very fast operations. All are constant time. 

Times stacks are used:
- During DEPTH first traversals 
- Call stack is a stack. As per its name implies 
- String parsers

## Binary Tree Data Structure

A binary tree is a tree where each node has 2 or fewer children nodes. A perfect tree is when every node has 2 children nodes. 

The children are referred to left and right nodes. In a branch with a node having two children nodes, the left node is left and right is right. Node.left and node.right is a way to refer to them. 

If a node has no children, then it's a leaf. 

The top node is the root.

One algo that's asked often is, "given a number of nodes, what's the tree's height, as in how many levels of nodes there are?"

Basically as we go down each level, the number of nodes progressively doubles. So the Q is basically, how many times do we need to double 1 in order to get to N. 

For all perfect trees, the number of nodes in the last level of the tree will be (n + 1)/2 -- +1 because the first level of tree is one, so the number of nodes will always be odd in a perfect tree. Half.ish of the nodes will be in the last level, because of the whole doubling at every level thing.

SO to find the height of a perfect tree, that breaks down mathmatically to (n is total of nodes and h is height): 
    h = log(2)(n+1) 


## Binary Search Tree

A binary search tree is a binary tree where the left children nodes are smaller in value than the parent node and the right children node are larger in value than the parent node. 

A BST is balanced when the left and right subtrees' heights differ by 1 level at the most. AND the left subtree is balanced AND the right subtree is balanced. 
    - Note: A tree can be height or weight balanced. One does not affect the other. 
    - https://stackoverflow.com/questions/8015630/definition-of-a-balanced-tree 

One fav question is checking if a binary tree is a binary search tree. 

Pros: IF the tree is balanced (ask the interviewer if it's not stated), then they're good at optimizing space/ time for inserts/ deletes and good worst case scenarios. 

BSTs are sorted so can take out the sorted elements in O(n). Finding an element that's closest to a value would be O(lg(n)). 

Cons: BSTs are never the fastest for anything. There's no O(1) time option for anything. An arr or hash will be faster for any 1 operation. 


## Graph Data Structure

A graph organizes items in an interconnected network. Each item is a node (or vertex). Each connection is an edge. 

The number of degrees a graph has refers to the number of edges connected to the node. The maximum possible degrees refers to the maximum number of connections to other nodes a node can have. 

In DIRECTED graphs, ie ones with the arrows, there are in-degrees and out-degrees, referring to the arrows pointing to that node and arrows pointing out of that node. 

Pros: Really good when there's connections: Facebook users and friends, cities and highways, etc. 

Cons: Not super time efficient. Bad at scaling. Most graphs are minimum of O(n* lg(n)) time efficiency. 

Directed vs undirected graphs: In directed graphs, there's direction to the edges. A node points to another node. 
In undirected graphs, the edges are arrowless connections. 

Cyclic vs acyclic: If there's a cycle somewhere in the graph (a bunch of nodes connected in a hexagon or a shape of somesort-- unbroken series of nodes that connect to each other), then it's cyclic. No cycles are acyclic. 

Weighted vs unweighted: Instances where the each connection has some sort of weight. Weight could signify distance or cost or time to travel between locations. 

Legal coloring: Basically each node is colored and no adjacent node has the same color. If there are nodes next to each other who are all blue, then that is illegal coloring, for example. 

RN: Graphs can have loops. Essentially a node that's connected to itself (like the line connecting nodes; one line just connects to itself). This can be an edge case for us to consider.

#### Representation of Graphs in code

Edge list: A list of all the edges. Helpful to pair list of nodes with edges, bc sometimes a node isn't connected with an edge. 

          const graph = [[0, 1], [1, 2], [1, 3], [2, 3]];

Adjacency list: A list where the index represents the node and the value is a list of the node's neighbors. 

        const graph = [
          [1],
          [0, 2, 3],
          [1, 3],
          [1, 2],
        ];

We can also use an object to do this, where the key is the node and the value is a list of that node's neighbors. 

          const graph = {
                  0: [1],
                  1: [0, 2, 3],
                  2: [1, 3],
                  3: [1, 2],
          };

Adjacency Matrix: A matrix of 0s and 1s that indicates where the node X is connected to node Y. 0 is no and 1 is yes, of course. 

          const graph = [
          [0, 1, 0, 0],
          [1, 0, 1, 1],
          [0, 1, 0, 1],
          [0, 1, 1, 0],
        ];

Since node 3 has edges to nodes 1 and 2, graph[3][1] and graph[3][2] have value 1. :( 


#### Algos with Graphs

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


## Breadth-first search

Breadth-first search is a way to explore a tree or graph by looking at the nodes one step away, then two steps away. 

Kinda like throwing a stone in a cave pond. You explore the nodes that ripple out from the starting point, until we reach all the nodes.  

Pros: Finds the shortest path between the starting node and any other node. 

Cons: Generally takes more memory than the depth-first search, since we are looking at all the nodes. Breadth and all. 


## Depth-first search (also called depth-first traversal) 

Depth-first search is a way to explore a tree or graph by traveling down one node branch to the end, then turning around if couldn't find the thing, then traveling down another branch, etc, until we find the find we want. 

Kinda like being in a maze and going down each hallway option until we find the exit. 

Pros: DFS generally takes less memory than BFS. 
Can use recursion here pretty easily. 

Cons: Does not find the shortest path to a node. 

Note that BREADTH first uses a queue and DEPTH first uses a stack. 

This will help us decide which of the two to use. 

Are we looking for a solution that would needs a first in, first out (queue! therefore breadth) OR a last in, last out
(stack! therefore depth). Are we visiting nodes in the order we see them (queue) or the last seen node first (stack)? 


## Overlapping sub-problems - Dynamic programming

A problem has overlapping sub-problems if we're solving the same issue multiple times. 

Usually can solve this with recursive solutions. 

## Memoization - An example of dynamic programming, yay!

Memoization is when the function MEMORIZES the results for given inputs. This makes sure that the function doesn't run inputs it has already seen. 

This makes recursive problems become much more time and space efficient. 

Ex: Let's look at Fibonacci, assume positive nums

        function fib(n) {
         // Return if 0 or 1
           if(n === 0 || n === 1) {
                return n;
           }
          // Else, recurse. Add prev num or 2nd previous num
           return fib(n-1) + fib(n-2);
        }

If we think about this, the call stack of fib using recursion is a tree of calls. fib(5) -> fib(4) & fib(3) -> fib(3) & fib(2) -> fib(2) & fib(1) -> fib(2) & fib(1) -> fib(1) & fib(1) -> fib(1) & fib(1). 
        
LOTS of duplicate calls. Super inefficient!  

Here we can use memorization to reduce the calls and just insert memoized results. 
We can wrap the function in a class that stores an instance property, memo, that maps inputs to outputs. Then we can just check the memo to see if we've done this thing before. And if not, we can save our thing to the memo to prevent future duplicate calculations. 

        class Fibber{
            constructor() {
               this.memo = {} 
            }

            fib(n){
               if(n === 0 || n === 1) {
                  return n
               }
               // Have we calculated this already?  
               if(this.memo.hasOwnProperty(n)) {
                  console.log('grabbing memo[${n}]');
                  return this.memo[n];  
               }
               
               console.log('computing fib(${n}) fyi');
               const result = this.fib(n-1) + this.fib(n-2);
               
               // Then memoize this
               this.memo[n] = result;
               return result;
            }
        }

If we look at our imaginary tree of calls, now no node gets called more than twice. 

More efficient yay.


## Bottom up algos - More dynamic programming, YAY! 

Approaching an algo "bottoms up" basically just means we look at it by starting from the beginning. In recursion, we start from the end and work backwards. 

Bottom up is an alternative to recursion. 

Ex: Let's say we want to return all the products from 1 to n: 

     function product1ToN(n) {
        if(n > 1) {
           return n * product1ToN(n-1)
        } else {
          return 1;
        }
     }
This builds a call stack of O(n), which makes space O(n), no bueno. 

Instead, we can do this bottom up: 

     function product1ToN(n) {
        let result = 1;
        for(let num = 0; num <= n; num++) {
           result = result * num;
        }
        return result;
     }
This is O(n) time and O(1) space. 


## In place algos 

Occasionally I'll be asked to complete an algo, in-place. Something I've already seen. In-place, destructivly altering input, algos are really good for saving time and space BUT since we're destroying the input, it's not very good for code outside of the function. Ex: 

    const originalArray = [2, 3, 4, 5];
    squareArrayInPlace(originalArray);

    console.log('original array: ' + originalArray);
    // Logs: original array: 4,9,16,25 - confusingly!

In-place algos modify data structures/ objects outside of the stack frame, without copying a new input. (See below). But, note, that I can still make additional variables (usually constant time there). I just can't copy the input. Bc that's O(n) time/space. 

Primitive value inputs (integers, characters) are copied in while more complex data structures (arrs, heaps, hashs) are passed by reference. 

Out of place algos are safer, but if we need to save time/space and won't use the original input again, in-place algos are ok. 


## Call Stack
A call stack is what a program uses to keep track of function calls.
    Call stacks are made up of stack frames-- one frame for each function call. 
Recursion uses a LOT of call stacks. Which impacts the space complexity significantly. Usually O(n) space even if no data structures are created. 
    - Iterative functions uses constant space, much better. 
        RN: When we run out of space, it's called a stack overflow.
 
 A stack frame stores: 
    - Variables
    - Arguments passed into functions
    - Info about the caller's stack frame 
    - Return address; what the program should do after the function returns 
 

## Greedy Algo 

A greedy algorithm builds up a solution by choosing the option that looks the best at every step. The cashier making change example; she tries to get the largest option for every bill taken out of the cash register as possible until goal is met. 

## Counting 
A time-saving algo pattern that reduces time but increases space.

Create an arr/hash where each index/key represents the inputs while the values represent the number of times each input appeared. 

This is really good for things like sorting an arr of numbers, with a highest number parameter.

        const counts = {};
        
        array.forEach(item => {
          if(counts.hasOwnProperty(item)) {
            counts[item]+= 1 
            } else {
              counts[item] = 1
            }
          });
        

