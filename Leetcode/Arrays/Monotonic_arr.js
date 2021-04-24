/*
Write a function that takes in an arr
of ints and returns a booleaan if the
array is monotonic. 

An array is monotonia if its eles,
from left to right are either all
increasing or decreasing. 
*/

// Apr 2021 practice
var isMonotonic = function(A) {
    let isIncreasing = true,
        isDecreasing = true; 

    for(let i = 0; i < A.length; i++) {
        let next = A[i+1], 
            curr = A[i];
        
        if(next > curr) {
            isDecreasing = false;
        } else if(next < curr) {
            isIncreasing = false;
        }
    }
    return isIncreasing || isDecreasing;
};


// O(n) time and O(1) space
function isMonotonic(array) {
    let increasing = true;
      let decreasing = true;
      
      for(let i = 1; i < array.length; i++) {
          // Expect increasing
          if(array[i-1] < array[i]) {
              decreasing = false;
          // Expect decreasing
          } else if(array[i-1] > array[i]) {
              increasing = false;
          }
      }
      return increasing || decreasing;
}

