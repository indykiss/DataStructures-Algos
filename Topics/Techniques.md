## Two Pointers

Two pointers iterate through the data together until a condition is met. 

Ways to identify when to use the Two Pointer method:
-  It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of elements that fulfill certain constraints
- The set of elements in the array is a pair, a triplet, or even a subarray

Ex:
Squaring a sorted array (easy)
Triplets that sum to zero (medium)
Comparing strings that contain backspaces (medium)

## Two pointers w/ differing paces
A pointer algorithm that uses two pointers which move through the array (or sequence/linked list) at different speeds. This approach is quite useful when dealing with cyclic linked lists or arrays.

By moving at different speeds (say, in a cyclic linked list), the algorithm proves that the two pointers are bound to meet. The fast pointer should catch the slow pointer once both the pointers are in a cyclic loop. The runners overlapping problem. 

How do you identify when to use?
- The problem will deal with a loop in a linked list or array
- When you need to know the position of a certain element or the overall length of the linked list.

Exs:
Linked List Cycle (easy)
Palindrome Linked List (medium)
Cycle in a Circular Array (hard)


## Merge Intervals 

When we need to deal with overlapping intervals. There are 5 cases:
1. a and b don't overlap. a is before b. OR b is before a.
2. a and b overlap; b ends after a end 
3. a completely overlaps b
4. a and b overlap; a ends before b ends
5. b completely overlaps a 

How do you identify when to use the Merge Intervals pattern?
- If you’re asked to produce a list with only mutually exclusive intervals
- If you hear the term “overlapping intervals”.

Exs:
Intervals Intersection (medium)
Maximum CPU Load (hard)

## Cyclic sort 
The Cyclic Sort pattern iterates over the array one number at a time, and if the current number you are iterating is not at the correct index, you swap it with the number at its correct index.

The "people in line swap places at most 2 times" problem. 

How do I identify this pattern?
- They will be problems involving a sorted array with numbers in a given range
- If the problem asks you to find the missing/duplicate/smallest number in an sorted/rotated array

Exs:
Find the Missing Number (easy)
Find the Smallest Missing Positive Number (medium)

## Swapping things:
When we want to swap the values of s[i] and s[j]:
  [s[i], s[j]] = [s[j], s[i]]


## Overlapping sub-problems 

A problem has overlapping sub-problems if we're solving the same issue multiple times. 

Usually can solve this with recursive solutions. 


## Greedy Algo 

A greedy algorithm builds up a solution by choosing the option that looks the best at every step. The cashier making change example; she tries to get the largest option for every bill taken out of the cash register as possible until goal is met. 






## Sliding window

Sliding window is used to perform a required operation on a specific window of values in an array or a linked list. 
The window starts from one element and slides over 1 element and with it the end of the window.

Ex:
Maximum sum subarray of size ‘K’ (easy)
Longest substring with ‘K’ distinct characters (medium)
String anagrams (hard)


## Memoization




## In place algos 

Occasionally I'll be asked to complete an algo, in-place. Something I've already seen. In-place, destructivly altering input, algos are really good for saving time and space BUT since we're destroying the input, it's not very good for code outside of the function. Ex: 

    const originalArray = [2, 3, 4, 5];
    squareArrayInPlace(originalArray);

    console.log('original array: ' + originalArray);
    // Logs: original array: 4,9,16,25 - confusingly!

In-place algos modify data structures/ objects outside of the stack frame, without copying a new input. (See below). But, note, that I can still make additional variables (usually constant time there). I just can't copy the input. Bc that's O(n) time/space. 

Primitive value inputs (integers, characters) are copied in while more complex data structures (arrs, heaps, hashs) are passed by reference. 

Out of place algos are safer, but if we need to save time/space and won't use the original input again, in-place algos are ok. 


## In place reversal of a linked list 


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