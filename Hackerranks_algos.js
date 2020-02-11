

// Count how many matching pairs of integers there are in an arr:

/*
Strategy:
Time: Must loop no matter what so best case time is O(n), try to make this worst case

Option 1:
- Loop
- Create a hash that tracks # of times a number has been seen
- Add the even #s in hash values (loop?)
- % by 2 to get the number of pairs

Option 2: 
Another strat (maybe more efficient space/time): 
- Count pairs as we loop
- Keep track of unpaired #s in stacks
- Once paired, pop off from unpaired

Option 3:
- Sort the arr
- Loop, if the next number is the same as ele
- Increment count and skip the next num
*/

// Sample input: [10, 10, 1, 2, 1]
    // Answer: 2
function numberPairs(n, ar) {
    let pairs = 0;
    ar = ar.sort();

    for(let i =0; i < ar.length; i++) {
        if(ar[i] === ar[i+1]) {
            pairs += 1;
            i = i + 1;
        }
    }
    return pairs;
}
// Using sort is very slow though ^





// Counting valleys on a hike
/*
Strategy:
- Keep track of 3 vars:
    - Height of path
    - Heights of path at each step
    - Num of valleys
        - A valley is a sequence of steps all of which are below 0
        - Once height is above 0, entering a mountain
- Loop through steps. If D, add 1 from height. If U, minus 1 to height. Add height to array of heights.
- Loop through heights and ID where heights go from 0 to -1, start of valley && where heights goes -1 to 0. 
    - OR just track where -1 goes to 0. That's the definition of leaving a valley

Time/ Space:
- Best case: O(n) time bc must see everything at least once
    - Maybe in actual processing time a little more bc we use two loops?
- Space: O(n) bc we create an arr of heights, equal space as input
*/

// Sample input: 8, UDDDUDUU => 1 valley
    // [1,0,-1,-2,-1,-2,-1,0]
function countingValleys(n, s) {
    let heights = [];
    let height = 0;
    let numValleys = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "D") {
            height -= 1;
        }
        if(s[i] === "U") {
            height += 1;
        }
        heights.push(height);
    }

    for(let j = 0; j < heights.length; j++) {
        if(heights[j] === -1 && heights[j+1] === 0) {
            numValleys += 1;
        }
    }
    return numValleys;
}


