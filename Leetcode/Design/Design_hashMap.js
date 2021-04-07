


/*
Design hash map

Use a linked list (chaining) to avoid hash collisions

Strategy: O(1) lookup BUT if hash collision, O(n) lookup 
- Key/ value pairs
- Hash collision : linked list 
- get(key), add(key, val), delete(key)
- Chaining: pros: simple to implement, good for unknown 
# of keys. BUT bad bc O(n) time lookup now, uses extra
space for the linked lists 

- Open addressing: if a hashCode is being used, 
go to the next empty slot. 
Cons: harder to implement, limited by size of arr
Pros: Faster, less space 

*/

class MyHashMap {
    constructor() {
        this.hashMap = []; // assume size 100
    }
    
    hash(key) {
        return key % 100;
    }
    
    add(key, val) {
        let idx = hash(key); 
        
        // if hash collision, make linked list 
        if(this.hashMap[idx]) {
            let temp = this.hashMap[key];
            this.hashMap[key] = new LinkedList(); 
            this.hashMap[key].next = temp; 
            
            this.hashMap[key].next.next = [key, val]; 
        } else {
            this.hashMap[idx] = [key, val];
        }
    }
    // {} => {hashCode : [key, val] => [key, val] => ...} 
    
    get(key) {
        let idx = hash(key);
        
        if(!this.hashMap[idx]) {
            return -1; 
        }

        // If linked list, iterate thru 
        if(this.hashMap[idx].next) { 
            let i; 
            
            while(i !== null) {
                if(this.hashMap[idx][0] === key) {
                    return this.hashMap[idx][1];
                }
                i++; 
            }
        // If not linked list   
        } else {
            return this.hashMap[idx][1]; 
        }
    }
    
    remove(key) {
        let idx = hash(key);
        
        if(!this.hashMap[idx]) {
            return -1; 
        } 
        
        // If linked list, iterate thru 
        if(this.hashMap[idx].next) { 
            let i; 
            
            while(i !== null) {
                if(this.hashMap[idx][0] === key) {
                    this.hashMap[idx][0] = "";
                    this.hashMap[idx][1] = "";
                }
                i++; 
            }
        // If not linked list   
        } else {
            this.hashMap[idx] = []; 
        }
    }
    
}





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

