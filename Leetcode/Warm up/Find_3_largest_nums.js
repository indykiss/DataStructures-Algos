



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



