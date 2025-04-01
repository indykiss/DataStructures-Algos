
/* 1D Candy Crush

https://leetcode.com/discuss/interview-question/380650/Bloomberg-or-Phone-Screen-or-Candy-Crush-1D
baaabbc => c
bbbc 
c 
Write a function to crush candy in one dimensional board. 
In candy crushing games, groups of like items are removed 
from the board. In this problem, any sequence of 3 or more 
like items should be removed and any items adjacent to that 
sequence should now be considered adjacent to each other. 
This process should be repeated as many time as possible. 
You should greedily remove characters from left to right.


*/

function candy(str) {
    let tracker = [] 
  
    for(let i = 0; i < str.length; i++) {
      if(tracker.length >= 2) {
        let ele1 = tracker.pop(), 
            ele2 = tracker.pop()
  
        // ele2 = a, ele1 = a, str[i] = 1
        if(ele1 == str[i] && str[i] == ele2) {
          continue;
          // ele2 = a, ele1 = b, str[i] = a
        } else {
          tracker.push(ele2); 
          tracker.push(ele1); 
        } 
      }
      tracker.push(str[i]); 
    }
    return tracker.join("");
  }
  
  console.log(candy("abbbaac")) // c 
  console.log(candy("bbbbbbb")) // b 
  console.log(candy("abc")) // abc 
  console.log(candy("")) // "" 
  console.log(candy("sjgnieb")) // sjgnieb
  