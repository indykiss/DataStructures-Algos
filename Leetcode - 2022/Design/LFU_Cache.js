/*
LFU Cache

Design and implement a data structure for Least Frequently Used (LFU) cache. 
It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists 
in the cache, otherwise return -1.

put(key, value) - Set or insert the value if the key is not already present. 
When the cache reaches its capacity, it should invalidate the least frequently 
used item before inserting a new item. For the purpose of this problem, when 
there is a tie (i.e., two or more keys that have the same frequency), the least 
recently used key would be evicted.

Strategy:
- Create a node and a doubly linked list to store information 
- Do things???

IDK. I just used this for a doubly linked list practice
*/



class Node{
    constructor(key, value) {
        this.key = key;
        this.val = value;
        this.next = this.prev = null;
        this.freq = 1;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null,null);
        this.tail = new Node(null,null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insertHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    removeTail() {
        let node = this.tail.prev;
        this.removeNode(node);
        return node.key;
    }

    isEmpty() {
        return this.head.next.val == null;
    }
}

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.currentSize = 0;
    this.leastFreq = 0;
    this.nodeHash = new Map();
    this.freqHash = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    let node = this.nodeHash.get(key);
    if (!node) return -1;
    this.freqHash.get(node.freq).removeNode(node);
    if (node.freq==this.leastFreq && this.freqHash.get(node.freq).isEmpty()) this.leastFreq++
    node.freq++;
    // freqHash housekeeping
    if (this.freqHash.get(node.freq)==null) this.freqHash.set(node.freq, new DoublyLinkedList())
    this.freqHash.get(node.freq).insertHead(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.capacity == 0) return;
    let node = this.nodeHash.get(key);
    if (!node) { // new node
        this.currentSize++;
        if (this.currentSize > this.capacity) {
            let tailKey = this.freqHash.get(this.leastFreq).removeTail();
            this.nodeHash.delete(tailKey);
            this.currentSize--;
        }
        let newNode = new Node(key, value);
        // freqHash housekeeping
        if (this.freqHash.get(1)==null) this.freqHash.set(1, new DoublyLinkedList())
        this.freqHash.get(1).insertHead(newNode);

        this.nodeHash.set(key, newNode);
        this.leastFreq = 1;

    } else { // existed node
        node.val = value;
        this.freqHash.get(node.freq).removeNode(node);
        if (node.freq == this.leastFreq && this.freqHash.get(node.freq).isEmpty()) this.leastFreq++;
        node.freq++;
        // freqHash housekeeping
        if (this.freqHash.get(node.freq)==null) this.freqHash.set(node.freq, new DoublyLinkedList())
        this.freqHash.get(node.freq).insertHead(node);
    }
};