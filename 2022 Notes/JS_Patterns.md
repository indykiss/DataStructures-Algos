

# Patterns and techniques picked up from Grokking Patterns + InterviewCake and elsewhere. 
# Should combine this with tips.md
# Very important to recognize patterns 


## Two Pointers
When we have a sorted arr or linked list and we want to find a set of eles that meet a certain requirement. 

Two pointers iterate through the data together until a condition is met. 

We can't use two pointers if the arr isn't sorted.

Ways to identify when to use the Two Pointer method:
-  It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of elements that fulfill certain constraints
- The set of elements in the array is a pair, a triplet, or even a subarray

- Squaring a sorted array (easy)
- Triplets that sum to zero (medium) / Two sum
- Merge 2 sorted arrs 

function twoPointer(arr, goal) {s
  let left = 0; 

  for(let right = 0; right < arr.length; right++) {
    if(arr[left] + arr[right] === goal) {
      return [left, right];
    }
  }
}


## Two pointers w/ differing paces
A pointer algorithm that uses two pointers which move through the array (or sequence/linked list) at different speeds. This approach is quite useful when dealing with cyclic linked lists or arrays.

Basically one goes slow and another goes fast and where they meet gives us info. 

How do you identify when to use?
- The problem will deal with a loop in a linked list or array
- When you need to know the position of a certain element or the overall length of the linked list.

- Linked List Cycle (easy)
- Palindrome Linked List (medium)
- Cycle in a Circular Array (hard)

Linked List Cycle, slow/ fast example
var hasCycle = function(head) {
    let slow = head,
        fast = head;
    
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        
        if(slow === fast) {
            return true;
        }
    }
    return false;
};

## Merge Intervals 
We're looking to find overlapping intervals or merge intervals if they do overlap. Intervals being an arr of arrs with starting point and end point. 

When we need to deal with overlapping intervals. There are 5 cases:
1. a and b don't overlap. a is before b. OR b is before a.
2. a and b overlap; b ends after a end 
3. a completely overlaps b
4. a and b overlap; a ends before b ends
5. b completely overlaps a 

How do you identify when to use the Merge Intervals pattern?
- If you’re asked to produce a list with only mutually exclusive intervals
- If you hear the term “overlapping intervals”.

- Find number of meeting rooms needed.
- Merge intervals. 

function mergeIntervals(intervals) {
    intervals = intervals.sort((a,b)=> a[0] - b[0]);

    for(let idx = 1; idx < intervals.length; idx++) {
        let prev = intervals[idx-1],
            curr = intervals[idx];

        // IDs overlapping appointments
        if(curr[0] < prev[1]) {
            return false;
        }
    }
    return true;
}



# Tree: BFS (queue, levels) -- Normal BFS and level wise 
When we need to traverse a tree in a level by level order, use breadth first search. We use a queue to keep  track of all the nodes of a level before we move to the next level. Space always O(N) where n is the number of nodes. 

- Binary tree level-order traversal 
- Return an arr of arrs with all the values on each level
of a binary tree
- Return the avg of each level in a BT 

BFS: Use a queue to hold things 
Breathe the queue. Good for going wide. 

// Normal BFS: 
var bfs = function(root) {
    let queue = [];
    queue.push(root);
    // things to track to answer Q

    while(queue.length > 0) {
        // maybe do something
        let node = queue.shift();
        // maybe do something

        if(node.left) queue.push(node.left); 
        if(node.right) queue.push(node.right);
    }
    return thing;
}



# BFS level wise 
for level wise, you check the length of current queue and do a for loop for that many in the level.  just watch out not to check for the length of the queue again for each iteration of for loop, since the length could change with each node processed and more nodes pushed back into the queue.  does that make sense? (this is a common hiccup for level wise)
instead of

Normal BFS:
Same as below, but just drop the inner for loop

Level order BFS:
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [],
        res = []; 
    queue.push(root); 
    
    while(queue.length > 0) {
        let lvl = [], 
            len = queue.length; 
            // SAVE PREVIOUS QUE LENGTH
        
        // LOOK AT EACH LEVEL
        for(let i = 0; i < len; i++) {
            let curr = queue.shift();
            lvl.push(curr.val); 
            if(curr.left) queue.push(curr.left); 
            if(curr.right) queue.push(curr.right); 
        }
        res.push(lvl); 
    }
    return res;
};

