

/*
Median of Arrays
Question: Find the median of two sorted arrays.

eg.
arr1 = [1, 3, 5]
arr2 = [2, 4, 6]
median(arr1, arr2) = 3.5

arr1 = [1,3,11]
arr2 = [2,10]
median = 3 

Strategy:
- Merge the sorted arrs, find median of the merged arr

Finding median:
- Finding mid or 2 mid nums:
    - midNumIdx = arr(or arrs.length) / 2 
    - IF idx is float, then process math.floor && math.ceil 

- Length of both arrs = even:
    - Find the 2 mid nums, add them/ 2 , return 
- Len of both arrs = odd:
    - Find the middle num, return 

Edge cases / considerations: 

*/



function median(arr1, arr2) {
    let merged = mergeArrs(arr1, arr2); 

    //find median 
    let midIdx = merged.length / 2; 

    if(midIdx % 1 === 0) { // if whole num => len is even num
        let idx1 = Math.floor(midIdx), 
            idx2 = Math.ceil(midIdx); 

        return (merged[idx1] + merged[idx2] / 2); 
    } else {
        return merged[midIdx];
    }
}

function mergeArrs(arr1, arr2) {

    let arr = []; 

    while(arr1.length > 0 || arr2.length > 0) {
        if(arr[0] > arr2[0]) {
            let num = arr1.shift(); 
            arr.push(num);
        } else {
            let num2 = arr2.shift(); 
            arr.push(num2); 
        }
    }
    // for uneven length arrs 
    if(arr1.length > 0) arr.push(...arr1); 
    if(arr2.length > 0) arr.push(...arr2); 

    return arr; 
}

