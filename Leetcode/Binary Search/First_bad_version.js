/*
First Bad Version

You are a product manager and currently leading a team to develop 
a new product. Unfortunately, the latest version of your product fails 
the quality check. Since each version is developed based on the previous 
version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the 
first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which will return whether 
version is bad. Implement a function to find the first bad version. You 
should minimize the number of calls to the API.

Example:
Given n = 5, and version = 4 is the first bad version.
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version. 

Given a number. Return this number and any number after as the bad number. 
Bad number = floor. Highest number is the ceiling. 
Anything between and including floor/ ceiling is bad. 

Binary search! 

Time is O(logn) since we're looking at halfing the number 
of elements we look at during each iteration. 


*/

var solution = function(isBadVersion) {
    return function(n) {
        // Binary search
        
        // Make midpoint, start, and end. Needs to be var bc scope
        var start = 1;
        var end = n;
        
        // While start is less than end 
        while(start < end) {    
        let midpoint = Math.floor(start + (end - start)/ 2)
                    
            if(isBadVersion(midpoint)) { // change ceiling to mid. Go left
                end = midpoint;
            } else {  // change floor to mid. Go right
                start = midpoint+1;
            }
        }
        // Return the start of the bad version
        return start;
    };
};
