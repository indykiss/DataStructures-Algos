/*
Search Suggestions System
Given an arr of products (strs) and a search term (str), we want to design
a system that suggests at most 3 product names from products after each
character of search term is typed. 
Suggested products should have the same common prefix with the search term. 
If there's more than 3 that exist, we list the top 3 lexographically minimum prods. 
Lexographically minimum = just sort the input. If interviewer is like,
"yo its more complicated" then we can deal with that later.

Return a LIST OF LISTS of the suggest products after each char of searchWord is typed 

Strategy:
- Sort products & create answer arr
- Loop through searchWord. 
    - For each character check into products to see if the product's 1st letter = same as 
    searchWord's 1st letter (ith but we say 1st for this)
    - As long as have less than 3, move the product into the arr
    - We make a next arr; like a temporary arr to hold the remaining prods that fit
        As we loop through products, we narrow down the words that fit
            Ex: We loop at the 2nd letter, that will filter the prefix down
- Pop the 1st three of those into answer, in their own array 
- Return that answer
*/


var suggestedProducts = function(products, searchWord) {
    let answer = [];
    products = products.sort();    
    for(let i = 0; i < searchWord.length; i++) {
        const next = [];
        answer.push([]);
        
        for(let j = 0; j < products.length; j++) {
            if(products[j][i] === searchWord[i]) {
                next.push(products[j]);
                if(answer[i].length < 3) {
                    answer[i].push(products[j]);
                }
            }
        }
        products = next;
    }
    return answer;
};
