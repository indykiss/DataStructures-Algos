
/*
Random Pick with Weight

You are given an array of positive integers w where w[i] describes the weight of ith index (0-indexed).

We need to call the function pickIndex() which randomly returns an integer in the range [0, w.length - 1]. 

pickIndex() should return the integer proportional to its weight in the w array. 

For example, for w = [1, 3], the probability of picking the index 0 is 1 / (1 + 3) = 0.25 (i.e 25%) while the probability of picking the index 1 is 3 / (1 + 3) = 0.75 (i.e 75%).

More formally, the probability of picking index i is w[i] / sum(w).


Actual Question:
- Probablity of pick a num is its index / sum of weights arr
- Make the weights map + pickIndex
*/



// Basically you make a map, where you set the weighted possiblity, and the index.
// You then pick a random number, and interate over your weighted values till you cross it and return that index.


// I just copied this. IDK. Do it again 
class Solution {
    constructor(w) {
        this.weights = new Map();  // {sum at i}
        this.sum = 0;
        
        for(let i = 0; i < w.length; i++) {
            this.sum += w[i];
            this.weights.set(this.sum, i); 
        }
    }
    
    pickIndex() {
        let index = Math.floor(Math.random() * this.sum);
        
        for(let key of this.weights.keys()) {
            if(index < key) {
                return this.weights.get(key);
            }
        }
    }
    
}




/*
Goal: shuffle a deck of cards such that 
the cards are in a new random order 

Cards: 5 cards in a deck 

Cards: [3,4,5,6,7]


Strategy: 
- Math.random() 
- Range: 0 -> cards.length - 1
  - Don't return curr position 
  - Run Math.random until not given curr position 
- Math random can swap index 

Edge cases/  considerations:
- Unique integers 
- Don't care about each bucket - char, neg, etc, all 
unique 


*/

// cards is an array of unique integers

function shuffle( cards ) {
  
    let newIdx = Math.floor(Math.random() * cards.length); // scale up to give us a random num from 0 -> cards.length-1
  
    for(let i = 0; i < cards.length; i++) {
      [cards[i], cards[newIdx]] = [cards[newIdx], cards[i]]; // js allow in place swaps? 
      
    }
    return cards; 
  }
  
  function test()
  {
    
    let hash = {};
    for(let j = 0; j < cards.length; j++) {
      let card = cards[j]; 
  
      hash[j] = card; 
    }
      
    for ( var i=0; i < 1000; ++i )
    {
      // let seen = new Set(); 
          
      var cards = [ 1, 2, 3, 4, 5 ]
      let newCards = shuffle( cards )
      
      // verify that none of the cards ended up in their same positions as the input
      for(let k = 0; k < newCards.length; k++) {
        let newCard = newCards[k];
        
        // hash: {0: "a", 1: "b"}
        // newCards: "badc"
        // newCard: 
        
        if() {
          return false;
        }
      }
      
    }
    
    return true; 
  }
  
  
  console.log(shuffle([1,2,3,4,5])); 
  console.log(shuffle(["a", "b", "c", "d"])); 
  
  
  
