

/*
Frog Jump

A frog is crossing a river. The river is divided 
into x units and at each unit there may or may not 
exist a stone. The frog can jump on a stone, but it 
must not jump into the water.

Given a list of stones' positions (in units) in sorted
 ascending order, determine if the frog is able to 
 cross the river by landing on the last stone. 
 Initially, the frog is on the first stone and 
 assume the first jump must be 1 unit.

If the frog's last jump was k units, then its next 
jump must be either k - 1, k, or k + 1 units. Note 
that the frog can only jump in the forward direction.

[0,1,3,5,6,8,12,17]

There are a total of 8 stones.
The first stone at the 0th unit, second stone at the 1st unit,
third stone at the 3rd unit, and so on...
The last stone at the 17th unit.

Return true. The frog can jump to the last stone by jumping 
1 unit to the 2nd stone, then 2 units to the 3rd stone, then 
2 units to the 4th stone, then 3 units to the 6th stone, 
4 units to the 7th stone, and 5 units to the 8th stone.
Example 2:

[0,1,2,3,4,8,9,11]

Return false. There is no way to jump to the last stone as 
the gap between the 5th and 6th stone is too large.

*/


/*
Given a list of stones' positions, 
check if frog can cross the river by 
landing on the last stone. 

Frog starts on 1st stone. 
If last frog's jump was k units, the next
jump must be k-1, k or k+1 units. 

Frog can only jump forward. 

Strategy:
By working backwards, we can eliminate most possibilities because of the given constraints. 
There's one advantage in particular we have when working backwards: we know we must end on 1 hop.

Starting at the end of the array, 
calculate the distance (dst) between the 
current element (i) and each of the previous 
elements (j) in the array:

If dst is greater than j+1, that means we won't be able to end on 1 hop, even if we subtract 1 from every hop from i down to 0. We can immediately abort this path.

At next step, the last dst used becomes our k -- so we know that k-1 <= dst <= k+1 must hold true. 

If dst > k+1, we can immediately abort this path since dst will only increase as j decreases. 

If dst < k-1, we should skip this iteration because dst falls outside of our required range, but we still continue down this path since dst will increase as j decreases.
*/


var canCross = function(stones) {
    
    function recursive(i, k) {
        let prev = stones[i]; 
        
        for(let j = i - 1; j >= 0; j--) {
            let dist = prev - stones[j]; 
            // too far, frog in water
            if(dist > j + 1) return false;
            // if k > 0
            if(k > 0) {
                if(dist > k + 1) return false; 
                if(dist < k - 1) continue;
            }
            if(recursive(j, dist)) {
                return true;
            }
        }
        return true;
    }
    // start at the end of the stones 
    return recursive(stones.length - 1, 0);
};



var canCross = function(stones) {
    
    const recursive = function(i,k) {
        // Track the prev stone to get distance
        const prev = stones[i]
        for(let j = i - 1; j >= 0; j--) {
            // Check distance
            const dist = prev - stones[j];
            // Too far, frog in water
            if(dist > j + 1) return false;
            // If we have a k
            if(k) {
                // Too far, frog in water
                if(dist > k + 1)  return false
                if(dist < k - 1) continue;
            }
            if(recursive(j, dist)) {
                return true;
            }
        }
        return true;
    }
    
    return recursive(stones.length - 1, 0)   
};