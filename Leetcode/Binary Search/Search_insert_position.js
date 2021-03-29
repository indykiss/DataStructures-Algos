
/*
Search Insert Position

Given a sorted array of distinct integers and a target 
value, return the index if the target is found. If not, 
return the index where it would be if it were inserted in order.

nums = [1,3,5,6], target = 5 
return 2

nums = [1,3,5,6], target = 7
return 4

Strat: O(log n) time & O(1) space
- Binary search 
- Vars : floor, ceiling 
- If we find num, return i 
    - Update ceil/floor depending on target
*/


var searchInsert = function(nums, target) {
    let ceil = nums.length - 1;
    let floor = 0;
    while (floor <= ceil) {
        let mid = Math.floor((ceil + floor) / 2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) {
            ceil = mid - 1;
        } else {
            floor = mid + 1;
        }
    }
    return floor;
};