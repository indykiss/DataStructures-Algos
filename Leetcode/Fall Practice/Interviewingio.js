/*
Secret Santa

Build an algo that takes in an input of an array of names and 
outputs a hash of names with their assigned secret santa recipients. 

People can't get themselves. 
Every name should have an equal chance of being picked (it's random).

Edge cases:
- Issue when there is an odd number of input eles and we have the even 
people picking each other. Ex: A:B, B:C, D: undefined
*/


// ["Kat", "Fred", "Joe"]
// Output: {Kat: Fred, Fred:Joe, Joe: Kat}

function pickFromSet(set, offLimits) {
    // Pick randomly from set, but don't pick "offLimits" 
   let newSet = new Set(set);
   newSet.delete(offLimits);
   let min = 0,
        max = newSet.size;
   
   const randInt = min + Math.floor(Math.random() * max);
   let randPicker = Array.from(newSet)[randInt]
 
   return randPicker  
 }
 
 function santaSorter(arr) {
   let result = {};
   let assignedPpl = new Set(arr)
     
   for(let i = 0; i < arr.length; i++) {
 
     let assignedPerson = pickFromSet(assignedPpl, arr[i]);
     console.log(assignedPerson)
     
     result[arr[i]] = assignedPerson;
     assignedPpl.delete(assignedPerson); 
   }
   return result;
 }
 
 santaSorter(["A", "B", "C"]);