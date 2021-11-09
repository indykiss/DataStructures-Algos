

# Basic object oriented design for building a chess board:

Questions to consider:
- Player 1 vs Player 2 or AI vs Player?
- Building a login to track a player's score?  
    - For simplicity, 1 win = 1 point. 1 lose = -1 point.
- Do we want a GUI? Can we do a simple terminal based game? 

Overall design: 
- Game:
    - whitePlayer, blackPlayer 
    - who's turn it is 
    - whitePlayer's moves
    - whitePlayer piecesLeft OR piecesTaken
    - blackPlayer's moves
    - blackPlayer piecesLeft OR piecesTaken
- Board:
    - N x N grid that initializes with pieces at certain places. Empty spaces too
    - Hash table that tracks piece: movement pattern
        - Ex: Bishops can go only diagonal. Need to make sure any
        movements are valid given board rules 
- Movement 
    - Take 2 inputs: what piece needs to get moved and where player wants to move it. 
        - Need to check if move is valid, if so, move piece, if not, throw error 
    - Takes pieces if valid and other player's piece was there 
- Piece 
    - name: bishop || queen || king || pawn 
        - potentially each piece is it's own class 
    - dirs from current position that it can go. arr of dirs 
    - color
- Winning
    - Function or a class. Check if player has checkMate
        - Every step check for checkMate 
        - If so, game is over. Player who had checkMate, wins 

Non-functional requirements:
- Game can't be laggy 
- Game has to be accurate 
- Can keep client separate from UI if using a GUI to save time 