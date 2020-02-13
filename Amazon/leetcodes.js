/*
Top K Words
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. 
If two words have the same frequency, then the word with the lower alphabetical order comes first.

*/

var topKFrequent = function(words, k) {
    var map = new Map();
    
    // Edge: No words exist
    if(!words) {
        return [];
    }
    
    // Loop through words and create a map to track the # of times word appears
    for(let i = 0; i < words.length; i++) {
        map.set(words[i], (map.get(words[i]) | 0) + 1);
    }
    
    // Sort the map's entries by frequency 
        // And if it's a tie, return the one with lowest alphabet order 1st
    const mapSort = new Map([...map.entries()].sort(function(a,b){
        var temp = b[1] - a[1];
        if(temp == 0) {
            return a[0].localeCompare(b[0]);
        }
        return temp;
    }));
    
    // Make the map of words w/ frequencies into an arr
    var mapIterated = mapSort.entries();
    var i = 0;
    var answer = [];
    
    // We increment. We look at each element until we hit K, the most frequent elements
    while(i < k) {
        answer.push(mapIterated.next().value[0]);
        i++;
    }
    
    return answer;
};


/*
Spiral Matrix II: Practicing again

Given a positive integer n, generate a square matrix 
filled with elements from 1 to n2 in spiral order.

Ex:
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

var generateMatrix = function(n) {
    let matrix = [];
    let rowStart = 0, colStart = 0, rowEnd = n - 1, colEnd = n - 1;
    let num = 1;
    
    // Edge cases:
    if(n === 0) {return []};
    if(n === 1) {return [[1]]};
    
    // Start by making the arrays 
    for(let i = 0; i < n; i++) {matrix.push([])}
    
    // Make a while loop to keep the numbers good (use num since we can't use index)
    while(rowStart <= rowEnd && colStart <= colEnd) {
        // Start w/ 1st row 
        for(let j = colStart; j <= colEnd; j++) {
            matrix[rowStart][j] = num;
            num++;
        }
        rowStart++;
        
        // Right edge with column
        for(let k = rowStart; k <= rowEnd; k++) {
            matrix[k][colEnd] = num;
            num++;
        }
        colEnd--;
        
        // Bottom row going left
        for(let l = colEnd; l >= colStart; l--) {
            matrix[rowEnd][l] = num;
            num++;
        }
        rowEnd--;
        
        // Go up
        for(let m = rowEnd; m >= rowStart; m--) {
            matrix[m][colStart] = num;
            num++;
        }
        colStart++;
    }
    return matrix;
};
