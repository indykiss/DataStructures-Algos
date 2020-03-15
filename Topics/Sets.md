## Sets 

A set is like a hash map except it only stores keys, without values.

Sets often come up when we're tracking groups of items—nodes we've visited in a graph, characters we've seen in a string, or colors used by neighboring nodes. Usually, we're interested in whether something is in a set or not.

Sets are usually implemented very similarly to hash maps—using hashing to index into an array—but they don't have to worry about storing values alongside keys.

    lightBulbs = new Set(["incandescent", "compact fluorescent", "LED"]);

    lightBulbs.has("LED");  // true
    lightBulbs.has("halogen");  // false

A set is a collection of any type of element where none of the elements are duplicated and the order isn't important. 

Let's say we want to remove the duplicates in an array. 
We can do a loop where we make a new arr, go through elements in inputted arr, if it doesn't exist in new arr,
push into new arr. 
OR, and this is much better, we use a set and spread operator to make a new arr: 

    var array = ["Mike","Matt","Nancy","Adam","Nancy"];
    let newArr = [...new Set(array)]
    console.log(uniq)
