


/*
Three sum

Find all the triplets in the given array that add to 
the target sum. 
*/
function threeNumberSum(array, targetSum) {
    array = array.sort((a,b) => a-b)
      let triplets = [];
      for(let i = 0; i < array.length - 2; i++) {
          let left = i + 1;
          let right = array.length - 1;
          while(left < right) {
              const sum = array[i] + array[left] + array[right];
              if(sum == targetSum) {
                  triplets.push([array[i], array[left], array[right]])
                  left++;
                  right--;
              } else if(sum < targetSum) {
                  left++;
              } else if(sum > targetSum) {
                  right--;
              }
          }
      }
      return triplets;
  }