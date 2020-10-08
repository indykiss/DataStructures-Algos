

/*
Candy Crush

This question is about implementing a basic elimination algorithm for Candy Crush.

Given a 2D integer array board representing the grid of candy, different positive integers board[i][j] represent different types of candies. A value of board[i][j] = 0 represents that the cell at position (i, j) is empty. The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

- If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the same time - these positions become empty.
- After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop outside the top boundary.)
- After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
- If there does not exist more candies that can be crushed (ie. the board is stable), then return the current board.

You need to perform the above rules until the board becomes stable, then return the current board.

[[110,5,112,113,114],
[210,211,5,213,214],
[310,311,3,313,314],
[410,411,412,5,414],
[5,1,512,3,3],
[610,4,1,613,614],
[710,1,2,713,714],
[810,1,2,1,1],
[1,1,2,2,2],
[4,1,4,4,1014]]

The second 1's in the last 4 get gone. And the three 2s in the 3rd position for last few arrs.
And the 2s in the 8th arr. Push the numbers on top down. 

Then look through matrix again. ID that there are is a row of ones in 8th arr. They get
deleted and numbers get pushed down, with zeros being added at the top. 

*/




// Definitely need to do this one again. I didn't do this right at all
// Sept bloomb
var candyCrush = function(board) {
    let isStable = true; 

    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++) {
            if(board[row][col] !== 0) {
                process(board, row, col);
            }
        }
    }

    adjust(board);
    
    if(!isStable) return candyCrush(board);

    return board; 


    // Ya, IDK:  i is row & j is col
    function process(board, i, j){
        let currJ = j;
        //horizontal
        while(currJ < board[0].length - 1 
            && Math.abs(board[i][currJ]) === Math.abs(board[i][currJ + 1])){
            currJ++;
        }        
        
        let currI = i;
        //vertical
        while(currI < board.length - 1 
            && Math.abs(board[currI][j]) === Math.abs(board[currI + 1][j])){
            currI++;
        }
        let countJ = currJ - j + 1;
        
        if(countJ >= 3){
            mark(board, i, j, countJ);
            isStable = false;
        }

        let countI = currI - i + 1;
        if(countI >= 3){
            mark(board, i, j, countI, 'v');
            isStable = false;
        }
    }


    // Mark the board? I have no idea what this is about
    function mark(board, i, j, count, direction = 'h') {
        if(direction === 'h') {
            for(let a = j; a < j+count; a++) {
                board[i][a] = -Math.abs(board[i][a])
            }
        } else {
            for(let b = i; b < i+count; b++) {
                board[b][j] = -Math.abs(board[b][j])
            }
        }
    }

    // Adjust the board
    function adjust(board) {
        for(let row = 0; row < board.length; row++) {
            for(let col = 0; col < board[0].length; col++) {
                // If the element is negative we want to drop it down?
                if(board[row][col] < 0) {
                    drop(board, row, col);
                }
            }
        }
    }


    // Drop the candies down 
    function drop(board, i, j) {
        for(let idx = i; idx > 0; idx--) {
            // move the nums down
            board[idx][j] = board[idx-1][j];
        }
        // Make the top row a 0 at this col
        board[0][j] = 0
    }
}





// This 100% was not close to working:

// var candyCrush = function(board) {
//     let keepCrushing = true;
//     while(keepCrushing) {
//         // Check if there are candies to crush 
//         let crush = new Set();
        
//         for(let row = 0; row < board.length; row++) {
//             for(let col = 0; col < board[0].length; col++) {
//                 // Check if curr num is same as the the ones up and down
//                 if(row > 1 && board[row][col] &&
//                   board[row][col] == board[row-1][col] == board[row-2][board]) {
//                     // Save in the set that these indexes must be crushed
//                     crush.add([row, col], [row-1, col], [row-2, col])
//                 }
//                 // Check if num is the same as the ones left and right 
//                 if(col > 1 && board[row][col] && 
//                    board[row][col] == board[row][col-1] == board[row][col-2]){
//                     // Save in the set that these indexes must be crushed
                    
//                     crush.add([row, col], [row, col-1], [row, col-2])      
//                     // OR crush = crush || {stuff}
//                 }
//             }
//         }
//         // Crush the candies
//         if(crush.size == 0) break;

//         crush.forEach(([i,j]) => {
//             board[i][j] = 0; 
//         }) 
//        //  drop the candies 
//         for(let col = 0; col < board[0].length; col++) {
//             let idx = board.length - 1; 
            
//             for(row = 0; row < board.length; row++) {
//                 if(board[row][col] > 0) {
//                     board[idx][col] = board[row][col]
//                     idx--
//                 }
//             }
//             for(let row = 0; row <= idx+1; row++) {
//                 board[row][col] = 0;
//             }
//         }
//         keepCrushing = false;
//     }
//     return board;
// };