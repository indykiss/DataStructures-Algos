


/*
Find Smallest Letter Greater Than Target

Given a list of sorted characters letters containing only lowercase 
letters, and given a target letter target, find the smallest element 
in the list that is larger than the given target.

Letters also wrap around. For example, if the target is target = 'z' 
and letters = ['a', 'b'], the answer is 'a'.

Input:
letters = ["c", "f", "j"]
target = "a"
Output: "c"


Strat: Binary search 
- Vars: start, end, iterate while start <= end, update mid
mid = Math.floor(start + (end-start) / 2)
- Update the start/ end based on midpt. 
    - If key is in left or right.
- IF we find target, go right one and return that char

After while loop, we'll hit start === end + 1
- IF start < target and right > target AND end - start === 1 
    Return right, char


Edge:
- z -> a 

*/

// Oct 
var nextGreatestLetter = function(arr, target) {

    if(key < arr[0] || key > arr[-1]) return arr[0];

    let start = 0,
        end = arr.length - 1;

    while(start <= end) {
        let mid = Math.floor(start + (end-start) / 2);

        if(key < arr[mid]) {
            end = mid - 1;
        } 
        if(key > arr[mid]) {
            start = mid + 1;
        }
    }

    // since the loop is running until start <= end 
    // at end of while loop, we'll have start === end + 1
    return arr[start % arr.length] // ???

} 





// Not the right answer bc lines 60 - 64 are broken, but close 

// ["c", "f", "j"], "c" => "f"
var nextGreatestLetter = function(letters, target) {
    if(target === 'z') {
        return letters[0];
    }
    
    let start = 0,
        end = letters.length - 1;
    
    while (start <= end) {
        
        let mid = Math.floor(start + (end-start) / 2); 
        
        // found target, look right by 1
        if(letters[mid] === target) {
            return letters[mid + 1];
        }
        
        // IF start < target && right > target && end - start === 1. Return letters[end] 
        if(letters[start] <= letters[mid] && letters[end] > letters[mid] 
          && end - start === 1) {
            return letters[start];
        }
        
        // moving floor/ ceil based on mid
        if(target < letters[mid]) { // < > works for chars?
            end = mid - 1; 
        }
        if(target > letters[mid]) {
            start = mid + 1;
        }   
    }
};





