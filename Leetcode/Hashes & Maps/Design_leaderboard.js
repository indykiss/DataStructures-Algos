

/*
Design A Leaderboard

Design a Leaderboard class, which has 3 functions:

- addScore(playerId, score): Update the leaderboard by adding score to the given player's score. If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.

- top(K): Return the score sum of the top K players.

-reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.


Strategy:
- players: {1: totalScore}
- addScore:
    - Check if hash has, if yes then add score to totalScore
    - If doesnt have, add with the score
- top(k)
    - Create an arr of sorted keys of the hash based on the player's totalScores
    - Slice the arr by k so we're filtering down to only look at K top players 
    - Sum int that we add the playerID's totalScore to as we iterate thru the 
    arr 
- reset(ID)
    - edge: person added before? yes can assume 
    - Make hash value for player = 0 

Edge:
- invalid playerID, -34
- invalid score, -124
- invalid addScore, missing ID or score 
- top(k) could have k > this.players.size 
*/


class Leaderboard {
    
    constructor() {
        this.players = {};
    }
    
    addScore(playerID, score) {
        if(this.players[playerID]) {
           this.players[playerID] = this.players[playerID] + score; 
        } else {
            this.players[playerID] = score; 
        }
    }
    
    top(k) {
        let sortedKeys = Object.keys(this.players).sort((a,b) => b-a); // off by 1? 
        
        sortedKeys.slice(0, k); 
        
        let sum = 0; 
        
        for(let player of sortedKeys) {
            let val = this.players[player];
            
            sum += val;
        }
        return sum;
    }
    
    reset(playerID) {
        this.players[playerID] = 0; // delete the player from the hash? 
    }
    
    
}
