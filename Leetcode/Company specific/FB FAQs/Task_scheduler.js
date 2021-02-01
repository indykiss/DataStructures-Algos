
/*
Task Scheduler

Given a characters array tasks, representing the tasks a CPU needs 
to do, where each letter represents a different task. Tasks could 
be done in any order. Each task is done in one unit of time. For 
each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the 
cooldown period between two same tasks (the same letter in the array), 
that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take 
to finish all the given tasks.

tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: 
A -> B -> idle -> A -> B -> idle -> A -> B

Strat: 
- So we probably want to run the most frequently seen task first, 
in a greedy method so we can be idle the least amount of time 
- Let's make a max heap
- We're really trying to find how many idle blocks we need


*/


// NOT accurate. But good max heap practice 
let Heap = require("./collections/heap"); // import heap 

var leastInterval = function(tasks, n) {
    let maxHeap = new Heap([], null, (a,b) => b-a); 
    
    for(let i = 0; i < tasks.length; i++) {
        maxHeap.push(tasks[i]);
    }
    
    let cycles= 0;

    while(maxHeap > 0) {
        let temp = [];
        for(let i = 0; i < n-1; i++) {
            if(!maxHeap.isEmpty()) {
                temp.push(maxHeap.pop());
            }
        }

        for(let i of temp) {
            if(i > 0) {
                maxHeap.add(i);
            }
        }
        if(maxHeap.isEmpty()) {
            cycles += temp.size();
        } else {
            cycles += n + 1;
        }
    }
    return cycles;
} 





// Copied to get the gist of it
var leastInterval = function(tasks, n) {
    
    // Make a map or a maxheap of the tasks 
    // Find the mostFreqTasks
    let charMap = new Map(),
        maxCharCount = 0, 
        maxChar = tasks[0];
    
    for(let char of tasks) {
        if(!charMap.get(char)) {
            charMap.set(char, 1);
        } else {
            let prev = charMap.get(char); 
            charMap.set(char, prev + 1); 
        }
        if(charMap.get(char) > maxCharCount) {
            maxCharCount = charMap.get(char);
            maxChar = char;
        }
    }
    
    // How many times do we need to be idle? 
    let idleCount = n * (maxCharCount - 1);
    
    // ?
    charMap.forEach((count, char) => {
        if(char === maxChar) return;
        if(count === maxCharCount) {
            idleCount = idleCount - (count - 1)
        }
        else idleCount -= count;
        
    })
    // how many idle blocks do we need?
    if(idleCount <= 0) return tasks.length; 
    return tasks.length + idleCount;
};

