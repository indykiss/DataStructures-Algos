/*
Reverse an integer. 

Assumptions: Negative numbers are possible.

Strat: Make it into a string, then arr, then reverse. 
Then back into a number, using parseInt(). 
If negative number, need to 
multiply the input's sign with this num to get ans.

Took me a minute; had to google .join() and .parseInt(), but was ok. 
Had to look up the 32 bit part, but that was ok. 
*/

var reverse = function(x) {
    
    let reversed = x.toString().split('').reverse().join('')
    // 123 => "123" => [1,2,3] => [3,2,1] => "321"
    let answer = parseInt(reversed);
    // If number is negative;
    if(x < 0) {
        answer = answer * -1
    }
    // Edge: Can only take nums within 32 bit integer range
    if(answer <= -2147483648 || answer >= 2147483648 ) {
        return 0; 
    }
    return answer;
};
