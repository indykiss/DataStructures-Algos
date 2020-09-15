
/*
2D Spiral Array
Find the pattern and complete the function:
int[][] spiral(int n);
where n is the size of the 2D array.

I am an unspiralizer solution
Input:
[
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]
  Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Note: From facebook, not leetcode 
Algoexpert also
*/


// September

// Find the pattern and complete the function where n is the size of the 2D array.length

// Ex: Unspiralizer input:
// [[1,2,3,4],
// [5,6,7,8],
// [9,10,11,12]]

// Output: [1,2,3,4,8,12,11,10,9,5,6,7]


// TREAT IT LIKE A GRID WITH ROWS AND COLS
// TRACK START AND END COLUMN AND ROW AND USE THAT TO PUSH STUFF INTO RES
var unspiralizer = function(arr) {
	let res = [];
	
	let startCol = 0, 
		endCol = arr[0].length -1, 
		startRow = 0, 
		endRow = arr.length - 1;

	while (startRow < endCol && startCol < endCol) {

		// 4 loops and increment our vars as we go 

		// Deal with the first row using col
		for(let col = startCol; col <= endCol; col++) {
			res.push(arr[startRow][col]);
		}
		// Deal with the last eles in the column using row
		for(let row = startRow + 1; row <= endRow; row++) {
			res.push(arr[row][endCol]);
		}

		// Deal with adding in the last eles in the endRow
			// When center of matrix is just 1 row, we don't want to double count it
		for(let col = endCol - 1; col >= startCol; col--) {
			if(startRow == endRow) break;
			res.push(arr[endRow][col]);
		}

		// loop through with the endRow
		for(let row = endRow - 1; row > startRow; row--) {
			res.push([row][startCol]);
		}

		startRow++;
		startCol++;
		endRow--;
		endCol--;
	}
	return res;
}

return unspiralizer([1,2,3,4], [5,6,7,8]);

// How to debug this again? I should learn this on VS code not just like online editors



// July.ish? 

function spiralTraverse(array) {
	const res = [];
  	let startRow = 0,
		endRow = array.length - 1;
	let startCol = 0, 
		endCol = array[0].length - 1;
	
	while(startRow <= endRow && startCol <= endCol) {
		for(let col = startCol; col <= endCol; col++) {
			res.push(array[startRow][col]);
		}
		for(let row = startRow + 1; row <= endRow; row++) {
			res.push(array[row][endCol]);
		}
		// When center of matrix is 1 ROW, not a square
		// We don't want to double count this row
		for(let col = endCol - 1; col >= startCol; col--) {
			if(startRow == endRow) break;
			res.push(array[endRow][col]);
		}
		// When center of matrix is 1 COLUMN, not a square
		// We don't want to double count this col 
		for(let row = endRow - 1; row > startRow; row--) {
			if(startCol == endCol) break;
			res.push(array[row][startCol]);
		}
		
		startRow++;
		endRow--;
		startCol++;
		endCol--;
	}
	
	return res;
}



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