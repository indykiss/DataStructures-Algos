

# October


### To-dos: 

## Grokking: Two weeks of 4 hour days = Complete all of it. 
## I don't need to complete all of it. Just like half! 

## Strat for Grokking:
## Have Grok on left of screen. Look up LC. Do LC on right of screen. 
## Double win. Doing grokking + doing a leetcode! 
## Leave the last 2-3 challenges so I can go back and review them in Nov. 

# Grokk:
## After binary search, we just have 5 sections left. We'll be 2/3rd done! 
## Those 5 are also weird/ fringe things so maybe run thru by Sun. 

## Reorganize. I only have time for 40-50 algos for BOTH 
## bloomberg AND facebook. 


## Sunday: 
Dynammic programming, knapsack. Only do 2-3
Topological sort, graph: 3-5. Only b/c I haven't done this one much 



# November

## Leetcodes
- 5.ish FB mediums
- 2-3 more FB easys 

## FB Coding Exercises
- 28 total on the FB site  

### Finished:
- First 10 easys. Should do a few more easys
- Done 5/ 10 mediums. 
- Mostly will be done with Grok by Nov



# Grokking patterns summary: 

# Sliding window: 
We have an array or a linked list that we need to 
find something within a specific range in the arr. 

Exs: 
- Find the longest substr of repeating chars in a str. 
- Fruits in a basket. We have 2 baskets and an arr of num. What's the most fruit we can have (longest subarr of 2 ints). 
- Given an array A of 0s and 1s, we may change up to K values from 0 to 1. Return the length of the longest (contiguous) subarray that contains only 1s. 


# Multiple pointers / Two pointers
When we have a sorted arr or linked list and we want to find 
a set of eles that meet a certain requirement. 

Ex:
- Two sum. We have an arr and a target. Find the 2 nums that equal target. 
- We have 2 sorted arrs. We want to merge them 


# Fast and Slow Pointers 
Two pointer strategy that move through an arr at different
speeds. Esp useful in a cyclic linkedlist. 

Basically one goes slow and another goes fast and 
where they meet is the answer. 

Ex: 
- Finding the cycle in a linked list 


# Merge Intervals 

We're looking to find overlapping intervals or merge intervals
if they do overlap. Intervals being an arr of arrs with starting point
and end point. 

Ex:
- Find number of meeting rooms needed.
- Merge intervals. 


# Cyclic sort
Describes an approach to deal with problems involving arrays containing numbers in a given range.

Key terms: "We are given an unsorted arr with numbers ranging from 
1 to N" or anything close. 

Ex: 
- Cyclic sort 
- Find all missing numbers in an unsorted arr that has 1 to N nums


# Reverse a linked list 
When we need to reverse a linked list, particularly in place, 
or any variation of reversing a linked list. 

- Literally ONLY need to learn like 
reverse a linked list. AND reverse linked list from 
points A to B. 


# Tree: BFS (queue, levels)

When we need to traverse a tree in a level by
level order, use breadth first search. We use a queue to keep  track of all the nodes of a level before we move to the next level. Space always O(N) where n is the number of nodes. 

- Binary tree level-order traversal 
- Return an arr of arrs with all the values on each level
of a binary tree
- Return the avg of each level in a BT 


# Tree: DFS (stack, paths)
We use recursion, OR A STACK using iterative, to track all the previous (parent) nodes while traversing. This makes our space always O(H) where H is the height of the tree.  

- Binary Tree Path Sum 
- Find the root-leaf path that equals given sequence, or 
equals target sum 


# Two Heaps
When we need to divide eles into a small heap and a 
larger heap of things. Min heap / max heap. 

Not wasting my time with two heaps right now. Maybe look at this later when studying for google. 

ONLY NEED TO DO MIN AND MAX HEAPS 


# Subsets 
When we need to deal with permutations or combinations of a set of elements. 
Grokking goes over a breadth first way to handle these Qs. 

- Find all possible subsets in an arr of eles
- Generate parenthese


# Modified Binary Search 
When we have a sorted array, Linked List, or Matrix, we can do a binary search 
through it.  

- Start, end, midpt (math.floor(start + (end-start)/2)
- Update start/ end based on where target is 


# Bitwise XOR

XOR is a logical bitwise operator that returns 0 (false) if both bits are the same and returns 1 (true) otherwise. In other words, it only returns 1 if exactly one bit is set to 1 out of the two bits in comparison.

A	B	A xor B
0	0	  0
0	1	  1
1	0	  1
1	1	  0

- Skipped this one bc time is running out. Only 2 weeks til FB/ Bloomb onsite. Do this if doing Google. 


# Top 'K' Elements 

Use when we're asked to find the top/ smallest/ largest/ frequent K elements. Frequently asked pattern. 

The best DS that keeps track of K elements is a heap. So the Grokking pattern uses a heap to do this. 

- Find K largest numbers in an arr. 
- Find K closest points to origin


# K-way Merge 
When we are given "K" sorted arrays, we can use a 
Heap to do a sorted traversal of all the eles of all 
arrays. 

We push the smallest (first) ele of each array into a MinHeap to get the overall minimum. 

While inserting eles into the MinHeap, we track which array gave us which element. We can then remove the top element from the heap to get the smallest element,and push the next ele from the same arr, to which this smallest ele belonged, to the heap. 

Repeat until we make a sorted traversal of all elements. 

Ya that doesn't make sense. But an important one to know know to do:

- Merge K Sorted Lists 


# Knapsack using Dynammic Programming 

Basically Greedy method of programming. 

- Cashier is making change. Use smallest num of coins 
- Fancy cake vault 


# Topological Sort (Graph)
Used to find a linear ordering of elements that have 
dependencies on each other. For example, if event "B" is dependent on event "A" then "A" comes before "B" in
topological ordering. 

- Course Schedule: https://leetcode.com/problems/course-schedule/discuss/305685/java-script-dfs-100-detect-cycle-in-directed-graph 

- Practice later maybe 
