## Two Pointers

Explain how to utilize a two pointer technique in arrays [one starts at front, one starts at end]
and linked lists [one iterates at one rate and another iterates at another rate]. 



## Overlapping sub-problems 

A problem has overlapping sub-problems if we're solving the same issue multiple times. 

Usually can solve this with recursive solutions. 



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



## In place algos 

Occasionally I'll be asked to complete an algo, in-place. Something I've already seen. In-place, destructivly altering input, algos are really good for saving time and space BUT since we're destroying the input, it's not very good for code outside of the function. Ex: 

    const originalArray = [2, 3, 4, 5];
    squareArrayInPlace(originalArray);

    console.log('original array: ' + originalArray);
    // Logs: original array: 4,9,16,25 - confusingly!

In-place algos modify data structures/ objects outside of the stack frame, without copying a new input. (See below). But, note, that I can still make additional variables (usually constant time there). I just can't copy the input. Bc that's O(n) time/space. 

Primitive value inputs (integers, characters) are copied in while more complex data structures (arrs, heaps, hashs) are passed by reference. 

Out of place algos are safer, but if we need to save time/space and won't use the original input again, in-place algos are ok. 


## Memoization
