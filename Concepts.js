// Concepts to remember

// Read me! As much as possible: https://www.geeksforgeeks.org/data-structures/


// Sets! A set is a collection of any type of element where none of the elements are duplicated and the order isn't important. 

// Let's say we want to remove the duplicates in an array. 
// We can do a loop where we make a new arr, go through elements in inputted arr, if it doesn't exist in new arr,
// push into new arr. 
// OR, and this is much better, we use a set and spread operator to make a new arr: 

var array = ["Mike","Matt","Nancy","Adam","Nancy"];
let newArr = [...new Set(array)]
console.log(uniq)
