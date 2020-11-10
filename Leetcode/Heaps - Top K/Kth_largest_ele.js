/*
Kth Largest Element in an Array

Find the kth largest element in an unsorted array. Note that it is the 
kth largest element in the sorted order, not the kth distinct element.

Input: [3,2,1,5,6,4] and k = 2
Output: 5

Strategy:
- Sort the arr
- We want the KTH largest
- Loop starting from the end. Once we hit arr.length - 1 - K, 
return that value

*/



// Nov
// 30 mins to maxHeap + loop way 

/*
Strat: MaxHeap. 
- Root of a maxheap = largest number SO we can 
loop from o - k and pull off the root until we hit k. 
When we hit k, return that value

Space: O(N) where n is num of eles within arr, bc we have a maxheap
Time: O(n) to build heap. But O(n log n) to remove root from maxheap

Strat: 
- Sort the arr asc then ID k -1 index and return it 
- Add eles to a set to get uniq values
Time: O(n log n), sort
Space: O(n) bc set can hold all eles 

Strat:
- Sort the arr
- Loop thru arr, track a counter that counts uniq vals 
- once counter === k, return nums[i]
*/

// [1, 3, 4, 3, 1], k = 3, 4
var findKthLargest = function(nums, k) {
    if(nums.length < 2) return nums;
    
    nums = nums.sort((a,b) => b-a);
        
    return nums[k - 1];
};



const Heap = require("./collection/heap") // import heap 

var findKthLargestHeap = function(nums, k) {
    
    let maxHeap = new Heap([], null, (a,b) => b-a); 
        
    // add nums to maxheap
    for(let num of nums) {
        maxHeap.push(num);
    }
    
    // ID the kth largest ele
    for(let i = 0; i < k; i++) {
        let ele = maxHeap.pop(); // removes biggest num in heap, root 
        
        if(i === k) {
            return ele;
        }
    } 
}







// Min heap:
var findKthLargest = function(nums, k) {
    // Edge cases 
    if(!nums || !nums.length) {return -1};

    let heap = new minHeap(k);

    // Add every number into the heap 
    for(let num in nums) {
        heap.add(num);
    }
    // Return the highest num in the heap 
    return heap.peak();
}

// Make the heap 
class minHeap {
    constructor(max) {
        this.max = max;
        this.list = [];
    }

    add(val) {
        if(this.list.length >= this.max) {
            if(val > this.list[0]) {
                this.remove();
                this.list.push(val);
                this.bubbleUp()
            }
        } else {
            this.list.push(val);
            this.bubbleUp();
        }
    }

    remove() {
        if(this.list.length === 1) {
            this.list.pop();
            return;
        } 
        let last = this.list.pop();
        this.list[0] = last; 
        this.bubbleDown();
    }

    // I HAVE NO CLUE WHATS GOING ON HERE
    bubbleDown() {
        let curr = 0
		let left, right
		while (true) {
			left = (2*curr) + 1
			right = (2*curr) + 2
			if (left > this.list.length-1) {
				break
			}
			if (Math.min(this.list[left],
				this.list[right] || Number.MAX_SAFE_INTEGER) > this.list[curr]) {
				break
			}
			let temp
			if (this.list[right] !== undefined && this.list[right] < this.list[left]) {
				temp = this.list[right]
				this.list[right] = this.list[curr]
				this.list[curr] = temp
				curr = right
			} else {
				temp = this.list[left]
				this.list[left] = this.list[curr]
				this.list[curr] = temp
				curr = left
			}
		}
    }

    // I HAVE NO CLUE WHATS GOING ON HERE
    bubbleUp() {
        let index = this.list.length - 1
		let parent = Math.floor((index-1)/2)
		while (parent >= 0 && this.list[parent] > this.list[index]) {
			let temp = this.list[parent]
			this.list[parent] = this.list[index]
			this.list[index] = temp
			index = parent
			parent = Math.floor((index-1)/2)
		}
    }

    peak() {
        if(this.list.length > 0) {
            return this.list[0]
        }
    }


}




// Non-heap. Easy way to do this: 
var findKthLargest = function(nums, k) {
    if(nums.length < 2) {return nums}
    
    let sorted = nums.sort((a,b) => a - b);
    
    return sorted[nums.length - k]
};


