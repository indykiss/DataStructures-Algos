
/*

Binary search 

You have a sorted aray and want to find a target number. 

*/


function binarySearch(arr, target) {

	arr = arr.sort((a,b) => a-b); 

	let start = 0, 
		end = arr.length - 1; 

	while(start <= end) {
		let mid = Math.floor(start + (end-start) / 2); 
		if(target === arr[mid]) {
			return mid; 
		}
		if(target > arr[mid]) {
			start = mid + 1; 
		} else if(target < arr[mid]) {
			end = mid -1; 
		}
	}
	return -1; // dont have target in arr 
}




// Practice. Oct, fb/ bloomb

function binarySearch(arr, target) {

	arr = arr.sort(); // sort arr so its always ascending order
	// O(n logn)

	let start = 0,
		end = arr.length - 1; 

	while(start <= end) {

		let mid = Math.floor(start + (end-start) / 2); 

		if(target === arr[mid]) {
			return mid;
		}

		if(target < arr[mid]) {
			end = mid - 1; // update ceiling if key is left half
		} else if (target > arr[mid]) {
			star = mid + 1; // update floor if key is right half
		}
	}

	return -1 // we dont have the ele
}
// O(n log n) time. Space: O(1) ? 
// if we can assume the arr IS ALREADY SORTED then 
// time is O(log n)





// O(log n) time and O(1) space
    // Searches are usually less than O(n)
    // since we're usually looking at less than the number of 
    // elements in the array
function binarySearch(array, target) {
	return binarySearchHelper(array, target, 0, array.length - 1)
}

// [3,4,5,6,7,8] target: 7
function binarySearchHelper(array, target, lowerBound, upperBound) {
	while(lowerBound <= upperBound) {
		const mid = Math.floor((lowerBound + upperBound) / 2)
		const aprox = array[mid];
		// low: 3, up: 8 
		// aprox: 6
		if(aprox === target) {
			return mid;
		} else if(target < aprox) {
			upperBound = mid - 1;
		} else {
			lowerBound = mid + 1;
		}
	}
	return -1;
}



// Recursive solution:
function binarySearch(array, target) {
	return binarySearchHelperRec(array, target, 0, array.length - 1)	
}
function binarySearchHelperRec(array, target, lowerBound, upperBound) {
	if(upperBound < lowerBound) return -1;
	const aprox = Math.floor((lowerBound + upperBound)/2);
	if(target == array[aprox]) {
		return aprox;
	} else if(target < array[aprox]) {
		return binarySearchHelperRec(array, target, lowerBound, aprox - 1);
	} else {
		return binarySearchHelperRec(array, target, aprox + 1, upperBound);
	}
}


// Recursive practice:
function binarySearch(array, target) {
	return binarySearchHelperRec(array, target, 0, array.length - 1)	
}
function binarySearchHelperRec(array, target, lowerBound, upperBound) {
	if(upperBound < lowerBound) return -1;
	const aprox = Math.floor((lowerBound + upperBound)/2);
	if(target == array[aprox]) {
		return aprox;
	} else if(target < array[aprox]) {
		return binarySearchHelperRec(array, target, lowerBound, aprox - 1);
	} else {
		return binarySearchHelperRec(array, target, aprox + 1, upperBound);
	}
}

