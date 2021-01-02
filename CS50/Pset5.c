


// Key points:
// Implement a hash table 
// Pset was in C, but VERY confusing, so I'm going to 
// do this exact thing in JS 

// HASH TABLE THAT CAN HANDLE COLLISIONS :

class HashTable {
    constructor(size = 10) {
        this.buckets = [];
        this.size = 0;
    }

    // Create hashing function to figure out where to 
    // put the key 
    hashing(key) {
        let stringify = key.toString();
        let getHash = stringify.length % this.size; 

        return getHash;
    }

    // Method to add key/ value pairs
    add(key, value) {
        let hash = hashing(key);

        // add an empty arr to the hash spot, if it doesnt exist
        if(!this.buckets[hash]) {
            this.buckets[hash] = [];
        } 
        
        // add key & value to hash 
        this.buckets[hash].push([key, value]);
    }

    // Search thru hash for value using key 
    // Account for possible continued search bc collisions
    search(key) {
        const hash = hashing(key);

        // early end if doesnt exist 
        if(!this.buckets[hash]) return null;

        // go to the arr that's at the hash spot 
        for(let bucket of this.buckets[hash]) {
            if(bucket[0] === key) {
                return bucket[1];
            }
        }
    }
}

Insertion, searching, deletion - O(1)
// https://reactgo.com/hashtable-javascript/ 



// This is how to implement a hash table in C
// Uncompleted. Not going to do. See above for JS implementation

// Make the node 
typedef struc node {
    char word[LENGTH + 1]; // key
    struc node *next;  // next relationship
}

node; 


// How many things in hash table
const unsigned int N = 1; 


// Hash table box 
node *table[N]; 

// Hash the word to a number, ie key 
unsigned int hash(const char *word) {

} 


// Load dictionary into memory- C specific bullshit 
bool load(const char *dictionary) {


}



// How many words are in dictionary? 

