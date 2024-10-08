

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




/*
1. Iterate through the board
2. We want to process the board. What's processing? 
3. Processing: IDing instances where there are at least 3 of the same nums
in either horiz & vertical 
4. Once we process the board, we want to adjust the board
5. Adjusting includes dropping nums down and adding zeros to the top
*/


# Python : 

class Solution:
    def candyCrush(self, board: List[List[int]]) -> List[List[int]]:
        r, c = len(board), len(board[0])
        stable = False

        while True:
            stable = True 
            crushing = set()
            
            # check for horizontal crushes 
            for x in range(r):
                for y in range(c-2):
                    if board[x][y] == board[x][y+1] == board[x][y+2] != 0:
                        stable = False
                        crushing.update([(x,y), (x,y+1), (x, y+2)])
            
            # check for vertical crushes 
            for x in range(r-2):
                for y in range(c):
                    if board[x][y] == board[x+1][y] == board[x+2][y] != 0:
                        stable = False
                        crushing.update([(x,y), (x+1,y), (x+2, y)])
                        
            # if no candies were crushed, done
            if stable:
                return board
            
            # crush the candies
            for x,y in crushing:
                board[x][y] = 0
                
            # drop the candies down 
            for y in range(c):
                new_pos = 0
                for x in range(r-1, -1, -1):
                    k = x + new_pos
                    if (x,y) in crushing:
                        new_pos += 1
                    else: 
                        board[k][y] = board[x][y]
                # add zeros at the top of the board
                for x in range(new_pos):
                    board[x][y] = 0
                        
                        
                        
                        






// Just copied. Fuck thhiiss. So tired. Didnt pass time 
// Do again :( 
var candyCrush = function(board) {
    let isBoardStable = true;
    
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++) {
            if(board[row][col] !== 0) {
                process(row, col, board);
            }
        }
    }
    
    adjust(board);
    
    if(!isBoardStable) return candyCrush(board);
    
    return board;
    
    // Process: ID 3 in a row nums 
    function process(row, col, board) {
        let newRow = row, 
            newCol = col; 
        
        // Look vert 
        while(Math.abs(board[row][col]) === Math.abs(board[row+1][col]) 
             && row < board.length - 1) {
            newCol++;
        }
        // Look horiz 
        while(Math.abs(board[row][col]) === Math.abs(board[row][col+1]) 
             && col < board[0].length - 1) {
            newRow++;
        }        
        
        let countRows = newRow - row + 1,
            countCols = newCol - col + 1;
        
        // Check if we have 3 eles that match vertically or horizontally
        if(countRows >= 3) {
            markBoard(board, row, col, countRows, "dropVert");
            isBoardStable = false;
        }
        if(countCols >= 3) {
            markBoard(board, row, col, countCols, "dropHoriz");
            isBoardStable = false;
        }
    }
    
    // Mark Board: ID which nums we want to drop 
    function markBoard(board, row, col, counter, dir) {
        if(dir === "dropVert") {
            for(let marker = col; marker < col + counter; marker++) {
                board[row][marker] = "DROP";
            }
        }
        else {
            for(let marker2 = row; marker2 < row + counter; marker2++) {
                board[marker2][col] = "DROP";
            }
        }
    }
    
    // Adjust: ID the eles in the board that we have to drop 
    function adjust(board) {
        for(let row = 0; row < board.length; row++) {
            for(let col = 0; col < board[0].length; col++) {
                if(board[row][col] === "DROP") {
                    dropNum(board, row, col);
                }
            }
        }
    }
    
    // DropNum: Drops the number down and adds zeros to the top
    
    function dropNum(board, row, col) {
        for(let i = row; i > 0; i--) {
            // move the number down 
            board[i][col] = board[i-1][col];
        }
        board[0][col] = 0;
    }
    
}







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






// Basically following along with the above solution
// Doesnt run but pseudo codes well.ish


/*
1. Iterate through the board
2. We want to process the board. What's processing? 
3. Processing: IDing instances where there are at least 3 of the same nums
in either horiz & vertical 
4. Once we process the board, we want to adjust the board
5. Adjusting includes dropping nums down and adding zeros to the top
*/


var candyCrush = function(board) {
    
    let isBoardStable = true; 
    
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++) {
            // If we're looking at a num
            if(board[row][col] !== 0) {
                process(board, row, col);
            }
        }
    }
    
    adjust(board);
        
    if(!isBoardStable) return candyCrush(board);
    
    return board;
    
    
    // Helper functions: 
    
    function process(board, row, col) {
        let currRow = row,
            currCol = col;
        
        // ID 3 nums vertically: count # of eles that match
        while(Math.abs(board[row][col]) === Math.abs(board[row+1][col])
             && row < board.length - 1) {
            currCol++;
        }
        
        // ID 3 nums horizontally: count # of eles that match
        while(Math.abs(board[row][col]) === Math.abs(board[row][col+1])
             && col < board[0].length - 1) {
            currRow++;
        }
        
        let countRows = currRow - row + 1,
            countCols = currCol - col + 1;
        
        // Check that we have 3 eles that match vertical or horizon
        if(countRows >= 3) {
            markTheBoard(board, row, col, countRows, "leftToRight");
            isBoardStable = false;
        }
        
        if(countCols >= 3) {
            markTheBoard(board, row, col, countCols, "upToDown");          
            isBoardStable = false;
        }    
    }
    
    function markTheBoard(board, row, col, count, direction) {
        if(direction === "leftToRight") {
            for(let marker = col; marker < col + count; marker++) {
                board[row][marker] = "drop" 
            }
        } else {
            for(let marker2 = row; marker2 < row + count; marker2++) {
                board[marker2][col] = "drop" 
            }            
        }    
    }

    function adjust(board) {
        for(let row = 0; row < board.length; row++) {
            for(let col = 0; col < board[0].length; col++) {
                if(board[row][col] === "drop") {
                    dropEle(board, row, col);
                }
            }
        }    
    }
    
    // drop candies down so just deal with vertical moves
    function dropEle(board, row, col) {
        for(let idx = row; idx > 0; idx--) {
            // move the number down
            board[idx][col] = board[idx-1][col];
        }
        // add a zero to the top
        board[0][col] = 0
    }
    
    
    // [6, 0, 8]
    // [1, 0, 3]
    // [4, 0, 5]
    // [4, 7, 9]
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