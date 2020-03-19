
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

OR, depending on where we're looking
Parent = index / 2
Left = index * 2 
Right = (index * 2) + 1

