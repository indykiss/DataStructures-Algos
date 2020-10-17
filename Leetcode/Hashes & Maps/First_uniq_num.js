

/*
First Unique Number

You have a queue of integers, you need to retrieve the first 
unique integer in the queue.

Implement the FirstUnique class:

FirstUnique(int[] nums) Initializes the object with the nums in the queue.

int showFirstUnique() returns the value of the first unique integer 
of the queue, and returns -1 if there is no such integer.

void add(int value) insert value to the queue.
*/


// Sept, bloomb
// I'm fucked if I need to console.log test this :( 
class FirstUnique {
    
    // We're given nums as a queue
    // We want a dictionary to track num:# of occurences
    constructor(nums) {
        this.queue = nums;
        this.hash = {};
        
        // We're given numbers initially. We want to add them into hash
        for(let num of this.queue) {
            if(this.hash[num]) {
                this.hash[num]++;
            } else {
                this.hash[num] = 1;
            }
        }
    }

    // Return the value of the first unique integer of the queue
        // If no uniq numbers, return -1
    showFirstUnique() {
        // Loop through the queue
        for(let i = 0; i < this.queue.length; i++) {
            let num = this.queue[i];    
            // Since we've added num: # of occurences to hash, we can ID the first uniq value 
            if(this.hash[num] == 1) {
                return num;
            }
        }
        return -1
    }

    // Adds a numerical value to the queue and the dictionary
    add(value) {
        this.queue.push(value);
        if(this.hash[value]) {
            this.hash[value]++
        } else {
            this.hash[value] = 1;
        }
    }
}
