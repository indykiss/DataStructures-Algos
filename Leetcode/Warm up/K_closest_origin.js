

/*
K Closest Points to Origin
We have a list of points on the plane. Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in.)

Strategy:
- For each point on the grid, we want to calculate distance 
- We want to sort the arrays by their distance from (0,0)
- Then we want to slice the array until k 
*/



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