

## Why would we want to do a custom sort over using .sort()?

The built in .sort() function uses an insertion sort. 
BUT that's not great when we're looking at large datasets. 
Really, the best thing to do when we have a lot of numbers is use Quicksort or Mergesort. 

Merge sort is more efficient and works faster than quick sort in case of larger array size or datasets. 
Quick sort is more efficient and works faster than merge sort in case of smaller array size or datasets. 

SO:
Small small data -> .sort()
Medium data (that fits in memory) -> Quicksort 
Large data -> Mergsesort 

Generally, Quicksort is better because it's O(nlogn) is faster than Mergesort's O(nlogn) in real-world applications. It also uses very little space, versus Mergesort's O(n) space. 

Both quicksort and mergesort use a divide and conquer process. Much better than bubblesort. 

## Merge Sorts

Log maths is also super useful for finding time complexity for mergeSort. 

Mergesort is an algo where we divide the array, sort the two halves, then merge the two sorted halves into one solved whole by comparing the first element in each of left and right, and push this into a new arr. 

Mergesort is one of the most popular sorting algos. It's good because it's a divide and conquer approach. 

Two ways to mergeSort: Recursively and non-recursively 

In code, recursively: 

    function mergeSort(unsortedArr) {
        // If it's an arr of 1, we don't need to sort
        if(unsortedArr.length <= 1) {
            return unsortedArr; 
        }

        // Find the middle of the array, round down
        const middle = Math.floor(unsortedArr.length/2); 

        // Now we divide the arr into halves; 
        const left = unsortedArray.slice(0,middle);
        const right = unsortedArray.slice(middle); 

        // Use recursion to combine left & right 
        return merge(;
            mergeSort(left), mergeSort(right)
        )
    }

So what's our total time cost? O (n * log(2)(n))
Because the log(2)(n) comes from the number of times we have to cut n in half to get down to subarrays of just 1 element (our base case). The additional n comes from the time cost of merging all nn items together each time we merge two sorted subarrays.


Another way to mergeSort:

const mergeSort = function(arrA, arrB) {
    let arr = [];

    while(arrA.length && arrB.length) {
        if(arrA[0] < arrB[0]) {
            // If ele is less, we add it into arr
            arr.push(arrA[0]);
            // AND delete it from front of arrA
            arrA.shift();
        } else {
            arr.push(arrB[0]);
            arrB.shift();
        }
    }
    // In situations where there's an unequal length of arrs, we just concat both on 
    return arr.concat(arrA,arrB; 
}

// Add a step to the above if we are given 1 arr 
const mergeSort = function(unsorted) {
    
    // Make a left and right arr 
    const mid = Math.floor(arr.length/2);
    const arrA = unsorted.slice(0, mid);
    const arrB = unsorted.slice(mid);

    let arr = [];

    while(arrA.length && arrB.length) {
        if(arrA[0] < arrB[0]) {
            // If ele is less, we add it into arr
            arr.push(arrA[0]);
            // AND delete it from front of arrA
            arrA.shift();
        } else {
            arr.push(arrB[0]);
            arrB.shift();
        }
    }
    // In situations where there's an unequal length of arrs, we just concat both on 
    return arr.concat(arrA,arrB; 
}



## Quicksort 

Quicksort is a recursive sort that focuses on a pivot point within the array. 
We assume that the pivot element in the array is in its final, correct, sorted position. Therefore, we want everything to the left of the pivot to be less than its value and everything to the right of the pivot to be greater than its value. 

As we ID numbers to the left and right, we look for things that don't work. So, from the left, we find a number that's GREATER than the pivot number and a number from the right that's LESS than the pivot number. We take these two numbers and switch their positions. We use two pointers to loop through the sliced arr that's left and the sliced arr that's right. Start left pointer at zero and start right pointer at the end of the arr. 

When we're at the point where everything to the left of pivot is smaller, and everything to the right is larger, we need to change the pivot. Recursion here! 

Worst case is O(n^2). 
Average case is O(n logn) because we're dividing the array in left each time and half gets pivoted to one side of the arr and half gets pivoted to the other side. 

[5,2,7,9,6]

// One way to do quicksort: 
function quickSort(arr) {
    // Base: Return the element in the arr
    if(arr.length <= 1) {return arr}

    // Make a pivot, and two arrs for left and right
    const pivot = Math.floor(arr.length/2)
    let left = []
    let right = []

    // Loop through arr. Check if ele is left or right 
    for(let i = 0; i < arr.length; i++) {
        const ele = arr[i];

        if(ele <= pivot) {
            left.push(ele)
        } else {
            right.push(ele);
        }
    }
    // Recursively do this to the arr on the left and the arr on the right
    return [...quickSort(left), pivot, ...quickSort(right)]
}



## Bubblesort 

Not a great sorting algo. Just something to be aware of. 

Essentially, as we walk through an array, we look at every element and compare its value to the next value. Then we swap them if the 1st ele is > 2nd ele. We walk through the array until we're done swapping. 

Super slow. O(n^2) but NO need any extra space. 


// Something like this. Nested loop is slightly off 
function bubbleSort(arr) {

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i]; j++) {
            if(arr[i] < arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }
        }
    }
    return arr;
}
