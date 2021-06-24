
# Hashes/ maps/ sets
hash[key] = val 

maps: .has(key), .set(key, val), .get(key), .delete(key)

sets: .add(num), .has(num), .delete(num), set.size()

splice(start, deleteCount) changes an array by removing or replacing existing elements and/or adding new elements in place.

slice(start, end) extracts a section of a string and returns it as a new string, without modifying the original string

Access: O(1) time

# Heaps:
const Heap = require('./collections/heap');

maxHeap = new Heap([], null, (a,b) => a-b);

- Time: Adding elements to heap is O(log k) times the num of times we need to do it.. O(n log k)
- Space: O(k) IF max length of heap is k 

# Sliding window (no negative nums)/ multiple pointers
- Find longest X, subarrs, consecutive
- 3 sum, merged 2 things, palindrome

# Binary search
- We have sorted arr/ LL/ matrix OR a BST. Lets search fast
- Start, end, midpt (math.floor(start + (end-start)/2)
- Update start/ end based on where target is 


    function binarySearch(array, target, lower, upper) {
        let lower = 0, upper = arr.length -1;

        while(lower <= upper) {
            const mid = Math.floor((lower + upper) / 2)
            const guess = array[mid];

            if(guess === target) {
                return mid;
            } else if(target < guess) {
                upper = mid - 1;
            } else {
                lower = mid + 1;
            }
        }
        return thing;
    }

O(log n) time


# Stacks / Queues
- shift() removes the first element from an arr and returns that removed element
- unshift() adds to the beg of arr and returns the new length of the arr
- pop() removes at end. push() adds to end

# Dfs - Recursive 
- Searching for ANYTHING. Searching through a hash, an arr, a matrix, or a tree
- Going deep

    var dfs = function(root) {
        / if we can't prove, default to opposite
        if(root == null) return;

        / prove either yes or no, or do thing:
        if(root.val / root.left/  root.right) {
            return false/ true;
        } 
        
        return dfs(root.left, info?) || / && 
            dfs(root.right, info?)
        OR
        dfs(root.left)
        dfs(root.right)
    }

# Bfs (normal / level wise) - Queue to track
- Look all around 

Levels for trees: 
    var levelOrder = function(root) {
        if(!root) return [];
        let queue = [],
            res = []; 
        queue.push(root); 
        
        while(queue.length > 0) {
            let lvl = [], 
                len = queue.length; 
                // SAVE PREVIOUS QUE LENGTH
            
            // LOOK AT EACH LEVEL
            for(let i = 0; i < len; i++) {
                let curr = queue.shift();
                lvl.push(curr.val); 
                if(curr.left) queue.push(curr.left); 
                if(curr.right) queue.push(curr.right); 
            }
            res.push(lvl); 
        }
        return res;
    };


# Tree traversals (pre in post)
- Just notes:

    // traverse(left), arr.push(curr.val), traverse(right)
    function inOrderTraverse(tree, array) {
        if(tree !== null) {
            inOrderTraverse(tree.left, array); 
            array.push(tree.value);
            inOrderTraverse(tree.right, array);
        }
        return array; 
    }
    
    // arr.push(curr.val), traverse(left), traverse(right)
    function preOrderTraverse(tree, array) {
        if(tree !== null) {
            array.push(tree.value);
            preOrderTraverse(tree.left, array); 
            preOrderTraverse(tree.right, array);
        }
        return array; 
    }
    
    // traverse(left), traverse(right), arr.push(curr.val)
    function postOrderTraverse(tree, array) {
        if(tree !== null) {
            postOrderTraverse(tree.left, array); 
            postOrderTraverse(tree.right, array);
            array.push(tree.value);
        }
        return array; 
    }

# Linked Lists
Singly/ doubly linked. 
Reverse LL:

    var reverseList = function(head) {
        let stack = [],
            reversedList = new ListNode(null);
        while(head !== null) {
            stack.push(head); // curr or curr.val ? 
            head = head.next; 
        }
        head = reversedList;
        while(stack.length !== 0) {
            let ele = stack.pop();
            
            head.next = new ListNode(ele.val);
            head = head.next; 
        }
        return reversedList.next; // ?  
    } 

# Recursion - think of it like DFS

# Tries
Node that has storage obj, isWord, built like tree


# Sys cheat sheet
1. System requirements. Ask clarifying Qs. Figure out nonfunctional and functional requirements. 
2. Estimate scale
3. High level design, boxes and arrows
4. Define APIs (like the overall functions we'll need), postTweet, createPost
5. Data Models -- what DB & why. How will data flow between components.
6. If time, detailed design into 1-2 components.
7. Where are the possible issues?


- Scalbility
- Storage data model
- Data options, schemas/ ie tables, cols
- Client-server design 
- Long term vs easy-to-build short term design
- Accomodating for possible product changes


Important: scalability (can the system grow), efficiency (latency, works well within given time frame), availablity (time that system is operational,reliable (probability that a system will fail), manageable from a programming perspective. Available = Always have access to tool.  Consistency = All nodes see the same data at all times. Partition tolerance = System keeps working even if there's a partial failure. Latency = Slowness of data loading (low latency is good, high latency is bad), because of bandwidth issues.  Reliable = Never lose data. Redundancy is imp. 

CAP theorem - eventual consistency, high availability. OR high consistency, less available.


# Load balancing 
- spreads traffic across a cluster of services to improve scalability, makes the system more responsive. Can LB between user & web server, web server & app server, and internal layer & DB. 

Two main types - layer 4 and layer 7 load balancing. 4 is simpler bc TCP, 7 is good for authentication HTTP.
Layers of communication is like the arrows between components:
physical -> data -> network -> transport -> session -> presentation -> application

LB can pick server based on a few options: IP hash (client location based), weight round robin where it checks on a server's capacity, least connection (fewer connections but connections sizes can differ so depends). 

# Caching  
Saves the 20% most frequently used data in memory, which is MUCH faster than reading from disk. Good for read-heavy apps. Can be used in a bunch of different layers. 
Cache eviction policies: LFU, LRU, FIFO, LIFO 

A CDN is a type of cache that websites use to store static media. 

Cache invalidation = When something is deleted from the DB, it needs to be deleted from the cache as well. 

Distributed caches are needed bc LB distribute traffic across nodes, so we need to make sure that there aren't any cache misses. 


# Database
Partitioning! Horizontal, range based partitioning. Dividing rows into different tables. Problem: data might not be divided evenly across the shards, but better for scaling. Can purchase a bunch of smaller servers to help us scale up.  Zip codes > 1000 in table 1. 

Vertical partitioning: lets us store our tables based on feature into a server. Easy to implement, but difficult to scale. We kinda just make 1 server bigger and bigger. All users in 1 table. 

Partitioning criteria: how do we decide what to partition? 
- Hash-based partition to let us have a uniform distribution across the servers. Apply hash function to an attribute of the entity which will return a partition number. Might need to do a consistent hashing algorithm to account for future growth of servers. Mixes hashing and lists to distribute data across the right servers. Can also do this for caching. 
- Round robin 
- Range-based. All of Mexico is on this server
- Composite-- mixing a couple options 

Other things we can do to scale a database:
- use indices [more storage, but faster access], denormalization [reduces joins by adding redundant data to tables], and connection pooling (car pooling-- multiple threads can use same DB connection.) 

Failover = Ability for a system to seamlessly switch to a reliable backup system. 

# Communication
Most common is HTTP (rest is HTTP). 

If we need to keep a connection open--- downloading a big file, or are using a messaging app--- use long polling or web sockets. Keeps persistent connection using a 'handshake' to transfer data quickly. 


# Capacity estimation cheat sheet: 

# Storage: 
Writes per day X size of write X time we're storing data =
storage needed

- 8 bits =>  1 byte 
- 1000 bytes =>  1 KB
- 1000 KB =>  1 MB because MegaMillionBytes
- 1000 MG =>  1GB because GigBillionBytes
- 1000 GB =>  1 TB bc TrillionBytes-> TB 

- 1 Char = 1 byte, Integer = 4 bytes, Time = 4 bytes
- 1 IG post = 500 bytes
- 1 video = 50 MB (compress/ replicate, so avg)

# Bandwidth (how much data thru pipe per day):
Requests per day X request size = bandwidth needed

- 1TB / day => 12 MB/ sec 
- 1 GB / day => ?? / sec 
- 1 MB / day => ?? / sec

# Cache/ memory: ^ * 0.2 to save in memory


# Traffic estimate:
Num of_daily_users * avg reads/writes per user  = 
    # of reads && # of writes

% that number by 86K secs/day to get 
how many reads and writes per second we can 
expect our system to see

# Use Time conversions for traffic:
- 3600 seconds in an hour
- 86K seconds in a day 
- 2.5 mil seconds in a month

