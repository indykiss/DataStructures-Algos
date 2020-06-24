/*
Write a function that takes in an arr
of ints and returns a booleaan if the
array is monotonic. 

An array is monotonia if its eles,
from left to right are either all
increasing or decreasing. 
*/

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