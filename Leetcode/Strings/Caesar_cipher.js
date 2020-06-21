

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
