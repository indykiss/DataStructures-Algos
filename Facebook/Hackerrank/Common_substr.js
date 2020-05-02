/*
Determine if two given strings share a common substring. 

A common substring can be as short as 1 letter. 

Ex: (art, a) => Yes 
(meeeep, bloo) => No 
*/

function twoStrings(s1, s2) {
    const s1Arr = s1.split("");
    const s2Arr = s2.split("");
    let yesOrNo = 0;

    for(let i = 0; i < s1Arr.length; i++) {
        if(s2Arr.includes(s1Arr[i])) {
            yesOrNo++
        }
    }

    if(yesOrNo === 0) {
        return 'NO'
    } else {
        return 'YES'
    }
}
