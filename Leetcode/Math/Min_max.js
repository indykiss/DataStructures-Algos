


/*
Given a list of integers, find the min and max. 


** Considerations/ edge cases? ** 
- Assume that the list length is greater than 1? 
- No min or max. Ex: [1, 1, 1] 
    Min = 1, Max = 1
- Issue with large list of ints? 
    Time and space important to save
- Negative numbers. Floats. Infinity/ -infinity 

*/


function findMinAndMax(arr) {
    let min = arr[0],
        max = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
    }
}
// time: O(n) 
// space: O(1)
// IF arr is sorted, pick out the 1st num as min 
// and last num as max 


/* Mergesort
1. Divide the arr in half (find midpoint) and sort each half. 
Recursive function. Base case: if the length is 1, return it. 
2. Recursing on left and right slice of the arr. 
3. Helper function that merges the left and the right sorted halves. 

*/

function mergeSort(arr) {

    if(arr.length === 1) {
        return arr; 
    }

    let midpt = Math.ceil(arr.length/2);

    let left = arr.slice(0, midpt), // off by 1 error? 
        right = arr.slice(midpt);    // off by 1? 

    let sortedLeft = mergeSort(left),
        sortedRight = mergeSort(right);

    return mergeArrs(sortedLeft, sortedRight);
}

function mergeArrs(arr1, arr2) {
    let res = []; 

    while(arr1.length > 0 && arr2.length > 0) {
        if(arr1[0] < arr2[0]) {
            res.push(arr1[0]); 
            arr1.shift(); // deletes first num in arr1
        }
        if(arr2[0] < arr1[0]) {
            res.push(arr2[0]);
            arr2.shift();
        }
    }
    return res;
}

// time: O(n log n)
// space: O(n)

