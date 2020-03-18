

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