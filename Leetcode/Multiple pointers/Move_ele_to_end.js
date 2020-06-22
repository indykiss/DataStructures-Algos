/*
Move element to end 

You're given an array of nums and a num.
Write a function that moves all instances
of this num to the end of the array. 
Changes in place. 

Ex:
[2,1,2,2,3,4,2], 2
[1,3,4,2,2,2,2]

Use two pointers starting at start and end
and increment if the start is the target
but the end isn't. 

Algoexpert
*/



// not sure why this works. got the gist, but lines 27 - 29 I'm meh about
function moveElementToEnd(array, toMove) {
	let l = 0;
	let r = array.length - 1;
	while(l < r) {
		while(l < r && array[r] == toMove) r--;
		if(array[l] == toMove) swap(l, r, array);
		l++;
	}
	return array;
}

function swap(l, r, array) {
	const temp = array[r];
	array[r] = array[l];
	array[l] = temp;
}

// Not quite there:
function moveElementToEnd(array, toMove) {
	let left = 0;
	let right = array.length - 1;
	
	while(left < right) {
		let leftNum = array[left];
		let rightNum = array[right];
		if(leftNum == toMove && rightNum != toMove) {
			[leftNum, rightNum] = [rightNum, leftNum];
			left++;
			right--;
		} else if(leftNum == toMove && rightNum == toMove) {
			right--;
		} else if(leftNum != toMove && rightNum == toMove) {
			left++;
		} else if(leftNum != toMove && rightNum != toMove) {
			left++;
			right--;
		} 
	}
	return array;
	
}






// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
