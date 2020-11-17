/* 
Valid Palindrome II
Given a non-empty string s, you may delete at most one character. 
Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
*/



// [a b o p h y b a]
// not passing but close enough. warm up nov
var validPalindrome = function (s) {
   
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, ""); 
    
    let left = 0, 
        right = str.length - 1,
        canSkipOne = true; 
    
    while(left < right) {
        
        if(str[left] !== str[right]) {
            if(canSkipOne) {
                if(str[left + 1] === str[right] 
                  && str[left+2] === str[right - 1]) {
                    left++;
                    canSkipOne = false;
                } else if(str[right - 1] === str[left]) {
                    right--; 
                    canSkipOne = false;      
                }
            } else {
                return false;
            }
        } else {
            left++; 
            right--;                
        } 
    }
    return true;   
}


/*
"aba" = > true. auto a palindrome
"aabbaad" => true. delete 1 to get a palindrome 
"aabb" => false

strat:
- two pointers to start at front and end 
- go until they meet in the middle
    - note difference between even # length & odd # length 
- add a toggle for isOneLetterOff boolean
*/


// Like 20 mins and still wrong :( FUCK. THIS WAS AN EASY. Nov 
var validPalindrome = function (s) {
    let l = 0, 
        r = s.length-1, 
        weCanHaveOneOff = true;
    
    while (l < r) {
        if (s[l] === s[r]) {
            l++; 
            r--;
        }
        else if (s[l+1] === s[r] && 
                 s[l+2] === s[r-1] && weCanHaveOneOff) {
            l++;
            weCanHaveOneOff = false;
        }
        else if (s[l] === s[r-1] && weCanHaveOneOff) {
            r--; 
            weCanHaveOneOff = false;
        } else {
            return false;
        }
    }
    return true;
}


// Oct, FB. Ya not great. Do this again 
var validPalindrome = function (s) {
    let l = 0, 
        r = s.length-1, 
        weCanHaveOneOff = true;
    
    // While our left pointer is left of the right pointer 
    while (l < r) {
        // OK so we actually have matching letters so we move up & down 
        if (s[l] === s[r]) {
            l++; 
            r--;
        }
        // sitch: "a d b c b a"
            // l = 1, so we're saying b == b 
        else if (s[l+1] === s[r] && 
            // AND l = 3 (c) == r = 3 (c)
            // edge case when we have a middle char? idk
                 s[l+2] === s[r-1] && weCanHaveOneOff) {
            l++;
            weCanHaveOneOff = false;
        }
        // sitch: "a b c b d a"
            // we're saying that b == b; s[1] == s[3]
            // and we still have 1 correction available
        else if (s[l] === s[r-1] && weCanHaveOneOff) {
            // we want to skip over the wrong char on right side
            r--; 
            weCanHaveOneOff = false;
        } else {
            return false;
        }
    }
    return true;
};




var validPalindrome = function(s) {
        // We are going to loop through the 1st half of s
        for(let i = 0; i < s.length / 2; i++) {
            // Make a variable that checks the 
            let j = s.length - i - 1;
            if(s[i] != s[j]) {
                return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j))
            }
        }
        return true;
    };
    
    // Step: Make a helper function that let's us cut a character
const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);


// Step: Checks for palindrome 
const isPalindrome = (s) => s === s.split("").reverse().join("");