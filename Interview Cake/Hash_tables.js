// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their 
// first one ends, but they complain that the plane usually lands before they 
// can see the ending. So you're building a feature for choosing two movies 
// whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in mins) 
// and an array of integers movieLengths (in minutes) and returns a boolean 
// saying whether there are two nums in movieLengths whose sum equals flightLength.

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // Determine if two movie runtimes add up to the flight length
    
    // Step 1: Create a set to help us look for secondMovieLength, which we know
        // is flight time minus the movie we'll look at as we loop
    const moviesLengthSeen = new Set()
    
    // Step 2: Loop through the movies, make a firstMovieLength
    for(var i = 0; i < movieLengths.length; i++) {
      const firstMovieLength = movieLengths[i]; 
      
      const secondMovieLength = flightLength - firstMovieLength
      
      // Step 3: Is there a secondMovieLength in the new set?
      if(moviesLengthSeen.has(secondMovieLength)) {
        return true;
      }
      
      // Step 4: Add the new movie length into the set for future checking
      moviesLengthSeen.add(firstMovieLength)
    }

    // We never found a match, so return false
    return false;
  }
  
  // Input: ([2, 2.5, 1.5], 4.5) => True 



// Write an efficient function that checks whether any permutation 
// of an input string is a palindrome.

// Ex:
// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

  function hasPalindromePermutation(theString) {

    // Check if any permutation of the input is a palindrome
      // Treat this like the unpaired parenthesis thing from Dave
        // Keep track of the pairs. Remove as paired up
    
    // Step 1: Track chars we've seen an odd # of times
      // Use a Set not a hash b/c .has/.add/.delete work
    const unpairedChars = new Set();
    
    // Step 2: Loop through theString
    for(let char of theString) {
      // If char has a pair in set, delete it now. Else add it
      if (unpairedChars.has(char)) {
        unpairedChars.delete(char);
      } else {
        unpairedChars.add(char); 
      }
    }
    
    // Step 3: If there's more than 1 unpaired char, 
    // then not a palindrome
    if(unpairedChars.length > 1) {
        return false;
      } else {
        return true;
    }
    
  }
  
  
    // Note to self: 
      // I got this one right without seeing the solution!! 
      // Code was messy but approach was mostly correct and code was ok. 
        // Need to do better with correctly accessing values 
          // w/o looking at solution. Many foundational mistakes there
      // This was my approach: 
        
        function hasPalindromePermutationMe(theString) {
          // Check if any permutation of the input is a palindrome
          // Basic structure:
            // We need to check if a permutation of the input is a palindrome
              // Maybe define a palindrome in a way that's mathmatical
              // Ex: A palindrome will have even number of every character
                // except the middle char
                // OR even number of every char
            // Make a hash to keep track of chars: # of times the char appears
            // If conditions are met, then return true 
            
          // Step 1: Make the hash 
          const charMap = new Set();
          
          // Step 2: Loop through string
          for(let i = 0; i <= theString.length; i++) {
            let theChar = theString[i]
            // Is the char already in the set? If yes, we increment value
            if(charMap.has(theChar)) {
              charMap[theChar]++;
              // If not, we add the value in
            } else {
              charMap << charMap[theChar]
            }
          }
          
          // Step 3: We have hash with chars and # of times they appear
          // Evaluate if all the chars are even or if all but 1
          let theOnlyOneOdd = 0; 
          // We loop through charMap and count the odds
          for(let j = 0; j < charMap.length; j++) {
            if(charMap[j][1] % 2 != 0) {
              theOnlyOneOdd++;
            }
          }
          // If there's 1 odd or 0 odd, we have a palindrome
          // More than 1 odd means no palindrome
          if(theOnlyOneOdd > 1) {
            return false;
          }
          return true;
        }
        
  
  

// Word cloud

// You want to build a word cloud, an infographic where the size of a word 
// corresponds to how often it appears in the body of text.

// To do this, you'll need data. Write code that takes a long string and 
// builds its word cloud data in a map, where the keys are words and the 
// values are the number of times the words occurred.

// Remember to deal with capital words (lower case everything)

// Go over me again. I'm very confused
// I gave up. This one needs to be very specific about upper/lower case
class WordCloudData {
    constructor(inputString) {
      this.wordsToCounts = new Map();
      this.populateWordsToCounts(inputString);
    }
  
    populateWordsToCounts(inputString) {
  
      // Count the frequency of each word
      
      // Step 1: Iterate over every char and splitting
        // words, then adding them to the wordsToCounts map
    }

}
  
  
  