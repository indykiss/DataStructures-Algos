/* Write a recursive function for generating all permutations of 
an input string. Return them as a set.

Don't worry about time or space complexity, duh. Recurse.

Assumptions: Every character in input string is unique 
Edge: Very short strings? 2-3 

Strat: Break it down into subproblems 
  Get all permutations for all chars minus the last one 
  then put the last char into each possible position.
  Use this approach recursively. 
  Have to use recursion SO need a base case for when to stop
  Must return a set.

Lesson: Break the problem down "by hand" then translate that into code. 
We knew this. But like, more reinforcement. 

*/


function getPermutations(string) {

  // Generate all permutations of the input string
  const permutations = new Set();

  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }
  
  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];
  
  // Recurse: Get all permutations for allCharsExcLast
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);
  
  // Action of putting last char into all positions possible
  // IDK WHAT IS HAPPENING HERE: 
   permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
      for (let position = 0; position <= allCharsExceptLast.length; position++) {
        const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
        permutations.add(permutation);
      }
    });
  return permutations;
}
// cat -> ca, ac, tca, cta, cat, tac, atc, act






