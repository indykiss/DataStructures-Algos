


/*

Maximum Product of Three Numbers

Given an integer array nums, find three numbers whose product is 
maximum and return the maximum product.

Input: nums = [1,2,3]
Output: 6


Strategy: O(n^3) time
- Nested 3 for loops to find max prod by looking at all prods

Strategy: O(n log n) time
- Sort the nums 
- Max will either be:
    - num[0] * num[1] * num[num.length-1]
    - num[num.length-1] * num[num.length-2] * num[num.length-3]

Strategy: O(n) time
- INSTEAD of sorting, just save the 2 smallest and the 3 largest vals 
- Max will either be:
    - smallest * 2ndSmallest * largest
    - largest * 2ndlargest * 3rdlargest

*/


var maximumProduct = function(nums) {
    let a = Infinity, 
        b = Infinity, 
        x = -Infinity, 
        y = -Infinity,
        z = -Infinity; 
    
    for(let num of nums) {
        
        // update smallest
        if(num < a) {
            b = a; 
            a = num; 
        } else if(num < b) {
            b = num;
        }
        
        // update largest
        if(num > z) {
            x = y;
            y = z;
            z = num;
        } else if(num > y) {
            x = y; 
            y = num; 
        } else if(num > x) {
            x = num; 
        }
    }
    return Math.max(a * b * z, x * y * z);
} 


// const Heap =  require('./collections/heap')// get heap data structure

// var maximumProductHeaps = function(nums) {
    
//     // finding 3 largest and two smallest nums
//     // alt: min1, min2, max1, max2, max3 as variables 
    
//     let largestThree = new Heap([], null, (a,b) => b-a); // min Heap
//         smallestTwo = new Heap([], null, (a,b) => a-b); // max Heap
    
//     largestThree.push(nums[0], nums[1], nums[2]); 
//     smallestTwo.push(nums[0], nums[1]); 

    
//     for(let num of nums) {
        
//         let ele = largestThree.peek(); 
        
//         if(num > ele) {
//             largestThree.pop(); 
//             largestThree.push(ele);
//         }
        
//         let ele2 = smallestTwo.peek(); 
        
//         if(num < ele2) {
//             smallestTwo.pop(); 
//             smallestTwo.push(ele2);
//         }  
//     }
    
//     let largest = largestThree.pop(),
//         secondLargest = largestThree.pop(), 
//         thirdLargest = largestThree.pop();
    
//     let smallest = smallestTwo.pop(), 
//         secondSmallest = smallestTwo.pop(); 
    
//     return Math.max(largest * secondLargest * thirdLargest, smallest * secondSmallest * largest);
    
// };

