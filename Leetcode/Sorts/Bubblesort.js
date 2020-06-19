/*
Do a bubble sort. 

Take an array and returns a sorted array. 

As we go through the array, we swap the 
numbers that are out of order. 
We "bubble" up or bubble down the number
until it's all sorted. 

*/


function bubbleSort(arr) {
	let isSorted = false;
	let counter = 0;
	while(!isSorted) {
		isSorted = true;
		for(let i = 0; i < arr.length - 1 - counter; i++) {
				if(arr[i] > arr[i+1]) {
					[arr[i], arr[i+1]] = [arr[i+1], arr[i]]
					isSorted = false;
				}
			}
		counter++
	} 
	return arr;
}