

/*
Word Search

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially 
adjacent cell, where "adjacent" cells are those horizontally 
or vertically neighboring. The same letter cell may not be used more than once.

Strat: 
- Search through the grid, brute force just nested loop w/ rows & cols, 
- If we find the 1st letter in the word, we want to search up, down, left, right 
for the next letter. 
- Caveat: We can't use the same letter twice, so we'd maybe need to track which direction 
the 1st letter was found. So we don't check there. 
- Then we look around the 2nd letter's up/down/l/r minus 1st letter for the 3rd letter 
- Possible issue: square where we're looking at the 4th letter and accidentlly come across
the 1st letter as an option again. It's not an option.
- continue for all the letters in the word
*/



// Oct, Bloomb


/*
Strat:
- Look through row/col of the board. 
- Find the 1st letter. Look around up, down, left, right for 2nd letter.
- If we find it, keep looking for the next letter. 

- BUT we can't use the same letter twice. So maybe once we've IDed a letter 
as one we've picked, we save that position as a "noGo" position

-Do a DFS if we find the 1st letter

*/



var exist = function(board, word) {
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[row].length; col++) {
         
            // IF we found the 1st letter AND we can dfs to find all the other  
            // letters, then we return true
            if(board[row][col] === word.charAt(0) && dfs(row, col, 0)) {
                return true;
            }
        }
    }
    
    function dfs(row, col, count) {
        // Recursive: base case 
        if(count == word.length) return true;
        
        // Check that we're on the grid
            // Early fail if we're not 
        if(row < 0 || row >= board.length || col < 0 || col >= board[row].length||
          board[row][col] != word.charAt(count)) {
                return false;
        }
        
        // Ok so let's mark the letter we're on as empty, so we don't use it twice
        let temp = board[row][col];
        board[row][col] = "";
        
        let found = dfs(row + 1, col, count + 1) ||
                    dfs(row - 1, col, count + 1) ||
                    dfs(row, col + 1, count + 1) ||
                    dfs(row, col -1, count + 1);
        
        // Add the ele back in where we had as a blank now that we've checked around
        board[row][col] = temp;
        
        return found;
    }
    
    // We never find the word
    return false;
};






var exist = function(board, word) {
    
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[row].length; col++) {
            // If we find 1st letter on the board
                // and we can dfs to find all the other chars
            if(board[row][col] == word.charAt(0)
                && dfs(row, col, 0)) {
                    return true;
            }
        }
    }

    function dfs(row, col, count) {
        // We've found all the chars
        if(count == word.length) {
            return true;
        }
        // Have to make sure we're in the grid always
            // If we're not, hit false
        if(row < 0 || row >= board.length || col < 0 || col >= board[row].length||
          board[row][col] != word.charAt(count)) {
                return false;
        }
        
        // Ok so we're still on the board 
        // Make sure we don't use the same letter twice
        // by marking it as empty. We also need to save it for this DFS
        let temp = board[row][col];
        board[row][col] = " ";

        // From our current spot, can we find remainder of word
            // Recursive action
        let found = dfs(row + 1, col, count + 1) ||
                    dfs(row - 1, col, count + 1) ||
                    dfs(row, col + 1, count + 1) ||
                    dfs(row, col - 1, count + 1);
        
        board[row][col] = temp; // Restore value. Backtracking

        return found; // returns true or false
    }

    // We've looked through the entire board, can't find word
    return false;
};

// Runtime: O(n) where n is the number of cells on the board
// Space: Modifying board in place, but recursive, so it's O(n) where the entire
    // board is one long word so we call at every cell
