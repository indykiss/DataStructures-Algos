/*
Given a list of schedules, provide a list of times that are 
available for a meeting

Schedules are between 0 - 23 and are whole numbers only.
Example input: exInput

Example Output:
[ [0,4],[11,12],[16,23] ] 

Strategy: Find the non-overlaps 
- If overlap, then the entire minimum start and max end 
time between the 2 people are not avails 

Qs:
- Can we assume everyone's avails are given in order? Let's say yes
- Possible 0 times available for meeting 

*/
const exInput = [
    [
      [4, 5],
      [6, 10],
      [12, 14]
    ],
    [
      [4, 5],
      [5, 9],
      [13, 16]
    ],
    [[11, 17]],
    [[20,21]]
  ];
  
  // merge all overlaps 
  // loop thru final list of overlaps, find
  // non-overlaps
  
  //this isn't working either
  function findAvails(input) {
    let hours = Array(24).fill(0);
  
    for(let i = 0; i < input.length; i++) {
      let sched = input[i];
      for(let j = 0; j < input[i].length; j++) {
        let meeting = input[i][j],
            start = meeting[0],
            end = meeting[1]; 
  
        for(let k = start; k <= end; k++) {
          if(hours[k] === 0) hours[k] = 1; 
        }
      }
    }
    
    let avails = []; 
  
    for(let m = 0; m < hours.length; m++) {
      if(hours[m] === 0) avails.push(m);
    }
    return avails;
  }
  
  
  // // merge meetings simple 
  // [[1,2], [3,4], [4, 7]] 
  // => [[1,2], [3,7]
  // input.sort((a,b) => a-b);  
  // for(let i = 1; i <= input.length; i++) {
  //   let prev = input[i-1], 
  //       curr = input[i]; 
    
  //   if(prev[1] <= curr[0]) {
  //     let x = Math.min(curr[0], prev[0]), 
  //         y = Math.max(curr[1], prev[1]);
  //     input[i] = [x,y];
  //     input.splice(i-1, 1); // remove the prev 
  //     i--; 
  //   }
  // }
  // return input;
  
  
  console.log(findAvails(exInput))