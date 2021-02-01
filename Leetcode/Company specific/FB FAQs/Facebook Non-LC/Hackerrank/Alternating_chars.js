/*
Alternating characters

- You're given a string containing charcters A and B only
- Change the string such that there's no matching adjacent characters by deleting
- Count the number of deletions needed 
*/


function alternatingCharacters(s) {
    let count = 0; 
    let arr = s.split('')
    let lastChar = arr[0];

    arr = arr.filter((num, key) =>{
        if(num !== lastChar && key !==0) {
            lastChar = num;
            return lastChar;
        }
    })
    count = s.length - [s.charAt(0), ...arr].length;
    
    return count;
}
