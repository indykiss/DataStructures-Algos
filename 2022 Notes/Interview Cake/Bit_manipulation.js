/*
Given the array of IDs, which contains 
many duplicate integers and one unique integer,
find the unique integer.


Minimum time necessary is O(n) because we need to 
look at every element once. Will try to keep that
as worst case too. 

Strat:
Create an object incrementing value whenever we see
the key the 2nd time. Pushing ID as key into object 
whenever we see it first. This would yield O(n)
space as well. 

At the end, use .find() to return the key where 
the value is 1. 

Assume: # of drones always either 1 or 2 

One way to bring down space is to recognize that 
we only need to store 1 or 2. Two options here. 
SO, we can add 1 to value of key when we see it.
Let the second occurence of an integer cancel the 1st. 
SO we want to use XOR: ^ 


Lesson: Practice my hash manipulation. Need to remember
how to access key/value pairs and .set/ .get/ .find

Also learn what's happening at the bit level. 

When I want to "cancel out matching numbers" use XOR. 
Use other operations when I want to multiply or divide
by 2. LEFT SHIFT for multiply by 1. RIGHT SHIFT to divide 
by 2. 

*/

// O(n) time and space
function findUniqueDeliveryIdHash(deliveryIds) {

  // Find the one unique ID in the array
  const hash = new Map();
  
  for(let i = 0; i < deliveryIds.length; i++) {
    
    if(hash.has(deliveryIds[i])) {
      const count = hash.get(deliveryIds[i]) + 1;
      hash.set(deliveryIds[i], count);
    }
    hash.set(deliveryIds[i], 1);
  }

  return [...hash.keys()].find(id => hash.get(id) === 1)
}

// O(n) time and O(1) space!!
function findUniqueDeliveryId(deliveryIds) {

  var uniqueID = 0;
  
  for(let i = 0; i < deliveryIds.length; i++) {
    uniqueID ^= deliveryIds[i];
  }
  
  return uniqueID;
}

