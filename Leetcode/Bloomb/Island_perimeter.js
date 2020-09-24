

/*
Island Perimeter

You are given row x col grid representing a map 
where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). 
The grid is completely surrounded by water, and there is exactly 
one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't 
connected to the water around the island. One cell is a square 
with side length 1. The grid is rectangular, width and height don't 
exceed 100. Determine the perimeter of the island.

Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Like in a grid, the 1s are things that exist and the 0s are blank spaces. 
Everytime we have an edge with a one and a zero, that's an increment up.
Goal: to look all around as we nav row/ col and increment when we see a 0 or an edge

*/


var islandPerimeter = function(grid) {
    let perimeter = 0;
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] == 1) {
                // Look up. Up is zero or edge
                if (row === 0 || grid[row - 1][col] === 0) {
                    // Top of column or above is a 0
                    perimeter++;
                }
                // Look left
                if (col === 0 || grid[row][col - 1] === 0) {
                    perimeter++
                }            
                // Look right
                if (col === (grid[row].length - 1) || grid[row][col + 1] === 0) {
                    perimeter++
                }
                // Look down
                if (row === (grid.length - 1) || grid[row + 1][col] === 0) {
                    perimeter++
                }       
            }
        }   
    }
    return perimeter;
};

