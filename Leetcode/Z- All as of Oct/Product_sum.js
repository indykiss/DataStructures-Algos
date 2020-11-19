

/*
Product sum 

Algoexpert

Write a function that takes in a special array and returns its product
sum. A special array is a non-empty arr that can have either 
integers or an array of integers. You need to multiply the
nested arrays the level of nests it is. 

ex:
[x, [y,z]] => [x + 2y + 2z]
[2, [3, 4, [5]]] => 2 + 2(3 + 4) + 3(5)

*/


// O(n) time with n being the numbers of elements in the arr
    // O(d) with d being the depth of the nested arrays 
function productSum(array, multiplier = 1) {
	let total = 0;
	
	for(let i = 0; i < array.length; i++) {
		let curr = array[i]
		// found an arr
		if(Array.isArray(curr)) {
			total = total + productSum(curr, multiplier + 1)
		// not an array 
		} else {
			total = total + curr;
		}
	}
	return total * multiplier;
}

