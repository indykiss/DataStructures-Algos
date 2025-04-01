

/*
Insert Delete GetRandom O(1)
https://leetcode.com/problems/insert-delete-getrandom-o1/

Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.


Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]
*/


// Strategy! 
// Dict : {val: idx} for O(1) look ups for val, arr: [val1, val2] for O(1) random access using indices
class RandomizedSet {
    constructor() {
        this.dict = {};
        this.vals = []
    }
    
    // insert num into set if not present
    // If we can insert, return true 
    // If we can't insert, return false 
    insert(val) {
        if(this.dict[val]) {
            return false; 
        } else {
            this.vals.push(val); 
            let idx = this.vals.length - 1; 
            this.dict[val] = idx; 
            return true;
        }
    }
    
    // remove and return a random number from set
    // If we can remove, return true 
    // If we can't remove, return false 
    remove(val) {
        if(this.dict[val]) {
            let idx = this.dict[val]; 
            delete this.dict[val];
            this.vals.splice(idx, 1); // off? O(1) time complex but 2x check
            return true; 
        } else {
            return false;
        }    
    }
    
    // returns a random element from set
    getRandom() {       
        let ranIdx = Math.floor(Math.random() * this.vals.length);
        return this.vals[ranIdx];
    }
}








