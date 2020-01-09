// Where in an array are we rotating? 

// I opened up a dictionary to a page in the middle and started 
// looking for words I didn't know. I put each word I didn't 
// know at increasing indices in a huge array I created in memory. 
// When I reached the end of the dictionary, I started from the beg 
// and did the same thing until I reached the page I started at.

// Now I have an array of words that are mostly alphabetical, except 
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
// which is where I started working from the beginning of the dictionary.
// This array is huge (there are lots of words I don't know) so we want 
// to be efficient here.


// Strat: As the list is mostly ordered, we do a binary 
  // search targeting where the order breaks? 
  // So do the split in half, check where order break is, 
    // split in half thing 

// Iteration of binary search 


function findRotationPoint(words) {

  // Find the rotation point in the vector
  
  // S1: Make ceiling and floor indices
  const firstWord = words[0];
  let floorIndex = 0;
  let ceilingIndex = words.length - 1;
  
  // S2: If there's at least 1 index btwn floor 
    // and ceiling, then our target isn't here
  while(floorIndex + 1 < ceilingIndex) {
    
    // S3: Find the halfway point
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance/2);
    
    // S4: Make a guess index/ value to check out 
    const guessIndex = floorIndex + halfDistance;
    const guessValue = words[guessIndex]; 
    
    
    // S5: If guess is after or is 1st word, let's move 
      // right (move right means move floor)
    if(guessValue >= firstWord) {
      floorIndex = guessIndex 
    } // OR we go left
      else {
        ceilingIndex = guessIndex;  
    }
    
    // S6: If ceiling meets the floor, then we got it!
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
