

/*
Caesar cipher encryptor 

Given a string and a key, write a function that
return a new string that shifts each letter in 
the str by k number of positions in the alphabet. 

The string will wrap around the alphabet. 

Ex: "xyz", 2 => "zab"
*/

function caesarCipherEncryptor(string, key) {
	const newLetters = [];
	const newKey = key % 26;
	for(const letter of string) {
		newLetters.push(alphabetShift(letter, newKey));
	}
	return newLetters.join('');
}

function alphabetShift(letter, key) {
	let letterCode = letter.charCodeAt()
	let newCode = letterCode + key;
	
	if(newCode <= 122) {
		return String.fromCharCode(newCode);
	} else {
		return String.fromCharCode(96 + (newCode % 122));
	}	 
}



// Rotational Cipher. Super wrong 
function alphabetShift(letter, key) {
	let letterCode = letter.charCodeAt()
	let newCode = letterCode + key;
  
	if(newCode <= 122) {
		return String.fromCharCode(newCode);
	} else {
		return String.fromCharCode(96 + (newCode % 122));
	}	 
}


function rotationalCipher(input, rotationFactor) {
  const newLetters = [];
	const newKey = rotationFactor % 26;
	for(const letter of input) {
    // Check that is alphanumeric ? Doesn't work
    // if(letter !== letter.toLowerCase || letter !== letter.toUpperCase
    //  || letter >= 0 || letter <= 9) {
    //   newLetters.push(letter)
    // } else {
      newLetters.push(alphabetShift(letter, newKey));
    // }
 	}
	return newLetters.join('');
  
  // Non alphanumeric chars stay the same
  
}




// SUPER WRONG 
// AND TOOK ME FUCKING FOREVER


function rotate(char, k) {
  
	// Wouldnt do this by hand in interview, has to be a faster way
	// let letterMap = {a: 0, b: 1, c:2, d:3, e:4, f:5, g:6,
	//                 h: 7, i:8, j:9, k:10, l:11, m:12, n:13, o:14, p:15,
	//                 q:16, r:17, s:18, t:19, u:20, v:21, w:22, x:24, y:24, z:25};
	
	let letterMap = ["a","b","c","d","e","f","g","h","i","j","k","l",
					 "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	
	// If is a number 
	if(char >= 0 && char <= 9) {
	  let numRotated = char + k; 
	 
	  if(numRotated >= 10) { 
		numRotated = numRotated % 10; 
	  }
	  return numRotated; 
	} else {
	// If is a letter 
	  let lowerChar = char.toLowerCase(),
	  let letterRotatedIndex =  k // + get char's index
		  
	  if(letterRotatedIndex <= 25) {
		if(char === char.toUpperCase()) {
		  return letterMap[letterRotatedIndex].toUpperCase();
		}
	  } else {
		let rotatedMapLeterIndex = letterRotatedIndex - 26;
		  if(char === char.toUpperCase()) {
			return letterMap[rotatedMapLeterIndex].toUpperCase();
		  }    
	  }
	}
  }
  
  
  
  function rotationalCipher(input, rotationFactor) {
	let res = ""; 
	
	for(let i = 0; i < input.length; i++) {
	  let char = input[i];
	  
	  let rotatedChar = rotate(char, rotationFactor);
	  
	  res += rotatedChar;
	}
	return res; 
  }