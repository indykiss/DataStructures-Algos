

/*
Strobogrammatic Number

Given a string num which represents an integer, return true 
if num is a strobogrammatic number.

A strobogrammatic number is a number that looks the same when 
rotated 180 degrees (looked at upside down).

"69"  => T
"692"  => F 
*/

var isStrobogrammatic = function(num) {
    const rotatedPairs = {
        '0': '0',
        '1': '1',
        '6': '9', 
        '8': '8', 
        '9': '6'
    }
    
    let left = 0,
        right = num.length - 1;
    
    while(left <= right) {
        if(num[left] !== rotatedPairs[num[right]]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};



