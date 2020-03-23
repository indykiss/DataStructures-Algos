/*
Sort an Array

Given an array of integers nums, sort the array in ascending order.

Input: nums = [5,2,3,1]
Output: [1,2,3,5]

Strategy:
Merge sort
    S1: Divide in half. Make a mid. Base case if nums.length = 1, return it 
    S2: Make a left and right by slicing based on midpoint.
    S3: Recurse on the left and right.
    S4: Create a merge helper method to merge the left arr and right arr
        Remember to concat any leftover eles from first/second

Quicksort
    S1: Recursive solution. Pick a pivot point. 
    S2: Add all the values in the arr to the left if it's smaller.
    Add all the values that are larger into the right arr. 
    S3: Recursively check (...left, pivot, ...right)
*/












// Attempt #4: Better! 


// Quicksort
var sortArray = function(nums) {

    // Base case:
    if(nums.length < 2) {return nums};
    
    // Make pivot and left and right
    const pivot = nums[0];
    const left = [];
    const right = [];
    
    // Assign in left or right
        // Start the loop at 1 bc we're using nums[0] as pivot
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] <= pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i])
        }
    }
    // Recurse 
    return [...sortArray(left), pivot, ...sortArray(right)];
}


// Mergesort 
var sortArray = function(nums) {
    // Base case 
    if(nums.length < 2) {return nums}

    // Make midpoint, divide the arr
    let mid = Math.floor(nums.length/2);;
    const left = sortArray(nums.slice(0,mid));
    const right = sortArray(nums.slice(mid));
    
    return merge(left, right)
}    

var merge = function(first,second) {
    const res = [];
    
    while(first.length > 0 && second.length > 0) {
        if(first[0] <= second[0]) {
            res.push(first[0]);
            first.shift();
        } else {
            res.push(second[0]);
            second.shift();
        }
        
    }
    return res.concat(first,second);
}







// Attempt #3: Really good!!! Only 1 tiny mistake 


// Quicksort practice

var sortArray = function(nums) {
    const pivot = nums[0];
    const left = [];
    const right = [];
    
    if(nums.length < 2) {return nums}
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] <= pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    return [...sortArray(left), pivot, ...sortArray(right)];
} 


// Mergesort 
var sortArray = function(nums) {
    // Create midpoint to divide the two arrs 
    // Divide the two arrs into left and right 
    // Want to make a base case then recurse on the left and right 
        // Merge left and right 

    if(nums.length < 2) {return nums}
    
    const mid = Math.floor(nums.length/2);
    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid));
    
    return merge(left, right);
} 

var merge = function(first, second) {
    const res = [];    
    while(first.length > 0 && second.length > 0) {
        if(first[0] <= second[0]) {
            res.push(first[0]);
            first.shift();
        } else {
            res.push(second[0]);
            second.shift();
        }
    }
    return res.concat(first, second)
}



// Attempt #2! Got quick sort pretty quickly. Mergesort needed some help

// Mergesort: Recursive
var sortArray = function(nums) {
    
    if(nums.length < 2) {return nums};
    
    const mid = Math.floor(nums.length/2)
    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid));
    
    return merge(left, right);
} 

var merge = function(first, second) {
    let res = [];
    
    while(first.length > 0 && second.length > 0) {
          if(first[0] <= second[0]) {
              res.push(first[0])
              first.shift();
          } else {
              res.push(second[0])
              second.shift();
          }
    }
    return res.concat(first, second)
}


// Quicksort
var sortArray = function(nums) {
    if(nums.length < 2) {return nums}
    
    let pivot = nums[0];
    const left = [];
    const right = [];
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] <= pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return [...sortArray(left), pivot, ...sortArray(right)]
} 





// Quicksort!!
var sortArray = function(nums) {
    // Base case! 
    if(nums.length < 2) {return nums}
    // Make a pivot and left/right arrs
    const pivot = nums[0]
    const left = [];
    const right = [];
    // Assign values into left and right
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] <= pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    // Recurse! On left, pivot, right 
    return [...sortArray(left), pivot, ...sortArray(right)]    
}




// Mergesort!!!
var sortArray = function(nums) {
    // Base case! 
    if(nums.length < 2) {return nums};
    // Find the midpoint. 
        // Create left and right by recursing
    let midpoint = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0, midpoint));
    let right = sortArray(nums.slice(midpoint));

    // Return the left and right togther as 1 arr for next recurse
    return merge(left, right)
};

// Actual merge part of comparing eles
var merge = function(first, second) {
    const result = [];
    
    // Compare the elements. If an ele is smaller, it goes into res
    while(first.length > 0 && second.length > 0) {
        if(first[0] < second[0]) {
            result.push(first[0]);
            first.shift();            
        } else {
            result.push(second[0]);
            second.shift();
        }
    }
    // In situations where there's extra eles in either arr
    return result.concat(first, second)
}