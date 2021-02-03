

/*
Interviewing.io, Feb 2, 2020  easier version of a hard

Medium: Given a data stream, find the product of the 3 largest numbers. 
As we add individual nums continuously, you'll want to update the prod. 

Hard: Now let's make it K largest numbers. And we need to handle situations 
where zero can be one of the largest nums. 

Strat 1: O(n log k), n being num of nums in data stream. 
K being the size of minHeap  
- Use a min heap of size K to track the smallest num of the largest
- Have a variable that tracks the prodOfKNums
- As we handle new nums, we check if root of minHeap is < the new num, 
if it is, we want to remove root from prodOfKNums (divide) and add the new
num to prodOfKNums and to minHeap. 


Strat 3: O(n log n) time
- Sort the nums and slice the K largest and find prod
- MEH. Bad time complexity 


Edge cases:
- Numbers can be negative OR zero
    - IF a number is zero, and we want to note it, we need to add case
    to our prodOfNum manipulation 
- K can be larger than the length of data stream
    - Handle: Throw exception OR just return prod of what we have OR wait until
    we have enough nums in the stream 
    - Depends on product requirements
- K can be huge or prodOfNums can be huge, so integer overflow is possible
    - Look up how to decipher if num is int overflow AND also how to handle it
- No floats

*/

const Heap = require('./collections/heap'); // import heap 

class DataStreamProd {

    contructor(k) {
        this.minHeap = new Heap([], null, ((a,b) => b-a)); // minHeap syntax off?
        this.k = 3
        this.prodOfNums = 1; 
        this.prodOfNumsPreZero = 1; 
    }

    addNum(num) {
        if(this.minHeap.size < k) {
            this.minHeap.push(num);
            this.prodOfNums = this.prodOfNums * num; 
        }

        else if(this.minHeap.root < num) {
            let oldRoot = this.minHeap.pop(); 
            this.minHeap.push(num); 

            // update prodOfNums depending on zero case
            if(num === 0) { // save old prod in case we drop zero later 
                this.prodOfNumsPreZero = this.prodOfNums; 
            }

            if(oldRoot === 0) {
                // dont divide by zero bc breaks things
                // and we want to use the prod pre-zero addition
                this.prodOfNums = this.prodOfNumsPreZero * num; 
            } else {
                // otherwise, remove num from root and update prodOfNums
                this.prodOfNums = this.prodOfNums / oldRoot; 
                this.prodOfNums = this.prodOfNums * num; 
            }
        }
        // handle integer overflow
    }

    productOfLargestKNums() {
        return prodOfNums; 
    }
}




/*
Find Median from Data Stream 


*/


class MedianFinder {

    // Use two heaps to track small nums and bigger nums 
    // The median will be the largest in small, or smallest in large 
    // or if it's even #, avg of those 2 nums 
    constructor() {
        this.minHeap = new Heap([], null, (a,b) => a-b);
        this.maxHeap = new Heap([], null, (a,b) => b-a); 
    }
    
    addNum(num) {
        if(this.maxHeap.peek() == null || num < this.maxHeap.peek()) {
            this.maxHeap.add(num)
        } else {
            this.minHeap.add(num); 
        }


        if(this.maxHeap.size - this.minHeap.size > 1) {
            this.minHeap.add(this.maxHeap.poll());  // ??? 
        } else if(this.minHeap.size - this.maxHeap.size > 1) {
            this.maxHeap.add(this.minHeap.poll()); // ???
        }
    }
    
    findMedian() {
        
        // Return 1st num in maxHeap if its larger, else in minheap
        // If same size, maths
        if(this.maxHeap.size > this.minHeap.size) {
            return this.maxHeap.peek();
        } else if (this.minHeap.size > this.maxHeap.size) {
            return this.minHeap.peek(); 
        } else {
            return ((this.maxHeap.peek() + this.minHeap.peek())/2); 
        }
    }
}

class Heap {
    // import heap normal + custom heap implementation

    poll() {
        let max = this.values[0]; 
        let end = this.values.pop(); 
        this.size--; 
        if(this.values.length > 0) {
            this.values[0] = end; 
            this.bubbleDown; 
        }
        return max;
    }

}