

/*
K Closest Points to Origin
We have a list of points on the plane. Find the K closest points 
to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order. The answer is guaranteed to 
be unique (except for the order that it is in.)

Strategy:
- For each point on the grid, we want to calculate distance 
- We want to sort the arrays by their distance from (0,0)
- Then we want to slice the array until k 
*/

// HEAP always heap whenever top k 
var Heap = require('./collections/heap')

function kClosest(points, k) {
    let res = [];
    let minHeap = new Heap([], null, (a,b) => distCalc(b) - distCalc(a); 
                           
    for(let num of points) {
        minHeap.push(num); 
    }
                                                      
    while(minHeap.size > k) {
        let ele = minHeap.pop(); 
        res.push(ele);
    }
    return res;   
}

function distCalc(coord) {
    let x = coord[0], 
        y = coord[1];
    return x*x + y*y;
}


// Nov: 18 mins to do this 2 ways. 
// Without heap, 8-10 mins. 

// [[-1,1], [1,2], [2, 2]], k = 2
function kClosest(points, k) {
    points = points.sort((a,b) => distCalc(a) - distCalc(b));
    return points.slice(0, k);
}

function distCalc(coord) {
    let x = coord[0],
        y = coord[1];
    return x*x + y*y
}

// Heap. Kinda sorta works! 
const Heap = require('./collections/heap'); // import heap DS

function kClosestHeap(points, k) {
    let res = [];
    
    let minHeap = new Heap([], null, (a,b) => distCalc(a) - distCalc(b)); 
    
    for(let idx = 0; idx < k; idx++) {
        let root = minHeap.pop();
        
        res.push(root);
    }
    return res; 
}




// Oct, Grokking way to do this with a heap. 
// Fb/ Bloomb. Max heap! Yay, not terrible if I'm importing :) 
const Heap = require('./collections/heap'); // import Heap. syntax? 

var kClosest = function(points, K) {
    
    let maxHeap = new Heap([], null, (a,b) => a-b);
    for(let i = 0; i < K; i++) {
        maxHeap.push(points[i]);
    }
    
    for(let idx = 0; idx < points.length; idx++) {
        let curr = points[idx];
        let currDist = distanceCalculator(curr);
        let rootOfMaxHeap = maxHeap.peek();
        let rootDist = distanceCalculator(rootOfMaxHeap); 
        
        if(currDist < rootDist) {
            maxHeap.pop();
            maxHeap.push(curr);
        }        
    }
    
    return maxHeap.toArray();
};

function distanceCalculator(coords) {
    let x = coords[0],
        y = coords[1];
    
    return x^2 + y^2; 
}
// O(N * log k) time and O(K) space





// Warm up, easy way to do this. 
// IF ASKED THIS Q, DO IT THIS WAY FIRST AND SAY WE CAN DO THIS 
// WITH A HEAP INSTEAD. ALWAYS DO BRUTE FORCE FIRST 
var kClosest = function(points, k) {
    points = points.sort((a,b) => distance(a) - distance(b));
    return points.slice(0,k);
}
var distance = function(pt) {
    let x = pt[0];
    let y = pt[1];
    return (x*x + y*y);
}



// attempt #5
var kClosest = function(points, K) {
    points = points.sort((a,b) => distance(a) - distance(b))
    return points.slice(0,K)
}


var distance = function(arr) {
    let x = arr[0];
    let y = arr[1]
    return (x*x + y*y)
}


// Attempt #4: No heaps. Fuck heaps. Took 5 mins  
var kClosest = function(points, K) {
    points = points.sort((a,b) => distance(a) - distance(b))
    return points.slice(0,K);
}

var distance = function(arr) {
    let x = arr[0];
    let y = arr[1];
    return (x*x + y*y)
}








// Attempt #3: Heap version. 
// I just copied. I hate heaps 


class Heap {
    constructor() {
        this.heap = [];
    }
    parent(i) {
        return Math.floor(i-1/2);
    }
    leftChild(i) {
        let left = i*2 - 1;
        if(left < this.heap.length) {
            return true;
        } else {
            return false;
        }
    }
    rightChild(i){
        let right = i*2 - 2;
        if(right < this.heap.length) {
            return true; 
        } else {
            return false; 
        }
    }
    insert(item) {
        this.heap.push(item);
        this.bubbleUp();
    }
    remove() {
        if(this.heap.length) {
            let item = heap[0];
            this.heap[0] = this.heap[this.heap.length-1]
            this.heap.pop();
            this.bubbleDown();
            return item; 
        } else {
            return false;
        }
    }
    hasParent(i) {
        if(i > 0 && i < this.heap.length) {
            return true;
        } else {
            return false;
        }
    }
    swap(left, right) {
        let temp = this.heap[left]
        this.heap[left] = this.arr[right];
        this.heap[right] =  temp;
    }
    bubbleUp() {
        let i = this.heap.length-1;

        while(this.hasParent(i) && this.heap[i][0] < this.heap[this.leftChild(i)[0]]) {
            this.swap(i, this.parent(i));
            i = this.parent(i); 
        }
    }
    bubbleDown() {
        let index = 0;
        while(this.leftChild(index)){
            let smallChildIndex = this.leftChild(index);
            if(this.rightChild(index)){
                 if(this.heap[this.rightChild(index)][0] < this.heap[this.leftChild(index)][0]){
                smallChildIndex = this.rightChild(index) 
            }        
            }
               
            if(this.heap[index][0] < this.heap[smallChildIndex][0]){
                break;
            }
            else this.swap(index, smallChildIndex)
            index = smallChildIndex;
        }
    }
}

var kClosest = function(points, K) {
    let que = new Heap();
    let result = []
    points.forEach((point, index) => {
        let distance = point[0] ** 2 + point[1] ** 2
        que.insert([distance, index])
        
        
    } )
    
    for(let i=0; i<K; i++){
        let item = que.remove()
        console.log(item)
        result.push(points[item[1]])
    }
    
    return result;
};





// Attempt #2, good 
var kClosest = function(points, K) {
    // S1: Sort by distance 
    const sorted = points.sort((a,b) => distanceFinder(a) -distanceFinder(b))
    
    // S2: Slice the sorted arr by 0 to K 
    return sorted.slice(0, K)
} 

// Helper for distance 
var distanceFinder = function([x,y]) {
    return (x * x) + (y * y);
}









// Attempt #1: Do me again but harder version
var kClosest = function(points, K) {
    let sortedPoints = points.sort((a,b) => distance(a) - distance(b))

    return sortedPoints.slice(0,K);
};

var distance = function([x,y]) {
    return (x * x) + (y * y);
}