// From Facebook Itself
// Question 1: 2D Spiral Array
// Find the pattern and complete the function:
// int[][] spiral(int n);
// where n is the size of the 2D array.

var spiralizer = function(n) {

}

// I am an unspiralizer solution
// Input:
// [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9,10,11,12]
//   ]
//   Output: [1,2,3,4,8,12,11,10,9,5,6,7]
var spiralOrder = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0)
        return []
    let rowBeg = 0, rowEnd = matrix.length - 1, colBeg = 0, colEnd = matrix[0].length - 1, res = [];
    while (rowBeg <= rowEnd && colBeg <= colEnd) {
        for (let i = colBeg; i <= colEnd; i++)
            res.push(matrix[rowBeg][i])
        rowBeg++;
        for (let i = rowBeg; i <= rowEnd; i++)
            res.push(matrix[i][colEnd])
        colEnd--;
        if (rowBeg <= rowEnd) {
            for (let i = colEnd; i >= colBeg; i--)
            res.push(matrix[rowEnd][i])
            rowEnd--
        }
        if (colBeg <= colEnd) {
            for (let i = rowEnd; i >= rowBeg; i--)
            res.push(matrix[i][colBeg])
            colBeg++
        }
        
    }
    return res;
};

// Question 2: Look and Say
// Implement a function that outputs the Look and Say sequence:
// 1
// 11
// 21
// 1211
// 111221
// 312211
// 13112221
// 1113213211

// Question 3: Edit Distance
// Write a function that returns whether two words are exactly "one edit" away using the following signature:
// bool OneEditApart(string s1, string s2);
// An edit is:
// Inserting one character anywhere in the word (including at the beginning and end)
// Removing one character
// Replacing one character
// Examples:
// OneEditApart("cat", "dog") = false
// OneEditApart("cat", "cats") = true
// OneEditApart("cat", "cut") = true
// OneEditApart("cat", "cast") = true
// OneEditApart("cat", "at") = true

