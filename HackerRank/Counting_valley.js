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

// Complete the countingValleys function below.
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
