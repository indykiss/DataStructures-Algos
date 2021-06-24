

/*
Interval List Intersections

Given two lists of intervals, find the intersection of these two lists. 
Each list consists of disjoint intervals sorted on their start time.

arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]


Strat: 
1. Nested loop. Outer: arr2
- Inner: arr1
2. We have the arr2's start point. Check if it's between 
the start/end point of the arr1's interval. 
3. If it is, we want to find the OVERLAP where x = Math.max 
and y = Math.min. Opposite of usual, bc we're not merging, we're
finding the overlaps. 
4. Push the overlaps into a new arr. 

*/





// 30 mins. Bloomb/ FB. Oct. Grokking 
var intervalIntersection = function(arr1, arr2) {
    let res = []; 

    for(let idx2 = 0; idx2 < arr2.length; idx2++) {
        let arr2Int = arr2[idx2];
        
        for(let idx1 = 0; idx1 < arr1.length; idx1++) {
            let arr1Int = arr1[idx1];
            // arr2's interval overlaps arr1's interval
            if(arr2Int[0] <= arr1Int[1] && arr2Int[0] >= arr1Int[0]) {
                let x = Math.max(arr2Int[0], arr1Int[0]);
                let y = Math.min(arr1Int[1], arr2Int[1]);
                res.push([x,y]);
            }
            // arr1's interval overlaps arr2's interval 
            else if(arr1Int[0] <= arr2Int[1] && arr1Int[0] >= arr2Int[0]) {
                let x = Math.max(arr2Int[0], arr1Int[0]);
                let y = Math.min(arr1Int[1], arr2Int[1]);
                res.push([x,y]);                
            }
        }
    }
    return res; 
};
// O(N) time and O(1) space kinda. res arr is basically constant?