// practice typing for muscle memory
var bfs = function(root) {
    let queue = [],
        res = [];

    queue.push(root); 

    while(queue.length > 0) {
        let len = queue.length,
            lvl = [], 

        // do something 
        for(let i = 0; i < queue.length; i++) {
            let curr = queue.shift(); 
            lvl.push(curr.val);
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
        res.push(lvl)
    }
    return res
}



# Tree: DFS (stack, paths)
We use recursion, OR A STACK using iterative, to track all the previous (parent) nodes while traversing. This makes our space always O(H) where H is the height of the tree.  

- Binary Tree Path Sum 
- Find the root-leaf path that equals given sequence, or equals target sum 


DFS: Use a recursive stack to hold things
Duck the recursive stack. Good for going deep

var dfs = function(root) {
    // if we can't prove, default to opposite
    if(root == null) return;

    // prove either yes or no
    if(root.val / root.left/  root.right) {
        return false/ true;
    } 
    
    return dfs(root.left, info?) || / && 
        dfs(root.right, info?)
}



## Swapping things:
When we want to swap the values of s[i] and s[j]:
  [s[i], s[j]] = [s[j], s[i]]


## Overlapping sub-problems 
A problem has overlapping sub-problems if we're solving the same issue multiple times. 

Usually can solve this with recursive solutions. 


## Greedy Algo 
A greedy algorithm builds up a solution by choosing the option that looks the best at every step. The cashier making change example; she tries to get the largest option for every bill taken out of the cash register as possible until goal is met. 


## Sliding window
We have an array or a linked list that we need to find something within a specific range in the arr. 

The window starts from one element and slides over 1 element and with it the end of the window.

Doesn't quite work if there's negative nums. 

- Find the longest substr of repeating chars in a str. 
- Fruits in a basket. We have 2 baskets and an arr of num. What's the most fruit we can have (longest subarr of 2 ints). 
- Maximum sum subarray of size ‘K’ (easy)
- Longest substring with ‘K’ distinct characters (medium)

// Finding max length of subs : 1 template
function slidingWindow(arr, target) {
    let l = 0, 
      maxLen = 0,
      tempSum = 0;
  
  for (let r = 0; r < arr.length; r++) {
    tempSum += arr[r];
   
    while (tempSum > target) {
      tempSum -= arr[l];
      l++;
    }
    
    if (tempSum === target) {
      maxLen = Math.max(r - l + 1, maxLen); // maxLen = 1
    }
  }
  return maxLen;
} 

// 2nd template: 
function smallest_subarray_with_given_sum(s, arr) {
    let windowSum = 0,
      minLength = Infinity,
      windowStart = 0;
  
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; // add the next element
      while (windowSum >= s) {
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
        windowSum -= arr[windowStart];
        windowStart += 1;
      }
    }
  
    if (minLength === Infinity) return 0;
    return minLength;
}


# Top 'K' Elements 
Use when we're asked to find the top/ smallest/ largest/ frequent K elements. Frequently asked pattern. 

The best DS that keeps track of K elements is a heap. So the Grokking pattern uses a heap to do this. 

- Find K largest numbers in an arr. 
- Find K closest points to origin

Using a heap, top K: 
const Heap = require('./collections/heap'); // import heap DS

function kClosestHeap(points, k) {
    let res = [];
    
    let minHeap = new Heap([], null, (a,b) => distCalc(a) - distCalc(b)); 
    
    for(let idx = 0; idx < k; idx++) {
        let root = minHeap.pop();
        
        res.push(root);
    }
    return res; 
}


# K-way Merge 
When we are given "K" sorted arrays, we can use a  Heap to do a sorted traversal of all the eles of all arrays. 

We push the smallest (first) ele of each array into a MinHeap to get the overall minimum. 

While inserting eles into the MinHeap, we track which array gave us which element. We can then remove the top element from the heap to get the smallest element,and push the next ele from the same arr, to which this smallest ele belonged, to the heap. 

