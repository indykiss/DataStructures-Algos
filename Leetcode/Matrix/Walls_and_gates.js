

/*
Walls and Gates

You are given a m x n 2D grid initialized 
with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the 
value 231 - 1 = 2147483647 to represent INF as 
you may assume that the distance to a gate is 
less than 2147483647.

Fill each empty room with the distance to its nearest 
gate. If it is impossible to reach a gate, it should be filled with INF.

Example: 

Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4


Strat:
- If -1, leave it alone. It's a wall. 
- If 0, leave it alone. It's a gate. 
- If INF, trigger a DFS to find the closest 0 that
DOESNT have a -1 in the way. Yeesh. If we 

*/



var wallsAndGates = function(rooms) {
    
    for(let row = 0; row < rooms.length; row++) {
        for(let col = 0; col < rooms[row].length; col++) {
            if(!rooms[row][col]) {
                dfs(row, col, 0);
            }
        }
    }
    
    
    function dfs(row, col, length) {
        // Base cases
        if (length > 0 && rooms[row][col] <= 0)  return 
        if (length <= rooms[row][col]) rooms[row][col] = length 
        else return
        
        // Make sure we're on the board then traverse
        // top 
        if(rooms[row-1]) {
            dfs(row-1, col, length+1);
        }
        
        // bottom
        if(rooms[row+1]) {
            dfs(row+1, col, length+1);
        }
        
        // right
        if(rooms[row][col+1]) {
            dfs(row, col+1, length+1);
        }
        
        // left
        if(rooms[row][col-1]) {
            dfs(row, col-1, length+1)
        }
    }
    
    return rooms;
};

