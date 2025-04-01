
# Group anagrams 

# Given an array of strings strs, group the anagrams
# together. You can return the answer in any order.

# Input: strs = ["eat","tea","tan","ate","nat","bat"]
# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

# Strategy:
# masterDict: { sorted string : [word1, word2] }
# Iterate through words: 
# 	- sorting all the chars in the string 
# 	- if sortedString is in masterDict, append this word to this value 
# res = []
# for val in masterDict.values(): 
# 	res.append(val)
# return res 


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dictionary = {}
        
        for word in strs: 
            sortedList = sorted(word)
            sortedStr = "".join(sortedList)
            if sortedStr in dictionary:
                dictionary[sortedStr].append(word)
            else: 
                dictionary[sortedStr] = [word]
                    
        res = []
        for val in dictionary.values(): 
            res.append(val)
            
        return res 
        


# # JS: 
# var groupAnagrams = function(strs) {
#     let mapping = {}; 
    
#     // Make hash of word : [anagram1, angram2]
#     // word being in alphabetic word
#     for(let str of strs) {
#         // convert str to alphabetic order
#         let sorted = str.split('').sort().join('');
#         // add to hash 
#         if(mapping[sorted]) {
#             mapping[sorted].push(str); 
#         } else {
#             mapping[sorted] = [str]; 
#         }
#     }
    
#     // get array of hash keys
#     let res = []; 
#     for(let arr in mapping) {
#         res.push(mapping[arr]);
#     }
#     return res;
# }



# // Attempt : Bad
# // var groupAnagrams = function(strs) {
# //     let res = [[strs[0]]];
# //     for(let str of strs) {
# //         let sortedStr = str.split('').sort((a,b) => a - b).join('');
# //         let newAnagram = true;
# //         for(let i = 0; i < res.length; i++) {
# //             let s = res[i]; 
# //             let amIMatch = s[0].split('').sort((a,b) => a - b).join('');
# //             if(amIMatch === sortedStr) {
# //                 s.push(str);
# //                 newAnagram = false; 
# //             } 
# //         }
# //         if(newAnagram) {
# //             res.push(str);
# //             newAnagram = false;
# //         }            
# //     }
# //     return res;
# // };



