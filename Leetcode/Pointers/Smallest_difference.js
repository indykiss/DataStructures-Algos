/*
Smallest difference 

Write a function that takes in two arrays and looks for 
one number in each array that have the absolute 
difference closest to zero.

Ex:
[5, 10, 20, 28]
[26, 156, 15]
-> [28, 16]
1st arr's num first. 
Only see 1 pair
*/


function smallestDifference(arr1, arr2) {
	arr1.sort((a,b) => a-b);
	arr2.sort((a,b) => a-b);
	let idx1 = 0,
			idx2 = 0,
			current = Infinity,
			smallest = Infinity;
	let pairing = []; 
	
	while(idx1 < arr1.length && idx2 < arr2.length) {
		let first = arr1[idx1];
		let second = arr2[idx2];
		
		if(first < second) {
			current = second - first;
			idx1++;
		} else if(second < first) {
			current = first - second;
			idx2++
		} else{
			return [first, second];
		}
		if(smallest > current) {
			smallest = current;
			pairing = [first, second];
		}
	}
	return pairing;
}



// Close but not quite:
function smallestDifference(arrayOne, arrayTwo) {
    let smallest = 0;
      let pairing = [];
      for(let i = 0; i < arrayOne.length; i++) {
          let first = arrayOne[i];
          for(let j = 0; j < arrayTwo.length; j++) {
              let second = arrayTwo[j];
              let diff = Math.abs(first - second);
              if(diff < smallest) {
                  smallest = diff;
                  pairing = [first, second];
              }
          }
      }
      return pairing;
  }


  