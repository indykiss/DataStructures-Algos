

/*
Moving Average from Data Stream

Given a stream of integers and a window size, calculate the moving 
average of all integers in the sliding window.

Implement the MovingAverage class:

MovingAverage(int size) Initializes the object with the size of the 
window size.
double next(int val)
Returns the moving average of the last size values of the stream.
 
Ex: ["MovingAverage", "next", "next", "next", "next"]
[[3], [1], [10], [3], [5]]

=> [null, 1.0, 5.5, 4.66667, 6.0]

*/

class MovingAverage {
    constructor(size) {
        this.size = size; 
        this.queue = []; 
        this.sum = 0; 
    }
    
    next(val) {
        this.queue.push(val); 
        
        if(this.queue.length > this.size) {
            this.sum -= this.queue.shift();
        }
        
        this.sum += val; 
        return this.sum/this.queue.length; 
    }
}
