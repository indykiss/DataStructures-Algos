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