/*
Design HashMap 
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.

get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.

remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.
*/


var MyHashMap = function() {
    this.map = [];
};

// Value will always be non-negative. 
MyHashMap.prototype.put = function(key, value) {
    this.map[key] = [key, value]
};

/*Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
MyHashMap.prototype.get = function(key) {
    if(this.map[key] === undefined) {
        return -1
    }
    return this.map[key][1];
};

/*Removes the mapping of the specified value key if this map contains a mapping for the key */
MyHashMap.prototype.remove = function(key) {
    this.map[key] = undefined;
};

