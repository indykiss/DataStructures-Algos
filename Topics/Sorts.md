## Merge Sorts

Log maths is also super useful for finding time complexity for mergeSort. 

Mergesort is an algo where we divide the array, sort the two halves, then merge the two sorted halves into one solved whole. 

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
