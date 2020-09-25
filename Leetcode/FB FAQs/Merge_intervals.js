/*
Merge intervals

Given a collection of intervals, merge all overlapping intervals.

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].


Sort! Takes O(n logn)
*/


// Bloomb practice. Try again. I forgot the last parts 


var merge = function(intervals) {
    let res = [];
    
    intervals = intervals.sort((a,b) => a[0] - b[0]);     // log(n * log n)

    for(let i = 1; i < intervals.length; i++) {
        let curr = intervals[i],
            prev = intervals[i-1];
        
        if(curr[0] <= prev[1]) {
            let earliestStart = Math.min(curr[0], prev[0])
            let latestEnd = Math.max(curr[1], prev[1])
            intervals[i] = [earliestStart, latestEnd];
            /* Remove the previous because we've made a copy
                then go backwards so we can include this new arr
                in our next evaluation */
            intervals.splice(i-1, 1);
            i = i-1;
        }
    }
    return intervals;
}



// Attempt #3
var merge = function(intervals) {
    if(intervals.length < 2) return intervals;
    
    intervals = intervals.sort((a,b) => a[0] - b[0])
    
    for(let i = 1; i < intervals.length; i++) {
        let prev = intervals[i-1];
        let curr = intervals[i];

        if(prev[1] >= curr[0]) {
            let x = Math.min(prev[0], curr[0]);
            let y = Math.max(prev[1], curr[1]);
            
            intervals[i] = [x,y];
            // Remove prev bc we've merged it with curr 
            intervals.splice(i-1,1)
            // Go back one step to make sure that we're looking at all the arrs in the intervals 
            i = i - 1;
        }
    }
    return intervals;
} 




















// Attempt #3 timed for 15 minutes. CLOSE but WRONG  
// BUT very close. I understood the problem quickly. 
// But need to execute interval merge better
var merge = function(intervals) {
    // Edge case
    if(intervals.length < 2) {return intervals}
    // S1: Sort the arrs such that the 1st ele is smaller 
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    // S2: Loop through, start at 1 and look at last arr
    for(var i = 1; i < intervals.length; i++) {
        let arr1 = intervals[i-1];
        let arr2 = intervals[i];
        // If arr1's 2nd ele < arr2's 2nd ele. YES MERGE
        if(arr2[0] <= arr1[1]) {
            intervals[i] = [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])]
            intervals.splice(i - 1, i);
            i = i -1;
        }
    }
    return intervals;
}


// CORRECT ANSWER. DO IT THIS WAY:
var merge = function(intervals) {
    // Edge case: It's like 1 arr
    if(intervals.length < 2) {
        return intervals;
    }
    // S1: Sort it to make comparison easier
    intervals = intervals.sort((a,b) => a[0] - b[0])
    // S2: Loop though intervals and ID the eles needed 
    for(var i = 1; i < intervals.length; i++) {
        let previousArr = intervals[i-1]
        let currentArr = intervals[i]
        // S3: If floor of currentArr is in previous arr, push merged arr in result
        if(currentArr[0] <= previousArr[1]) {
          intervals[i] = [Math.min(previousArr[0],currentArr[0]), Math.max(previousArr[1],currentArr[1])] 
          intervals.splice(i-1, 1)            
          i = i - 1;  // After merge, the arr becomes shorter
        }
    }
    // S4: Return that baby
    return intervals;
};







// 2nd try. WRONG BUT ALMOST 
// Easier to get part of the way there, but needed to see the solution. 
var merge = function(intervals) {
    
    if(intervals.length < 2) {return intervals}
    
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    
    for(var i = 1; i < intervals.length; i++) {
        let firstArr = intervals[i - 1];
        let secondArr = intervals[i];
        
        if(secondArr[0] <= firstArr[1]) {
            intervals[i] = [Math.min(firstArr[0], secondArr[0]), Math.max(firstArr[1], secondArr[1])]
            intervals.splice(i - 1, i);
            i = i -1;
        }
    }
    return intervals;
}




/*
Attempt # 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

LOTS OF EDGE CASES. Elements aren't sorted. Merging sometimes means 
an interval gets eaten. Intervals can only be 1. Etc. 

This is the iCal "when are people open" algo.
Except that used hashes instead of arrs. 

Can't assume that all arrays are already sorted. 
Can assume always 2 eles in an interval. 

Strat: Compare 1st arr and 2nd arr intervals[0] & [1]
    if intervals[1][0] is < intervals[0][1] then merge 
    merge being pushing into new arr an arr of int[0][0] and int[1,1]
    if not, leave array alone 

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Lesson learned: I was REALLY close, but I was hardcoding the 
"if this element is less, it goes here but if the other one is less, it goes here"
When I JUST NEEDED TO DO MATH.MIN AND MATH.MAX I need to remember they exist. So useful. 
BUT got everything else right! The strategy was good! 
But the if/else if/else was too much. Lots of edge cases there. 
*/ 

var merge = function(intervals) {
    // Edge case: It's like 1 arr
    if(intervals.length < 2) {
        return intervals;
    }
    // S1: Sort it to make comparison easier
    intervals = intervals.sort((a,b) => a[0] - b[0])
    
    // S2: Loop though intervals and ID the eles needed 
    for(var i = 1; i < intervals.length; i++) {
        let previousArr = intervals[i-1]
        let currentArr = intervals[i]
        
        // S3: If floor of currentArr is in previous arr, push merged arr in result
        if(currentArr[0] <= previousArr[1]) {
          intervals[i] = [Math.min(previousArr[0],currentArr[0]), Math.max(previousArr[1],currentArr[1])] 
          intervals.splice(i-1, 1)            
          i = i - 1;  // After merge, the arr becomes shorter
        }
    }
    // S4: Return that baby
    return intervals;
};