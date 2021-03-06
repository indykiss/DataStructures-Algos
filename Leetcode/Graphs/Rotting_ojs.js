/*
Rotting Oranges

In an input grid, each cell can have one of 3 values:
    the value 0 representing an empty cell;
    the value 1 representing a fresh orange;
    the value 2 representing a rotten orange.
    
Every minute, any fresh orange (1) that's adjacent to a rotten orange (2)
becomes rotten. Return how long is needed for all fresh oranges become rotten. 

Strat: Undirected, unweighted graph.
Use a BFS to seek out the adjacent fresh oranges, triggered whenever we see a rotten oj.  
Keep a counter for every time BFS was called. Increment. Return count at the end. 
*/


// Attempt #3: Closer but do me again 
var orangesRotting = function(grid) {
    
    if(!grid) {return false;}
    
    let count = 0; 
    let rotten = [];
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] === 2) {
               rotten.push([row, col])
            }
        }
    }    
    
    while(grid) {
        rotten = bfs(grid, rotten);
        if(rotten.length === 0) {
            break;
        }
        count += 1
    }
    
    if(isImpossible(grid)) return -1

    return count;
} 

const bfs = function(grid, rotten) {
    const queue = [];
    const row = grid.length - 1;
    const col = grid[0].length - 1;
        
    while(rotten.length > 0) {  
        let oj = rotten.shift();
        let x = oj[0];
        let y = oj[1];
            
        // Look up
        if(grid[x][y-1] == 1 && y > 0) {
            queue.push([x,y-1]);
            grid[x][y-1] = 2;
        }
        // Look down
        if(grid[x][y+1] == 1 && y < col) {
            queue.push([x,y+1]);   
            grid[x][y+1] = 2;
        }
        // Look left 
        if(x > 0 && grid[x-1][y] == 1) {
            queue.push([x-1,y]);
            grid[x-1][y] = 2;
        }
        // Look right 
        if(x < row && grid[x+1][y] == 1) {
            queue.push([x+1,y]);
            grid[x+1][y] = 2;
        }
    }
    return queue;
}

const isImpossible = function(grid) {
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] === 1) {
                return true;
            }
        }
    }
    return false;
}




// Attempt #2: Amazon loves me. Do me again 

var orangesRotting = function(grid) {
    
    if(!grid) {return false};
    
    let count = 0;
    let rotten = [];
    
    // Populates the queue with the rotten oranges' positions
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] === 2) {
                rotten.push([row, col])
            }
        }
    }
    // Walk through the grid calling BFS on every item 
    while(grid) {
        rotten = bfs(grid, rotten); 
        if(rotten.length === 0) {
            break;
        }
        count += 1;
    }
    // Checks if there's an orange that's impossible to make rotten. AFTER we are done with our breadth first search
    if(isImpossible(grid)) return -1 
    
    return count;
};


const bfs = function(grid, rotten) {
    const queue = [];
    const row = grid.length - 1;
    const col = grid[0].length - 1;
    
    while(rotten.length > 0) {
        const first = rotten.shift();
        const x = first[0];
        const y = first[1];
        
        // Look left
        if(x > 0 && grid[x-1][y] == 1) {
            queue.push([x-1, y]);
            grid[x-1][y] = 2;
        }        
        // Look right
        if(x < row && grid[x+1][y] == 1) {
            queue.push([x+1, y]);
            grid[x+1][y] = 2; 
        }
        // Look up
        if(y > 0 && grid[x][y-1] == 1) {
            queue.push([x, y-1]);
            grid[x][y-1] = 2; 
        }
        // Look down 
        if(y < col && grid[x][y+1] == 1) {
            queue.push([x, y+1]);
            grid[x][y+1] = 2; 
        }
    }
    return queue;
}


const isImpossible = function(grid) {
    // IF at the end of the bfs, if we have any oranges left
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                return true; 
            }
        }
    }
    // IF there's a fresh orange that we can't make bad 
    return false;
}










// Attempt #1

var orangesRotting = function(grid) {
    
    // Edge: Valid input
    if(!grid) {return false;}
    
    // ID a rotten orange and create timer
    let rotten = findRottenOJ(grid);
    let timer = 0;
    
    // Make a loop through the oranges
        // If I find a rotten orange, I trigger BFS
        // Make the 1s rotten AND increment timer 
    while(grid) {
        rotten = bfs(grid, rotten);
        if(rotten.length === 0) {
            // No more rotten? We're done. break the infinite loop
            break;
        }
        timer += 1;
    }
    
    if (isImpossible(grid)) {return -1}
    
    return timer;
};

// Build a bfs. We're looking to trigger a bfs when we hit a rotten orange
const bfs = function(grid, rotten) {
    const neighbors = [];
    const row = grid.length - 1;
    const col = grid[0].length - 1;
    while(rotten.length > 0) {
        const coords = rotten.shift();
        const x = coords[0];
        const y = coords[1];
        
        // We are targeting the rotten orange AND NOW WE WANT TO MAKE 
        // EVERYTHING AROUND IT ROTTEN. 
        // SO we do 4 if statements checking for fresh oranges around the rotten one
        // We keep track of these fuckers AND MAKE EM BAD :) 
        // Gotcha.
        if(x > 0 && grid[x-1][y] == 1) {
            neighbors.push([x-1, y]);
            grid[x-1][y] = 2;
        }
        if(y > 0 && grid[x][y-1] == 1) {
            neighbors.push([x, y-1]);
            grid[x][y-1] = 2
        }
        if(x < row && grid[x+1][y] == 1) {
            neighbors.push([x+1, y]);
            grid[x+1][y] = 2;
        }
        if(y < col && grid[x][y+1] == 1) {
            neighbors.push([x, y+1]);
            grid[x][y+1] = 2;
        }
    }
    return neighbors;
}


const isImpossible = function(grid) {
    // If can't return the minimum # of minutes for 
        // all oranges to turn rotten 
    // Loop through the grid's rows, then each column, to access
        // each ele. If rotten or empty, can't turn it
        // If a fresh orange, it is possible to turn it bad 
        
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] == 1) {
                return true;
            }
        }
    }
    return false;
}

// Helper that gives us the location of rotten oranges
const findRottenOJ = function(grid) {
    const rotten = [];
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] == 2) { 
                rotten.push([row, col])
            }
        }
    }
    return rotten;
}