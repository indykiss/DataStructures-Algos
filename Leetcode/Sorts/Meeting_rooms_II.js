
/*
Meeting Rooms II

Given an array of meetings times [start, end], 
find how many conference rooms we need. 

Strategy:
- Sort the meetings by start time 
- We want to track the end times of the meetings 
- We want to check if the start time of a meeting is less than the earliest ending meeting 
    - We do this to check if we need another meeting room. We just say the earliest 
    possible, because it's an easy way to see if a room is available. 
    - IF start < earliest, we want to add this end time into the array of end times that 
    we're tracking. Goal is to return the endTimes array. 
- IF we're good and start time is NOT before the earliest end time, we need to do this
            earliestEnds[earliestEnds.indexOf(earliest)] = end
    Where we remove the earliest end time. Because we just nabbed that meeting room. 
    And we want to insert the current new end into the array and replace the earliest.
- Return the length of the endTimes array
*/




var minMeetingRooms = function(intervals) {
    let earliestEnds = [];
    if(intervals == null || intervals.length == 0) {return 0}
    if(intervals.length < 2) {return 1}

    intervals = intervals.sort((a,b) => a[0] - b[0])
    
    earliestEnds.push(intervals[0][1]);
    
    for(let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1]
        let earliest = Math.min(...earliestEnds);
        
        if(start < earliest) {
            earliestEnds.push(end); 
        } else {
            earliestEnds[earliestEnds.indexOf(earliest)] = end
        }

    }
    return earliestEnds.length;
};








var minMeetingRooms = function(intervals) {
    
    // Edge
    if(intervals == null || intervals.length == 0) {return 0}
    if(intervals.length < 2) {return 1}

    // S1: Sort meetings by start time 
    intervals = intervals.sort((a,b) => a[0] - b[0])
    
    // S2: We want to look at the ends times. Add the 1st one so we can compare the next one to this 
    let earliestEnds = [intervals[0][1]];
    
    // S3: Loop through the arr of meetings 
    for(let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1]; 
        
        // S4: What is the earliest room avail
        let earliest = Math.min(...earliestEnds);
        
        // S5: IF this room's start time is before the earliest end time, then we need to add this end into the arr of ends
        if(start < earliest) {
            earliestEnds.push(end); 
        } else {
            // If we're good, we're just going to go into the index at earliestEnds and make it equal to the current end 
            earliestEnds[earliestEnds.indexOf(earliest)] = end
        }
    }
    return earliestEnds.length;
};