


-- Prod design --
Rotten tomatoes into Siri / Most desired Siri feature 


-- System design -- 
Find my friends 

1. Functional & nonfunctional requirements 

2.  High level design 
 - Components in system

 
3. Estimations of the systems
 - Traffic, storage [locations], bandwidth 

4. APIs / datebase schemas 


------------ 
1. Functional & nonfunctional requirements  / goals 

Functional reqs:
- Have: user's location (latitude/ longitude) 
- List of friends & their locations, who've turned on location finding 
- Shows map of locations
- Trail of where they've been last 10 mins (user & friends trails)

Non-functional: 
- Low latency, real time data 
- Reliable / consistent 
- Manageable 
- Search heavy - read heavy / pushing people location is a write heavy. 1:1 read/ heavy ratio 
- Running on user device => power & performance is very imp, 
  - battery drain is important. mitigate (turning on GPS is draining)
  - lower processing bc of mobile device
  - offload to a local server? optimized so can run on device? 
- Privacy implications => encryption, along the entire system path. User's friends have
decryption keys 


System extensions:
- Directions, apple map directions system
- Map modes


2. High level design  
Drawing mode




/*
Coding: 

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
  
  
Coding: 
Longest substring without repeats basically 