// Where in an array are we rotating? 

// I have an array of words that are mostly alphabetical, except 
// they start somewhere in the middle of the alphabet, reach the end, 
// and then start from the beginning of the alphabet. In other words, 
// this is an alphabetically ordered array that has been "rotated." 

// For example:

//   const words = [
//   'ptolemaic',
//   'retrograde',
//   'supplant',
//   'undulate',
//   'xenoepist',
//   'asymptote',  // <-- rotates here!
//   'babka',
//   'banoffee',
//   'engender',
//   'karpatka',
//   'othellolagkage',
// ];

// Write a function for finding the index of the "rotation point," 
// This array is huge (there are lots of words I don't know) so we want 
// to be efficient here.

// Strat: As the list is mostly ordered, we do a binary 
  // search targeting where the order breaks? 
  // So do the split in half, check where order break is, 
    // split in half thing 

// Variation of binary search 


function findRotationPoint(words) {

  // Find the rotation point in the vector
  
  // S1: Make ceiling and floor indices
  const firstWord = words[0];
  let floorIndex = 0;
  let ceilingIndex = words.length - 1;
  
  // S2: If there's at least 1 index btwn floor 
    // and ceiling, then our target isn't here
  while(floorIndex + 1 < ceilingIndex) {
    
    // S3: Find the halfway point and guess index/value
    const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));
    const guessValue = words[guessIndex]
    
    // S4: If guess is after or is 1st word, let's move 
      // right (move right means move floor)
    if(guessValue >= firstWord) {
      floorIndex = guessIndex 
    } // OR we go left
      else {
        ceilingIndex = guessIndex;  
    }
    
    // S5: If ceiling meets the floor, then we got it!
    if(floorIndex + 1 === ceilingIndex) {
      break;
    }
    
  }
  return ceilingIndex;
}

// Since we're cuting the range of indices we look at
// in half, this is O(lg(n)) iterations. Each
// iteration is constant time b/c it's some math and 
// string comparison.
// Since we only save some variables, it's O(1) space.




// Find the duplicate integer in the arr 

// If there's multiple duplicates, just find the 1st. 
// Optimize for space.

// Assumption: There's always at least 1 duplicate

// Find the duplicate integer in the arr 

// If there's multiple duplicates, just find the 1st. 
// Optimize for space.

// Assumption: There's always at least 1 duplicate
    
// Take into account the pigeonhole principle, where 
// if there are n items put into m containers, then at least 1 
// container must have more than 1 item 
  // Ex: there must be at least 2 left or right gloves in a 
  // box of three gloves 
  
// Strat: We do a binary search where we cut the range of possible 
  // answers in half as we do, instead of dividing the arr by half 

// Do me again. I am confuseedddd.

function findRepeat(numbers) {

  // Find a number that appears more than once
  let floor = 1;
  let ceiling = numbers.length - 1;
  
  while(floor < ceiling) {
    
    // We want to divide our total range by upper and lower range
    // such that they don't overlap
    // Lower range is floor to midpoint
    // Upper range is midpoint + 1 to ceiling 
    const midpoint = Math.floor((ceiling - floor) + floor / 2);
    const lowerRangeFloor = floor;
    const lowerRangeCeiling = midpoint; 
    const upperRangeFloor = midpoint + 1;
    const upperRangeCeiling = ceiling;
    
    // ???
    const uniqPossibleIntsInLowerRange = lowerRangeCeiling - 
      lowerRangeFloor + 1;
    
    // Count the numbers in the lower range 
    let numsInLowerRange = 0;
    
    numbers.forEach(num => {

      // Is what we need in the lower range? 
        // between the floor and ceiling
      if(num >= lowerRangeFloor && num <= lowerRangeCeiling) {
        // THEN we do something?? 
        numsInLowerRange += 1; 
      } 
    });
      
      // ???? 
      
    if(numsInLowerRange > uniqPossibleIntsInLowerRange) {
        // We haz a duplicate in the lower range! 
          // so use the same approach on this lower range 
        floor = lowerRangeFloor; 
        ceiling = lowerRangeCeiling;
    } else {
        // We haz a duplicate in the upper range
          // so we make a new floor/ceiling to only look at 
          // the upper range as we do this again
          // cuz we is in a while loop
        floor = upperRangeFloor; 
        ceiling = upperRangeCeiling;
    }
  }
    
  
  // Floor and ceiling have converged! We found da number. It's 
    // on the floor
  return floor; 
}

// ^^ O(1) space BC we are just tracking variables and 
// O(n*lg(n)) space because we're iteratively cutting 
  // the possible answer range in halves


// Easy way to do this, but takes a lot of space:
// O(n) time and O(n) space
// function findRepeat(numbers) {
  
//   // Make a new set
//   // Loop through numbers. Push each num in set
//     // as we iterate. If set already has num, 
//     // then we found it
//   const newSet = new Set();
  
//   for(let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     if(newSet.has(num)) {
//       return num;
//     }
//     newSet.add(num);
//   }
  
//   // If no duplicate:
//   throw new Error("No duplicates");
// }











