/*
Number of islands

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example:
Input:
11110
11010
11000
00000

Output: 1

Strategy:
- Treat the grid like it's an undirected graph and there's an edge between 
adjacent ones. So use depth first search to scan the map. 
- If a node has a 1, then trigger a DFS. Every visited node during search should be
set at 0 to mark it as visted. 
- Count the number of root nodes that trigger DFS and return it, since each DFS trigger = island. 

*/

var numIslands = function(grid) {
    if(!grid) {return false;}
    let count = 0;
    let dfs = function(row, col) {
        // Short for left, right, up, and down check 
        let dirs = [[0,-1], [1,0], [0,1], [-1,0]];
        // Find our spot
        grid[row][col] = '0';
    
        // Loop over directions
        dirs.forEach(dir => {
            let posX = row + dir[0];
            let posY = col + dir[1];
        // Check if we're on the board and if we find 1, then we do a DFS from there 
            if(posX >= 0 && posX < grid.length &&
               posY >= 0 && posY < grid[0].length && 
               grid[posX][posY] === '1') {
                dfs(posX,posY)
            }
        });
    }
    
    // Loop over the grid's rows and cols; ID the 1s, then trigger DFS and increment count
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] === '1') {
               count += 1;
               dfs(row, col);
            }
        }
    }
    return count;
}
