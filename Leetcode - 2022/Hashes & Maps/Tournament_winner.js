

/*
Algoexpert, not LC

Find the tournament winner. 
You're given a set of competitions with each 
ith element being [homeTeam, awayTeam], and the 
corresponding results. 

Where results[i] = 1 means the home team at 
competitions[i] won. 0 means the away team won. 


Strategy:
- Hash table => name : score
- Iterate thru competitions, 
adding score to the winner 
	- Using the info from results[i]

- Iterate thru hash table, find the largest num
- Return the name of the winner 

Edge:
- NO ties. Always 1 winner 
- Name of teams always unique? 
- Time: O(n) at least
- Space: O(n) 
*/

function tournamentWinner(competitions, results) {
	let scoreboard = {},
			possibleWinner = "",
			winningScore = 0; 
	
	for(let i = 0; i < competitions.length; i++) {
		let homeTeam = competitions[i][0],
				awayTeam = competitions[i][1];
		// homeTeam won
		if(results[i] === 1) {
			if(scoreboard[homeTeam]) {
				scoreboard[homeTeam] += 3; 
			} else {
				scoreboard[homeTeam] = 3; 
			}
		} else { // awayTeam won
				if(scoreboard[awayTeam]) {
					scoreboard[awayTeam] += 3; 
				} else {
					scoreboard[awayTeam] = 3; 
				}
		}
		
		// update the possible winner
		if(scoreboard[homeTeam] > winningScore) {
			possibleWinner = homeTeam
			winningScore = scoreboard[homeTeam]; 
		}
		if(scoreboard[awayTeam] > winningScore) {
			possibleWinner = awayTeam
			winningScore = scoreboard[awayTeam]; 
		}
	}
	
	return possibleWinner; 
	
}


