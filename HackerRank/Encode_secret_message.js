/*
You're trying to determine if you can cut out words from a magazine to make a collage.ie note to a friend. 
The words you're trying to cut out are case sensitive. They must be the exact word in order to work. 

Strat:
- Create two hashs from the words we have in the magazine (we want to count how many times we have each word. Can't reuse words)
- Loop through the note hash, checking if the magazine has the key we're looking for. If it does, we decrement that value
- If the magazine doesn't have the word we need from our note, we know immediately to return no
- After the loop, if the magazine has all the words we need for our note, return yes
*/


function checkMagazine(magazine, note) {
    const magazineHash = hashMaker(magazine);
    const noteHash = hashMaker(note);

    for(let i = 0; i < noteHash; i++) {
        console.log(noteHash[i])
        if(magazineHash.hasOwnProperty(note)) {
            magazineHash[note] = magazineHash[note] - 1;
        } else {
            return 'No';
        }     
    }    
    return 'Yes';
}

function hashMaker(str) {
    const hash = {};
    for(let i = 0; i < str.length; i++) {
        if(hash[str[i]]) {
            hash[str[i]]++;
        } 
        hash[str[i]] = 1;
    }
    return hash;
}
