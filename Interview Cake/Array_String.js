// Girl scout cookies

// In order to win the prize for most cookies sold, my friend Alice 
// and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. 
// Write a function to merge our arrays of orders into one sorted array.

// For example:

// const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]


// I am a sorting algo 
// The main algo.ie part are the edge cases 


function mergeArraysTooSimple(myArray, alicesArray) {

    // Combine the sorted arrays into one large sorted array
    
    // First simplest way to do this is merge then .sort()
    // But this would be O(n log(n)) complexity. 
    // We can do better
    const newArr = myArray.concat(alicesArray);
    return newArr.sort((a,b) => a - b);
    
    // Let's use the fact that the arrs are already sorted
    // Edge cases: unequal arrs (main issue) and an arr is only 1 element
    // We are going to keep track of my, alice's, and new arr's indices 
    // so we can compare which is smallest then push into newArr
  }
  

function mergeArrays(myArray, alicesArray) {
    
    const newArr = [];
    
    // Set up the variables that help us keep track of the arrs
    let currentIndexAlices = 0;
    let currentIndexMine = 0;
    let currentIndexMerged = 0; 
    
    // We stop when the newArr has all the eles in both my & Alice's arrs 
    while(currentIndexMerged < (myArray.length + alicesArray.length)) {
      
      const isMyArrDone = currentIndexMine >= myArray.length; 
      const isAliceArrDone = currentIndexAlices >= alicesArray.length; 
      
      // Case: Next index in newArr is from my arr 
      // IF my arr still is going AND EITHER  
        // Alice's arr is done OR 
        // At this index, my ele is less than Alice's ele at Nth index 
        
      if (!isMyArrDone && (isAliceArrDone || 
      (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {
        
        // We add the ele to the newArr
        
        newArr[currentIndexMerged] = myArrayp[currentIndexMine]; 
        currentIndexMine++;
        
      // Case: Next index in newArr is from Alice
      } else {
        newArr[currentIndexMerged] = alicesArray[currentIndexAlice]; 
        currentIndexAlices++
      }
      
      // Either way, we increment the newArr's index so we continue adding
      currentIndexMerged++

    }
    return newArr;
}



// Your company built an in-house calendar tool called HiCal. 
// You want to add a feature to see the times in a day when everyone is available.

// To do this, you’ll need to know when any team is having a meeting. 
// In HiCal, a meeting is stored as objects ↴ with integer properties startTime 
// and endTime. These integers represent the number of 30-minute blocks past 9:00am.

// For example:

// { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

// Write a function mergeRanges() that takes an array of multiple 
// meeting time ranges and returns an array of condensed ranges.

// For example, given:
//   [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// your function would return:
//   [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

// We get an input of meetings
// Find the times that meetings overlap! 

function mergeRanges(meetings) {

  // Merge meetings into ranges that overlap
  

  // Step 1: Sort start times to be in order
  const sortedMeetings = meetings.sort((a,b) => {
    return a.startTime - b.startTime
  });

  // Step 2: the meeting with earlier start time is 1st
    // Next meeting is 2nd
  
    // Initialize mergedMeetings with 1st meeting
    const mergedMeetings = [sortedMeetings[0]];
    
    for(let i = 1; i < sortedMeetings.length; i++) {
      const currentMeeting = sortedMeetings[i]; 
      const previousMeeting = mergedMeetings[mergedMeetings.length -1]
      
      // Step 3: If current meeting overlaps with the previous
      // meeting that was merged, then we merge into one 
      
      if(currentMeeting.startTime <= previousMeeting.endTime) {
        previousMeeting.endTime = Math.max(previousMeeting.endTime, currentMeeting.endTime)
      } else {
        // Step 4: Else, leave them separate. 
        // We know there's no overlap so we can add this range
        mergedMeetings.push(currentMeeting);
      
      }
    }
  
 return mergedMeetings;
}

mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }])

// Input: [{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }
// Expected output: [{ startTime: 1, endTime: 4 }]



// Write a function that takes an array of characters 
// and reverses the letters in place.

function reverse(arrayOfChars) {

  // Reverse the input array of characters in place
    // in place meaning without making a copy,
    // thus saving time & space, but alters original arr
    // which can be bad bc of side effects
  
  // One way to do this, IF it wasn't in place
      // const newArr = []
      // for(let i = arrayOfChars.length -1 ; i >= 0; i--) {
      //   newArr.push(arrayOfChars[i]);
      // }
      // return newArr;

  // BUT to do this IN PLACE, we need to swap elements
  
  // Step 1: Establish the 2 eles to swap
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;
  
  // Step 2: Swap until we hit the middle index
  while (leftIndex < rightIndex) {
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

  // Step 3: Move towards the middle
    leftIndex++; 
    rightIndex--; 
  }
  
}




