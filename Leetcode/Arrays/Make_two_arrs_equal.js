


/*
Make Two Arrays Equal by Reversing Sub-arrays

Given two integer arrays of equal length, target and arr.

In one step, you can select any non-empty sub-array of arr 
and reverse it. You are allowed to make any number of steps.

Return True if you can make arr equal to target, or False otherwise.

target = [1,2,3,4], arr = [2,4,1,3]
Output: true

You can follow the next steps to convert arr to target:
1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not 
the only way to do so.
*/

// [1, 2, 3, 4, 5]
// [2, 1, 4, 3, 5]


// Doesnt reverse anything. But passes tests so whatever
var canBeEqual = function(target, arr) {

    let mapArr = new Map(), 
        marTarget = new Map();
    
    let map1 = mapMaker(mapArr, arr),
        map2 = mapMaker(marTarget, target);
    
    for(let num of arr) {
        if(map1.get(num) !== map2.get(num)) {
            return false;
        }
    }
    return true;
} 

function mapMaker(map, arr) {
    for(let num of arr) {
        if(map.has(num)) {
            let val = map.get(num);
            map.set(num, val + 1);
        } else {
            map.set(num, 1);
        }
    }
    return map;
}

// Technically could work but doesnt reverse subarrs:
var canBeEqual = function(target, arr) {
    let arrSorted = arr.sort(); // o(n * log n)
    let targetSorted = target.sort();
    
    for(let i = 0; i < arrSorted.length; i++) {
        if(targetSorted[i] !== arrSorted[i]) {
            return false;
        }
    }
    return true;
};


// Super wrong: 
// var canBeEqual = function(target, arr) {
//     let subsets = [[arr[0]]],
//         start = 0,
//         end = start + 1;
    
//     while(start < arr.length && end < arr.length) {
//         let num = arr[end];
        
//         for(let set of subsets) {
//             let newSubset = [...set, num],
//                 revSubset = newSubset.reverse(),
//                 restOfArr = arr.slice(end),
//                 revArr = [newSubset, ...restOfArr];
            
//             if(revArr === target) {
//                 return true;                
//             }
//         }
//         end++; 
        
//         if(end === arr.length) {
//             start++;
//         }
//     }
//     return false;
// };



