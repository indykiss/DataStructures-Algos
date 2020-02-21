/*
Jumping on numbers.
0 is safe, 1 is dangerous.
Return the minimum num of jumps needed to go from the begininng 
to the end of the input arr of 0 and 1. 
Can jump 0 times (0->1) or 1 time(0->2)
First and last ele will be 0
If:
0,0,0 -> skip 2nd ele
0,1,0 -> skip 2nd ele
0,0,1 -> no skipping bc we need to skip next

Strategy: 
- Loop through cloud
- See above if statements for skip logic
- Count each time we iterate 
*/

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jumps = -1;

    for(let i = 0; i < c.length; i++) {
        if(i < c.length - 2 && c[i+2] == 0){
            i++;
        }
        jumps++
    }
    return jumps;
}
