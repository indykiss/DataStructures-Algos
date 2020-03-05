/*
Merge intervals

Given a collection of intervals, merge all overlapping intervals.

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
*/


// 2nd try. Easier to get part of the way there, but needed to see the solution. Also not passing an edge case? 
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