// Take an array of chars and reverses the order of the words in place

// Input: const message = [ 'c', 'a', 'k', 'e', ' ',
// 'p', 'o', 'u', 'n', 'd', ' ',
// 's', 't', 'e', 'a', 'l' ];

// reverseWords(message)
// console.log(message.join(''));

// Expected output: 'steal pound cake'

// Assumptions: Only letters, no punctuation or numbers, and 
// every word is separated by a space 


function reverseWords(message) {

  // Decode the message by reversing the words

  // Step 1: Reverse all the characters in the entire message 
    // This gives us the correct word order but with each 
    // word backwards. Helper fixes the word backwards issue
  reverseChars(message, 0, message.length - 1)
  
  // Step 1b: We keep track of beginning of the word 
    // as we look for end of the word 
  let currentWordStartIndex = 0; 
    for(let i = 0; i <= message.length; i++) {
      // If it's the end of the message or we hit a space
      if(i === message.length || message[i] === " ") {
        // We go to the next word to reverse that one
      reverseChars(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
      }
  }
  return message;
}

// Step 2: Write a helper method that reverses the 
  // chars in each word to be correct

function reverseChars(message, firstIndex, lastIndex) {
  // Swap the first and the last until we get to middle

  // Go towards the middle
  while(firstIndex <  lastIndex) {
    
    // Swap 1st and last 
    const temp = message[firstIndex]; 
    message[firstIndex] = message[lastIndex]; 
    message[lastIndex] = temp; 
    firstIndex++; 
    lastIndex--; 
  }
}

// Input: const message = [ 'c', 'a', 'k', 'e', ' ',
// 'p', 'o', 'u', 'n', 'd', ' ',
// 's', 't', 'e', 'a', 'l' ];

// reverseWords(message)
// console.log(message.join(''));

// Expected output: 'steal pound cake'




// Is this cafe serving food in the same order people are ordering them? 

// There's a cafe where some customers are saying that people who order 
// after them are getting served first! Big problem. 

// The owner made 3 arrays keeping track of takeOutOrders, dineInOrders, and 
// servedOrders.

// Given all three, write a function to check that service 
// is first-come, first-served. 

// Example input:
// Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 4, 6, 5, 3]
// Output: False 

// Example input: 
// Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 3, 5, 4, 6]
// Output: True

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  // Check if we're serving orders first-come, first-served
  
  // 1st in served must be 1st in dineIn or takeOut 
    // So we're gonna check the 1st order, throw it away as its
    // been accounted for then continue to 2nd served order 
    
  // Then we do this again. So use recursion to meet
    // the base case of everything being checked 
    // Eventually, we will throw out all the eles in servedOrders
    // if the order is first come, first serve
  
  // Edge cases: Empty values in takeOut or dineIn. takeOut or 
    // dineIn are not equal
  
  
  // Recursive base case: We've popped off everything
  if(servedOrders.length === 0) {
    return true; 
  }
    
  // Step 1: Are there orders in takeOut? Check if the 
  // servedOrder[0] == takeOut[0]
    
  if(takeOutOrders.length > 0 && servedOrders[0] === takeOutOrders[0]) {
    
      // Remove 1st order for both and recurse! 
      return isFirstComeFirstServed(takeOutOrders.slice(1), 
      dineInOrders, 
      servedOrders.slice(1));
      
  } 
    
  // Step 2: Are there orders in dineIn? Check if 
  // the servedOrder[0] == dineIn[0]
    
  if (dineInOrders.length > 0 && servedOrders[0] === dineInOrders[0]) {
      
      // Remove 1st order for both and recurse! 
      return isFirstComeFirstServed(takeOutOrders, 
      dineInOrders.slice(1), 
      servedOrders.slice(1));
      
  } 
    
    return false;
    
}

// The time and spece costs for this are O(n2) BECAUSE  
// while most of the equation is constant, we use .slice which 
// costs O(m) where m is the resulting array's size. 
// Since we use .slice twice, essentially we are doing this math: 
  // (n-1) + (n-2) + ... 2 + 1 
    // Where n-1 is the 1st slice and n-2 is the second, giving us 
// O(n2)

// If we want to optimize (ask the interviewer)
// we can replace .slice() with keeping track of indices: 

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

}

