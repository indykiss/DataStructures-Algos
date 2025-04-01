


/*
Algoexpert

Given a matrix of 1s and 0s where continous 1s == a river, 
return an arr of length of rivers in the matrix. 

Strategy:
- Traverse the matrix:
	- loop thru row, loop thru cols
	- If we find river, trigger breadth first search
	around river looking for more river 
	- track river size w/ var 
- separate funct: BFS
	- look around NSEW
		- make sure we're still on the board 
		- if we find a 1 that we havent seen before
		increment count, add this position to queue to look
		around it too 
		- make curr pos that we've just now looked at become 
		X so we don't look at it again later

*/



// not correct but vaguely close maybe? idk 
function riverSizes(matrix) {
	let sizes = [];
	for(let row = 0; row < matrix.length; row++) {
		for(let col = 0; col < matrix[row].length; col++) {
			if(matrix[row][col] === "1") {
				bfs(row, col, sizes) // bfs(row, col, countOfRiver?) 
			}
		}
	}
	return sizes; 
}

function bfs(row, col, sizes) {
		let dirs = [[0,1], [0,-1], [-1,0], [1,0]],
				queue = [],
				currRiverSize = 0; 
		
		queue.push([row, col]); 
		while(queue.length > 0) {
			let pos = queue.shift(); 
			let x = pos[0], 
					y = pos[1]; 
			dirs.forEach(dir => {
				let newX = x + dir[0], 
						newY = y + dir[1];
				if(newX >= 0 && newY >= 0 && 
					newX <= matrix.length - 1 && 
					newY <= matrix[newX].length - 1) 
				{ // off by 1 error?
						if(matrix[newX][newY] === "1") {
							count++; 
                            queue.push([newX, newY]);
                            matrix[newX][newY] = "X"; // mark off
						}
				}
			})
			// where to add count to sizes arr??
		}
		
		if(currRiverSize > 0) sizes.push(currRiverSize);
		
	}

// Do not edit the line below.
exports.riverSizes = riverSizes;
