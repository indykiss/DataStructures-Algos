

// Algoexpert: Run length encoding

/*
Strategy:
- Vars: count, res str, currLetter to track which
letter we're counting
- Iterate thru nums
	- If curr === currLetter, count++ 
	- If curr !== currLetter, res += count + currLetter (letter we were tracking)
	Revert count to 1 and chane currletter to curr 
		- BUT note, while count > 10, [could be 100]
				- res += 9 + currLetter
				- count = count - 9

Edge:
- Mixed cap? AaA => 3A or 1A1a1A ? 
- Nums interupt? AA11AA => 2A212A ?
*/


// use an arr fixes prev 1 off error
function runLengthEncoding(string) {
	let res = [], 
			count = 1; 
	
	for(let i = 1; i < string.length; i++) {
		let char = string[i], 
				prev = string[i-1];
		if(char !== prev || count === 9) {
			res.push(count.toString())
			res.push(prev); 
			count = 0; 
		}
		count++;
	}
	// add the remaining count & last char
	res.push(count.toString()); 
	res.push(string[string.length-1]);	
	return res.join('');
}



// off by 1 error somewhere? Idk, letting it go 
function runLengthEncoding(string) {
	let res = "", 
			count = 1; 
	
	for(let i = 1; i < string.length; i++) {
		let char = string[i], 
				prev = string[i-1];
		if(char !== prev || count === 9) {
			res += count;
			res += char; 
			count = 0; 
		}
		count++;
	}
	// add the remaining count & last char
	res += count; 
	res += string[string.length-1]	
	return res;
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
