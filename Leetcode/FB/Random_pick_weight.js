
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
