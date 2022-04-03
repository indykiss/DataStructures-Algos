
# Find winner of tic tac toe 

# Given a list of moves, find the tic tac toe winner

# Strategy
# Iterate through the list of moves 
# Make a grid of 3 x 3 with either X or O 
# Iterate through the grid, if we have a X, bfs all around its position to find if there's a hit. Track if we have 3 

class Solution:
    def tictactoe(self, moves: List[List[int]]) -> str:
        grid = [["","",""], ["","",""], ["","",""]]
        x = True
        
        # BFS to find potential matches
        def bfs(row, col, grid, char, matches): 
            dirs = [[0,1], [0,-1], [1,0], [-1,0], [0,-2], [0,2], [2,0], [-2,0]]
            queue = []
            queue.append([row, col])
            while len(queue) > 0:
                x, y = queue.pop(0)
                for d in dirs: 
                    newX = d[0] + x
                    newY = d[1] + y
                    if newX >= 0 and newY >= 0 and newX < 3 and newY < 3: 
                        if grid[newX][newY] == char: 
                            queue.append([newX, newY])
                            matches += 1 
            return matches == 3
                
        # build grid of X & O with the moves
        for move in moves: 
            row = move[0]
            col = move[1]
            if x:
                grid[row][col] = "X"
                x = False
            else: 
                grid[row][col] = "O"
                x = True 
        
        # iterate through this grid to find matches
        row = 0
        col = 0
        while row < 3:
            while col < 3: 
                if grid[row][col] == "X" or grid[row][col] == "O": 
                    isAWin = bfs(row, col, grid, grid[row][col], 1)
                    if isAWin and grid[row][col] == "X": 
                        return "A"
                    elif isAWin and grid[row][col] == "O":
                        return "B"
                col += 1
            row += 1
                    
        return "Draw"
                    
                    
                    
                    
                    
                    
                