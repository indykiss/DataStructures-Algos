/*
Meeting Rooms 

Given an array of meetings times [start, end], determine
if a person can attend all meetings. 

Strategy:
- Do the meetings overlap
- If not, return true. If they do, return false 

- Sort
    - Sort meetings by start times 
    - If start time of 2nd meeting is before the end 
    time of the 1st meeting, that's a false 
    - Else, true. No meetings overlap
   
Sort -> O(n logn)
*/


var canAttendMeetings = function(intervals) {
    
    if(intervals.length < 2) {return true}
    
    intervals = intervals.sort((a,b) => a[0] - b[0])
    
    for(let i = 1; i < intervals.length; i++) {
        const arr1 = intervals[i-1];
        const arr2 = intervals[i];
        
        if(arr2[0] < arr1[1]) {
            return false;
        }
    }
    return true;
};