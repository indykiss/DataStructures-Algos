
/*
Kth Smallest Element in a Sorted Matrix

Given a n x n matrix where each of the rows and columns are 
sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, 
not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.


Strat: Brute force 
- Iterate thru matrix
- Merge rows two at a time. 
    Helper function. IDs the smallest 1st ele in an arr, 
    add it into a res arr. Keep going until both arrs no longer 
    have any eles in them. 
- Merge until we only have 1 arr left 
- Access the corresponding index using K and return it. 


Strat: MinHeap? 
- Adding in all elements (or each row?) into the minHeap 
- Flipping thru minHeap's root until we get to Kth smallest 
*/



// Not optimal but passes LC tests but O(n^2) space:
// O(n log n) time bc of the sort
var kthSmallest = function(matrix, k) {
    let res = [];
    
    for(let row of matrix) {
        res = res.concat(row);
    }
    res = res.sort((a,b) => a-b);
    
    return res[k-1];
};



// MinHeap way to do this. Grokking. Oct, FB/ bloomb
const Heap = require('./collections/heap'); // import heap 

var kthSmallest = function(matrix, k) {

    // We want to sort our minHeap by the 1st ele in matrix's rows
    let minHeap = new Heap([], null, (a,b) => a[0] < b[0]); 
    
    // Push the 1st eles of each row into minHeap
    for(let idx = 0; idx < matrix.length; idx++) {
        // add in the value, it's index, and the row
        minHeap.push(matrix[idx][0], 0, matrix[idx]);  
    }
    
    // Take the root ele from min heap as we track how far we've gone 
    let counter = 0; 
    
    while(minHeap.length > 0) {
        let [value, index, row] = minHeap.pop();
        counter++; 
        
        // if we've found the kth smallest, done
        if(counter === k) {
            return value;
        }

        // idk why we want to do this but whatever
        if(row.length > i + 1) {
            minHeap.push([row[i+1], i+1, row]); 
        }
    }
};
// Time: O(min(k,n) + K * logn). Creating minHeap = O(min(k, n)). Idk what the k * log n is about. 
// Space: O(N) where n is the number of rows. 


// // This was 15 min attempt but doesn't work. 
var kthSmallest = function(matrix, k) {
    for(let idx = 1; idx < matrix.length; idx++) {
        let curr = matrix[idx],
            prev = matrix[idx-1];
        
        let twoMergedArrs = mergeArrs(prev, curr);
        
        matrix.unshift(twoMergedArrs);
    }
    
    // [[1, 5, 9, 10, 11, 12, 13, 13, 15]] k = 8
    return matrix[0][k-1];
};


function mergeArrs(arr1, arr2) {
    let res = [];
    
    while(arr1.length >= 0 || arr2.length >= 0) {
        let ele1 = arr1.shift(),
            ele2 = arr2.shift();
        
        if(ele1 <= ele2) {
            res.push(ele1);
        } else {
            res.push(ele2)
        }
        
        // track if one arr is empty and the other isnt
        if(arr1.length === 0 && arr2.length > 0) {
           res.push([...arr2]);
        }
        if(arr2.length === 0 && arr1.length > 0) {
            res.push([...arr1]);
        }  
    }
    return res;
}