/*
Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.
Allows for duplicate values. 

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Strategy:
- Use a map with has/ get/ set properties which is helpful and faster than using a hash 
    - .has = getting the key 
    - .get = getting the value of the key
    - .set = changing the value of the key 
- Make one arr into a map 
- Then loop through the other arr and check if the map has that val > 0
- If it does, add it into res arr and decrement the map's val by doing this: map.set(ele, map.get(ele) - 1)
- Return res arr 
*/

var intersect = function(nums1, nums2) {
    
    const map1 = hashMaker(nums1)
    const arr = [];
    
    for(let ele of nums2) {
        if(map1.has(ele) && map1.get(ele) > 0) {
            arr.push(ele);
            map1.set(ele, map1.get(ele) - 1);
        }
    }
    return arr;
};


var hashMaker = function(arr) {
    const map = new Map;
    
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1); 
        } else {
            map.set(arr[i], 1);
        }
    }
    return map;
}