
/* 
Return an array of the 216 hex codes containing 6 characters: 00, 33, 66, 99, FF, CC

[
'#000000', '#000033', '#000066', '#000099', '#0000CC', '#0000FF',
'#003300', '#003333', '#003366', '#003399', '#0033CC', '#0033FF',
'#006600', '#006633', '#006666', '#006699', '#0066CC', '#0066FF',
'#009900', '#009933', '#009966', '#009999', '#0099CC', '#0099FF',
// ...
'#FF6600', '#FF6633', '#FF6666', '#FF6699', '#FF66CC', '#FF66FF',
'#FF9900', '#FF9933', '#FF9966', '#FF9999', '#FF99CC', '#FF99FF',
'#FFCC00', '#FFCC33', '#FFCC66', '#FFCC99', '#FFCCCC', '#FFCCFF',
'#FFFF00', '#FFFF33', '#FFFF66', '#FFFF99', '#FFFFCC', '#FFFFFF'
]

Brute Strategy:
- Build each str, 
  - Str => 3 non-uniq char pairs 
  - Start w/ # 
- 3 pointers : iterate thru the list of hex codes 
- 3 Nested loops is okay - 216 max output, so time complexity is fine 


 */

// solution given by interviewer, intuitive 
const hexGenerator = () => {
  const codes = {
    0: '00',
    1: '33',
    2: '66',
    3: '99',
    4: 'FF',
    5: 'CC'
  }

  let hexes = [];

  let first = 0;
  let second = 0;
  let third = 0;

  for (let i = 0; i < 216; i++) {
    hexes.push('#' + codes[first] + codes[second] + codes[third]);
    
    first++
    
    if (first === 6) {
      first = 0;
      second++;
    }
    if (second === 6) {
      second = 0;
      third++
    }
  }
  return hexes;
}



// my two solutions
var arr = ['00', '33', '66', '99', 'FF', 'CC']; 

function hexCodeMaker(arr) {
  
  let res = []; // size of 216 
  
  // 1st pair changes every 26 times, 2nd col every 6 times
  let char1 = 0, 
      char2 = 0, 
      char3 = 0;
  
  // '00', '33', '66'  ... 
  for(let m = 0; m < 216; m++) {
    let str = "#"; 

    str += arr[char1] + arr[char2] + arr[char3];
    res.push(str);    
    
    char3++; 

    if(m % 6 === 0) {
      char2++;
      char3 = 0; 
    }    
    if(m % 36 === 0) {
      char1++;
      char2 = 0;
    } 
  }  
  return res;  
}

console.log(hexCodeMaker(arr)); 


// More time inefficient : O(n ^ 3)
//   let res = []
//   for(let i = 0; i < arr.length; i++) { // 1
//     let char1 = arr[i];
    
//     for(let j = 0; j< arr.length; j++) { // 6
//       let char2 = arr[j];
      
//       for(let k = 0; k < arr.length; k++) { // 36
//         let char3 = arr[k]; 
//         let str = "#"; // declare elsewhere? 
//         str += char1 + char2 + char3;
//         res.push(str); 
//       }
//     }
//   }
//  return res;

