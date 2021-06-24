/*
Zombie in Matrix

Given a 2D grid, each cell is either a zombie 1 or a human 0. Zombies can turn adjacent (up/down/left/right)
human beings into zombies every hour. Find out how many hours does it take to infect all humans?

Rotten oranges! Basically. 

Ex: 
Input:
[[0, 1, 1, 0, 1],
 [0, 1, 0, 1, 0],
 [0, 0, 0, 0, 1],
 [0, 1, 0, 0, 0]]

Output: 2

Explanation:
At the end of the 1st hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [0, 1, 0, 1, 1],
 [1, 1, 1, 0, 1]]

At the end of the 2nd hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1]]


Strategy:
Basically a breadth-first search; using directional variables, keep track of # of zombies, 
human population and a queue.
Once we ID a zombie, we turn all the non-zombies around it into a zombie. 

Edge cases:
Only 1's
Only 0's
null input
1D grid. Empty []

IF input is a list, convert it into a 2D grid instead 

*/


function zombieGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [[1, 0], [0, 1], [0, -1], [-1, 0]];
  const queue = [];

  let hours = 0;
  let population = rows * cols;

  // Find all ze zombies in the grid
  grid.forEach((row, r) => {
    row.forEach((person, c) => {
      if (person === 1) {
        // Add zombie to queue, so can infect the ppl
        queue.push([r, c]);
      }
    });
  });

  // Everyone is infected, we win!
  if (queue.length === population) {
    return hours;
  }

  // How many ppl left?
  population -= queue.length;

  // We still have zombies
  while (queue.length) {
    // No more people
    if (!population) {
      break;
    }

    // Increment hours
    ++hours;

    // Loop through all zombies in queue
    for (let i = queue.length; i > 0; --i) {
      const zombie = queue.shift();

      // Loop through all possible directions
      dirs.forEach(dir => {
        const target = [zombie[0] + dir[0], zombie[1] + dir[1]];

        // If target is human, we turn into zombie
        if (
          target[0] >= 0 &&
          target[0] < rows &&
          target[1] >= 0 &&
          target[1] < cols &&
          grid[target[0]][target[1]] === 0
        ) {
          // Target will try to infect humans at t + 2
          queue.push(target);
          // We have turned a person!
          ++grid[target[0]][target[1]];
          // 1 less person
          --population;
        }
      });
    }
  }

  // We only have zombies now
  return hours;
}








