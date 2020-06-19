


/*
Find the three largest numbers in an array.
*/

// O(n) time and O(1) space
function findThreeLargestNumbers(array) {
	const three = [null, null, null];
	for(const num of array) {
		updateLargest(three, num)
	}
	return three;
}

function updateLargest(three, num) {
	if(three[2] === null || num > three[2]) {
		shiftAndUpdate(three, num, 2);
	} else if(three[1] === null || num > three[1]) {
		shiftAndUpdate(three, num, 1);
	} else if(three[0] === null || num > three[0]) {
		shiftAndUpdate(three, num, 0);
	}
}

function shiftAndUpdate(array, num, index) {
	for(let i = 0; i <= index; i++) {
		if(i === index) {
			array[i] = num;
		} else {
			array[i] = array[i + 1];
		}
	}
}




// close but not there yet
function findThreeLargestNumbers(array) {
	let largest = 0;
	let second = 0;
	let third = 0; 
	
	for(let i = 0; i <= array.length; i++) {
		let curr = array[i];
		if(curr > largest) {
			largest = curr;
		} else if(curr > second && curr < largest) {
			second = curr;
		} else if(curr > third && curr < second) {
			third = curr;
		}
	}
	return [third, second, largest];
}



