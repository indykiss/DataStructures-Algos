

/*
Flood Fill 

An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

Example 1:
Input: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: 
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.

Qs: 
- What do we do if the spot is already the new color? 
- Need to make sure at least 1 pixel in image? 

Strategy:
- Goal: We are given a matrix (image), and a "x,y" coordinate.
ID that spot AND the spots that are above, below, left, and right 
of that coordinate, and reassign these spots the new color/ value. 
AND need to change the color of the 3 remaining surrounding pixels for THOSE
adjacent pixels IF the color is the same as the original color. 

Prereqs: Save original color, make a height and width parameter.

1. Make a dfs function that does the following:
    - Makes sure we're in the boundaries
    - Makes sure this spot is the same color as the original color 
2. Reassign that value. 
3. Look around 4 dirs using dfs. 
- Done 

*/

// image = [[1,1,1],[1,1,0],[1,0,1]]
// sr = 1, sc = 1, newColor = 2

var floodFill = function(image, sr, sc, newColor) {
    // I didn't read properly. We ONLY change the pixels who shared the original
    // pixel's color, so we need to save this info. 
    let color = image[sr][sc];

    
    if(color === newColor) return image // check if we're done, 1 test case needed

    let height = image.length;
    let width = image[0].length;

    dfs(sr,sc);
    return image;

    function dfs(r,c){
        // IF we're outside bounds, end it
        if(r < 0 || c < 0 || r === height || c === width) return
        
        // IF the color is different, don't change the color
        if(image[r][c] !== color) return       

        // change da color! 
        image[r][c] = newColor;

        // look up, down, left, right
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

};


