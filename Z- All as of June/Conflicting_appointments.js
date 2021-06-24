

/*
Conflicting Appointments

Given an array of intervals representing ‘N’ appointments, 
find out if a person can attend all the appointments.

[[1,4], [2,5], [7,9]]
Output: false
Explanation: Since [1,4] and [2,5] overlap, 
a person cannot attend both of these appointments.

Strat:
Note. IF there are any overlapping intervals
return false. 

1. Sort the intervals by starting times 
2. Iterate thru and check if the curr arr overlaps
the prev arr. If so, return false. 
3. If we iterate thru all and no false, return true. 

*/


// Grokking. Easy. 15 mins, Oct Bloomb/ FB
function conflictingAppointments(intervals) {
    intervals = intervals.sort((a,b)=> a[0] - b[0]);

    for(let idx = 1; idx < intervals.length; idx++) {
        let prev = intervals[idx-1],
            curr = intervals[idx];
        // IDs overlapping appointments
        if(curr[0] < prev[1]) {
            return false;
        }
    }
    return true;
}
// O(n * logn): time sorting. O(1) space? maybe O(n) worst case bc sort?


