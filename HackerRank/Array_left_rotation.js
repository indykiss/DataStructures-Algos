/*
Arrays- Left Rotation 

Strategy:
- Given an array and num of rotations 
- Slice off from the array the end and beg in two parts 
    - Slice returns an arr so need to loop through beg and end to 
    push into new arr 

*/

// Input: [1,2,3,4,5], 2 => [3,4,5,1,2]
function rotLeft(a, d) {
    const arr = [];
    const begOfArr = a.slice(d)
    const endOfArr = a.slice(0, d)

    for(let i = 0; i < begOfArr.length; i++) {
        arr.push(begOfArr[i]);
    }
    for(let i = 0; i < endOfArr.length; i++) {
        arr.push(endOfArr[i]);
    }
    return arr;
}
