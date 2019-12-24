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