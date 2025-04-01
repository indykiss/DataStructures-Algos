


/*
Goat Latin

A sentence S is given, composed of words separated by spaces. 
Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up 
    language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" 
to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove 
the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
Add one letter 'a' to the end of each word per its word index 
in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the 
second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S 
to Goat Latin. 


Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
*/


/*
Strategy:
- If word[0].isVowel(), add "ma" to end of word 
- If !word[0].isVowel(), remove word[0] and add it to end + ma
- As we iterate thru sentence, always add an increasing num of as to
the end of the word. 
*/

var toGoatLatin = function(S) {
    let arr = S.split(" "),
        res = "",
        aCounter = 1;
    
    for(let word of arr) {
        let newWord = "";
        
        if(isVowel(word[0])) {
            newWord = word + "ma";
        } else {
            newWord = word.substring(1) + word[0] + "ma"   
        }
        newWord = newWord + 'a'.repeat(aCounter);
        aCounter++;
        
        res = res + newWord + " ";
    }
    return res.trim();
};

var isVowel = function(char) {
    let vowelsArr = ["A", "E", "I", "O", "U", "a", "e",
                    "i", "o", "u"];
    for(let letter of vowelsArr) {
        if(letter === char) {
            return true;
        }  
    }
    return false;
}
