


/*
Unique Number of Occurrences

Given an array of integers arr, write a function that returns 
true if and only if the number of occurrences of each value 
in the array is unique.


Strategy: O(n log n) time, O(n) space
- Vars: occ, setOfOcc
- Loop thru arr
    - If prev is same as curr, increment occ
    - Else not same, check if set has 
    this # of occ, if so - False
    - If not, add to set and continue
- Return true 

15 mins, but went fast & picked slow way to do it
*/

var uniqueOccurrences = function(arr) {
    let occ = 1, 
        setOfOccs = new Set();

    arr.sort((a,b) => a-b);
    
    for(let i = 1; i < arr.length; i++) {
        let prev = arr[i-1], 
            curr = arr[i]; // look forward vs back maybe? off by 1?
        
        if(prev === curr) {
            occ++; 
        } else {
            if(setOfOccs.has(occ)) {
                return false;
            } else {
                setOfOccs.add(occ); 
                occ = 1; 
            }
        }
    }
    return setOfOccs.has(occ) ? false : true;
};


