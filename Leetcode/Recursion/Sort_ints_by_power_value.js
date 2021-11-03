
/*
Sort Integers by The Power Value

The power of an integer x is defined as the number of steps needed to 
transform x into 1 using the following steps:

if x is even then x = x / 2
if x is odd then x = 3 * x + 1
For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 
(3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).

Given three integers lo, hi and k. The task is to sort all integers in 
the interval [lo, hi] by the power value in ascending order, if two or 
more integers have the same power value sort them by ascending order.

Return the k-th integer in the range [lo, hi] sorted by the power value.

Notice that for any integer x (lo <= x <= hi) it is guaranteed that x 
will transform into 1 using these steps and that the power of x is will 
fit in 32 bit signed integer.


Input: lo = 12, hi = 15, k = 2
Output: 13
Explanation: The power of 12 is 9 (12 --> 6 --> 3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1)
The power of 13 is 9
The power of 14 is 17
The power of 15 is 17
The interval sorted by the power value [12,13,14,15]. For k = 2 answer is the second element which is 13.
Notice that 12 and 13 have the same power value and we sorted them in ascending order. Same for 14 and 15.


Strategy:
- Dictionary with nums lo -> hi {num : power value}
    - Helper that return power value
- Sort nums by power value in dict
- Return the kth element in that sorted nums arr 
*/


var getKth = function(lo, hi, k) {
    let dict = []; // [[num, powVal]]
    
    for(let i = lo; i <= hi; i++) {
        let powVal = getPowerValue(i, 0); 
        dict.push([i, powVal]); 
    }
    
    // sort our dict by powVal. BUT if two powVals are the same, sort by i by switching 
    let sorted = dict.sort((a,b) => a[1]-b[1]); 
    
    for(let i = 1; i < sorted.length; i++) {
        let prev = sorted[i-1][1], 
            curr = sorted[i][1]; 
        
        if(prev == curr && dict[curr] < dict[prev]) {
            [sorted[i-1], sorted[i]] = [sorted[i], sorted[i-1]];
        }
    }
        
    return sorted[k-1][0];
};


function getPowerValue(num, steps) {
    if(num == 1) return steps;
    
    steps++;
        
    if(num % 2 == 0) {
        return getPowerValue((num/2), steps);
    } else {
        return getPowerValue(((3*num) + 1), steps);
    }
}



