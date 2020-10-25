
/*
Insert Interval

Given a set of non-overlapping intervals, insert a new interval into 
the intervals (merge if necessary).

You may assume that the intervals were initially sorted according 
to their start times.

Intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
Output: [[1,3], [4,12]]
Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], 
we merged them into [4,12].


Strat: Merging intervals
Insert then merge? 
*/




var insert = function(intervals, newInterval) {
    if(intervals.length === 0) return [newInterval];
    
    let result = [],
        flag = 0,
        i;

    for (i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        // Our new interval does not overlap curr 
        if (newInterval[0] > interval[1]){
            result.push(interval);
        // New interval DOES overlap 
        } else if (newInterval[1] < interval[0]){
            result.push(newInterval);
            flag = 1;
            break;
        // New interval 
        } else {
            newInterval[0] = Math.min(newInterval[0], interval[0]);
            newInterval[1] = Math.max(newInterval[1], interval[1]);
        }
    }

    if (flag === 0) {
        result.push(newInterval);
        return result;
    } else {
        return result.concat(intervals.splice(i));
    }

};

