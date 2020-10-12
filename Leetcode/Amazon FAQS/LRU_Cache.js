
/*
LRU Cache

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 // capacity  )

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

*/









// Attempt #2, do me again 
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    // Pulls the value that correlates to the key
        // If it exists, delete and re-add in order to move it into most recently used
    get(key) {
        if(this.cache.has(key)) {
            let val = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, val);
            return this.cache.get(key);
        } else {
            return -1;
        }
    }
    // Set or inserts the value of the given key, IF it doesnt exist 
    put(key, value) {
        if(this.cache.has(key)) {
            this.cache.delete(key);
        }    
        this.cache.set(key, value);
        // Recognize that there is a capacity. We want to delete the least recently used item. 
        if(this.cache.size > this.capacity) {
            let least = this.cache.keys().next().value;
            this.cache.delete(least);
        }
    }
}




class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }
    
    get(key) {
        // If the cache already has the key, we want to delete it and move it to being the most recently used key. Since we're looking at the order of key usage in cache
        if(this.cache.has(key)) {
            let val = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, val);
            return this.cache.get(key);
        } else {
            return -1;
        }
    }
    
    put(key, value) {
        if(this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value)
        if(this.cache.size > this.capacity) {
            // Delete the 1st value, ideally the least recently used item
            this.cache.delete(this.cache.keys().next().value)
        }
    }
       
}


