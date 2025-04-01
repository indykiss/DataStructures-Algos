

/*
Algoexpert - Minimum waiting time 

Given an array of query waiting times, find the minimum
time needed. 

Ex:
[1, 4, 5] => 
Minimum waiting time would be 
(0) + (5) + (5 + 1) = 11 

*/


function minimumWaitingTime(queries) {
    queries.sort((a,b) => a - b); 
      
      let total = 0;
  
      for(let i = 0; i < queries.length; i++) {
          let duration = queries[i]
          let queriesLeft = queries.length - (i + 1);
          total += duration * queriesLeft;
      }
      
      return total;
  }