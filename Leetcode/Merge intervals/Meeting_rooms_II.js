
/*
Meeting Rooms II

Given an array of meetings times [start, end], 
find how many conference rooms we need. 

April:
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



/*
Oct: FB/ Bloomb, Grokking 

Strat:
Vars/ DS: roomCount (1), earliestEndTime, arrOfEndTimes

0. Sort the intervals by starting time
1. Iterate thru the intervals
2. Prev & curr: overlaps? Yes, increment meeting room. 
        IF our curr start time is equal to OR later than 
        our earliestEndTime, no increment. 
        Change the earliestEndTime and remove that value from 
        arrOfEndTimes. SO we can then update our earliestEndTime to 
        become the minimum in the arrOfEndTimes. 
3. Prev & curr: NO overlap. No need to increment meeting room

Edge cases???
*/



// Correct enough!!! 
// 25 mins 
const Heap = require("./collections/heap");

var minMeetingRooms = function(intervals) {
    
    let count = 0, 
        minHeap = new Heap(null, [], (a,b) => a-b),
            // Space: O(n)
            // time: heapify: O(log(n))
        intervals = intervals.sort((a,b) => a[0] - b[0]); 
            // time: O(n log n)
    
    for(let meeting of intervals) {
        let earliestEnd = minHeap.peek(); // O(1)
        
        if(meeting[0] > earliestEnd) { // > or =?
            minHeap.pop(); 
                // time: O(log n)
            minHeap.push(meeting[1]);
        } else {
            count++;
        }
        
    }
    return count; 
};

/*
Strat for the above, just practicing
Overlap:
- [10, 30] [20, 40]
    10 20 30 
        20 30 40
- [20, 40] [10, 30]
       20 30 40 
    10 20 30 
- [5, 10] [0, 20]
      5 10 
    0 5 10 20
- [0, 20] [5, 10]
    0 10 20
     5 10

Meeting Rooms II

Edge cases:
- We have at least 2 meetings 
- Valid start & end times:
    [30, 20] => invalid 
    Yes possible
- Make sure not ever going < 0 for meeting rooms  

Strategy:
- Var count (int)
- Sort the events by starting point 
- ID IF there is an overlap from previous room 
- Free up rooms when it's done 
    - Track a var that holds the earliest end up from 
    previous rooms. Stack of the earliest ends.
    Min heap of end times. so root is always minimum
    Not the best use of space. Or time: heapift when remove 
    root. => O(log(n))
   Logics:
       -If min heap root is < curr start points, remove root and dont
       implement the conference room. 
       -Add the new end point to minHeap.
       - If root > curr start, increment conference room count 
    

[[0, 30], [5, 10], [15, 20]] => 2 

0-30 : 1 room  5-10 : 2nd room. After end point, we're done 
so opens the room which lets 15-20 meeting use this room 

*/





// Close but no cigar w/o looking at solution 
var minMeetingRooms = function(intervals) {
    
    if(intervals == null || intervals.length == 0) return 0;
    if(intervals.length < 2) return intervals.length;
        
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    
    let roomCount = 1, 
        arrOfEndTimes = [intervals[0][1]];
        
    for(let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0],
            end = intervals[i][1],
            earliestEnd = Math.min(...arrOfEndTimes);
        
        // Checking if we need to increment roomCount
        if(start < earliestEnd) {
            arrOfEndTimes.push(end);
            roomCount++;
        } else {
            // ??????
            // go into the index at earliestEnds & make it equal to curr end 
            arrOfEndTimes[arrOfEndTimes.indexOf(earliestEnd)] = end;
        }
            
    }
    return roomCount;
};




// Grokking's solution, using a min Heap??? 
function min_meeting_rooms(meetings) {
    // sort the meetings by start time
    meetings.sort((a, b) => a.start - b.start);
  
    let minRooms = 0,
        // Use min-heap to store all the active meetings. 
        // This min-heap will also be used to find the active meeting 
        // w/ the smallest end time.
        minHeap = new Heap([], null, ((a, b) => b.end - a.end));


    for (i = 0; i < meetings.length; i++) {
      // remove all the meetings that have ended
      while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
        minHeap.pop();
      }
      // add the current meeting into min_heap
      minHeap.push(meetings[i]);
      // all active meetings are in the min_heap, so we need rooms for all of them.
      minRooms = Math.max(minRooms, minHeap.length);
    }
    return minRooms;
}



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