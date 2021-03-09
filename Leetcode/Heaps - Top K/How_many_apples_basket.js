

/*
How Many Apples Can You Put into the Basket

You have some apples, where arr[i] is the weight of the i-th apple.  
You also have a basket that can carry up to 5000 units of weight.

Return the maximum number of apples you can put in the basket.

arr = [100,200,150,1000]  =>   4
All 4 apples can be carried by the basket since their sum of 
weights is 1450.


Strategy: Naive, O(n log n) solution
- Sort the arr by weight 
- Counter for # of apples
- Iterate thru smallest apples 1st, subtracting
weight of apple from maxWeight of 5000 
- Once apple weighs more than weightRemaining, 
return counter 

Strategy: Faster way? Min heap? 
O(k log n + N), n is length of arr and k is number of apples that go 
into the basket. And we need to make the array become a min heap, which is O(n)

- Make our arr become a min heap, so we pull out 
the root/smallest apple and decrement weightRemaining
until minHeap's root > weightRemaining

*/

var maxNumberOfApples = function(arr) {
    let sortedApples = arr.sort((a,b) => a-b),
        weightRemaining = 5000,
        numofApples = 0; 
    
    for(let apple of sortedApples) {
        if(apple > weightRemaining) {
            return numofApples;
        } else {
            numofApples++; 
            weightRemaining -= apple; 
        }
    }
    return numofApples;
};


/*

Min-heap way:

const Heap = require('./collections/heap')

var maxNumberOfApples = function(arr) {
    let minHeap = new Heap([], null, (a,b) => b-a);  

    for(let apple of apples) {
        minHeap.push(apple)
    }; 
    
    let weightRemaining = 5000,
        numofApples = 0; 
    
    while(minHeap.size > 0) { 
        let apple = minHeap.pop();
    
        if(apple > weightRemaining) {
            return numofApples;
        } else {
            numofApples++; 
            weightRemaining -= apple; 
        }    
    }
}
*/

