/*
Number of Islands

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Input:
11110
11010
11000
00000

Output: 1

Strat: Treat the grid like it's an undirected graph and 
there's an edge between 
adjacent ones. So use depth first search to scan the map. 
If a node has a 1, then trigger a DFS. Every visited node 
during search should be
set at 0 to mark it as visted. Count the number of root nodes 
that trigger DFS. 
This number would be the number of islands, since each DFS 
trigger is an island. 
*/


/*
Nov. Leetcode. 34 minutes. Off by 1 error added 4 mins to time. 

Strat: BFS - use a queue 

1. Iterate thru grid (nested loop: row, col), ID all 1s 
Once we id a 1 = land, then we want to trigger
a BFS the up/down/left/right positions around that
one.  

2. BFS through the grid.
Track a queue (arr) of the ones that are around the original one. 

Loop thru while queue has eles. 
Pop off 1st ele in queue, search around it.
Don't double count ones, change to 0 if we've processed it. 
To find the ones, we want to adjust the indices all around
by 1. We want to be sure we're on grid. 
As we find ones, add to queue. 

3. Increment count of the numOfIslands (variable). 

Space: O(1) bc just tracking variables and an arr. 
Time: O(n^2) because we're doing a nested loop
*/
var numIslands = function(grid) {
    let countOfIslands = 0;
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            let num = grid[row][col];
            
            if(num === "1") {
                bfs(row, col, grid);   
                countOfIslands++;
            }      
        }
    }
    return countOfIslands;
};

function bfs(row, col, grid) {
    let queue = [];
    queue.push([row, col]);
    
    while(queue.length) {
        let [x, y] = queue.pop(); 
        let dirs = [[0, 1], [0, -1], [-1,0], [1,0]];
        grid[x][y] = "0" // we dont want to double count
        
        dirs.forEach(dir => {
            let newX = dir[0] + x,
                newY = dir[1] + y;
            
            if(newX >= 0 && newY >= 0 && newX < grid.length && newY <= grid[0].length && grid[newX][newY] === "1"){
                queue.push([newX, newY]);
            }  
        })   
    }
}




// Attempt #3. Lovely. But do me again 
// BFS solution with a queue of the ones
var numIslands = function(grid) {
    let count = 0;

    if(!grid) return false; 
    
    const bfs = function(row, col) {        
        const queue = [[row,col]];
         
        while(queue.length) {
            let dirs = [[0,-1], [1,0], [0,1], [-1,0]];
            let [x,y] = queue.pop();
            grid[x][y] = "0"
            
            dirs.forEach(dir => {
                let posX = dir[0] + x;
                let posY = dir[1] + y;

                if(posX >= 0 && posY >= 0 &&
                   posX < grid.length &&
                   posY <= grid[0].length &&
                  grid[posX][posY] === "1") {
                    queue.push([posX,posY])
                }
            })
        }
    }
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] == "1") {
                count++;
                bfs(row,col);
            }
        }
    }
    return count;   
}
    

// DFS solution 
var numIslands = function(grid) {
    let count = 0;
    if(!grid) return false;
    
    const dfs = function(row,col) {
        const dirs = [[0,-1], [0,1], [-1,0], [1,0]];
        
        // Looking at the position we're in as 0
        grid[row][col] = "0"
        
        dirs.forEach(dir => {
            let posX = row + dir[0];
            let posY = col + dir[1];
            
            // Check that we're on the grid still and that the pos that we're evaluating is a 1
            if(posX < grid.length && posX >= 0 && 
              posY >= 0 && posY <= grid[0].length && 
               grid[posX][posY] === "1") {
                dfs(posX, posY);
            }
        })
    }
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] === 1) {
                bfs(row,col);
                count++; 
            }
        }
    }
    return count;
}






// Attempt # 2: Did ok, but need to do again
    // Definitely had to look at the solution too much

var numIslands = function(grid) {
    if(!grid) {return 0}
    let islands = 0;
    
    const dfs = function(row, col) {
        const dirs = [[0,-1], [1,0], [0,1], [-1,0]];
        
        grid[row][col] = "0";
        
        dirs.forEach(dir => {
            let posX = row + dir[0]
            let posY = col + dir[1];
            
            // Check that we're on the board. Check if we find a 1. If we do, trigger another dfs to find the other 1s
            if(posX >= 0 && posY >= 0 &&
              posX < grid.length && posY < grid[0].length &&
               grid[posX][posY] === "1") {
                dfs(posX, posY);
            }
        })
    }
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] === "1") {
                dfs(row, col);
                islands += 1;
            }
        }
    }
    return islands;
};










var numIslands = function(grid) {
    
    // Edge: Valid input 
    if(!grid) { return false; }
    
    // Keep track of island count 
    let numIslands = 0;
    
    // Create DFS function:
    let dfs = function(row, col) {
        // Short for left, right, up, and down check 
        let dirs = [[0,-1], [1,0], [0,1], [-1,0]];
    
        // Find our current spot
        grid[row][col] = '0';
    
        // Loop over directions
        dirs.forEach(dir => {
            let posX = row + dir[0];
            let posY = col + dir[1];
        // check if we're on the board and if we find 1, then we do a DFS from there 
            if(posX >= 0 && 
               posX < grid.length &&
               posY >= 0 && 
               posY < grid[0].length && 
               grid[posX][posY] === '1') {
                dfs(posX,posY)
            }
        });
    }
    
    // Loop over the grid's rows and cols, need nested loop
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            // Trigger DFS if we've found a 1 and increment island count
            if(grid[row][col] === '1') {
                numIslands+= 1;
                dfs(row, col);
            }
        }
    }
    
    // We've counted the islands, let's return em
    return numIslands;
};