Repeat until we make a sorted traversal of all elements. 

Ya that doesn't make sense. But an important one to know know to do:
- Merge K Sorted Lists 


# Subsets 
When we need to deal with permutations or combinations of a set of elements. 
Grokking goes over a breadth first way to handle these Qs. 

- Find all possible subsets in an arr of eles
- Generate parantheses


# Modified Binary Search 
When we have a sorted array, Linked List, or Matrix, we can do a binary search 
through it.  

- Start, end, midpt (math.floor(start + (end-start)/2)
- Update start/ end based on where target is 

function binarySearch(array, target) {
	return binarySearchHelper(array, target, 0, array.length - 1)
}

// [3,4,5,6,7,8] target: 7
function binarySearchHelper(array, target, lowerBound, upperBound) {
	while(lowerBound <= upperBound) {
		const mid = Math.floor((lowerBound + upperBound) / 2)
		const aprox = array[mid];
		// low: 3, up: 8 
		// aprox: 6
		if(aprox === target) {
			return mid;
		} else if(target < aprox) {
			upperBound = mid - 1;
		} else {
			lowerBound = mid + 1;
		}
	}
	return -1;
}


var binarySearch = function(arr, target) {
    let floor = 0, 
        ceiling = arr.length-1; 
    
    while(floor <= ceiling) {
        let mid = Math.floor(floor+ceiling/2);

        if(arr[mid] == target) {
            return mid; 
        } else if(target < arr[mid]) {
            ceiling = mid-1;
        } else {
            floor = mid+1;
        }
    }
    return -1; 

}


## Cyclic sort 
Describes an approach to deal with problems involving arrays containing numbers in a given range.

Key terms: "We are given an unsorted arr with numbers ranging from  1 to N" or anything close. 

The Cyclic Sort pattern iterates over the array one number at a time, and if the current number you are iterating is not at the correct index, you swap it with the number at its correct index.

The "people in line swap places at most 2 times" problem. 

How do I identify this pattern?
- They will be problems involving a sorted array with numbers in a given range
- If the problem asks you to find the missing/duplicate/smallest number in an sorted/rotated array

Exs:
- Find the Missing Number (easy)
- Find the Smallest Missing Positive Number (medium)
- Cyclic sort 
- Find all missing numbers in an unsorted arr that has 1 to N nums


# Miscellaneous things that I'm not great at, but need to look at more



## In place algos 
Occasionally I'll be asked to complete an algo, in-place. Something I've already seen. In-place, destructivly altering input, algos are really good for saving time and space BUT since we're destroying the input, it's not very good for code outside of the function. Ex: 

    const originalArray = [2, 3, 4, 5];
    squareArrayInPlace(originalArray);

    console.log('original array: ' + originalArray);
    // Logs: original array: 4,9,16,25 - confusingly!

In-place algos modify data structures/ objects outside of the stack frame, without copying a new input. (See below). But, note, that I can still make additional variables (usually constant time there). I just can't copy the input. Bc that's O(n) time/space. 

Primitive value inputs (integers, characters) are copied in while more complex data structures (arrs, heaps, hashs) are passed by reference. 

Out of place algos are safer, but if we need to save time/space and won't use the original input again, in-place algos are ok. 


## Reverse a linked list 
When we need to reverse a linked list, particularly in place, or any variation of reversing a linked list. 

- Literally ONLY need to learn like reverse a linked list. AND reverse linked list from points A to B. 


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


# Bitwise XOR
XOR is a logical bitwise operator that returns 0 (false) if both bits are the same and returns 1 (true) otherwise. In other words, it only returns 1 if exactly one bit is set to 1 out of the two bits in comparison.

A	B	A xor B
0	0	  0
0	1	  1
1	0	  1
1	1	  0

- Skipped this one bc time is running out. Only 2 weeks til FB/ Bloomb onsite. Do this if doing Google. 


# Two Heaps
When we need to divide eles into a small heap and a 
larger heap of things. Min heap / max heap. 

Not wasting my time with two heaps right now. Maybe look at this later when studying for google. 

ONLY NEED TO DO MIN AND MAX HEAPS 