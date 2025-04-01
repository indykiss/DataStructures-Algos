

# Shortest completing word 

# Literally doesnt make sense. Stop doing this one 

import copy

class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        # build a clean license plate string
        clean = ""
        for char in licensePlate: 
            if char.isalpha():
                clean += char.lower()
        
        # freq hash for num of letters in clean plate 
        freq = {}
        for char in clean: 
            freq[char] = freq.get(char, 0) + 1

        # checks if word is a match
        def checkMatch(word, freqCopy):
            for ch in word: 
                if ch in freqCopy:
                    freqCopy[ch] -= 1
                    if freqCopy[ch] == 0:
                        del freqCopy[ch]
            return len(freqCopy) == 0
        
        minLen = float('inf')
        ans = ""
        
        for word in words: 
            freqCopy = copy.copy(freq) 
            if checkMatch(word, freqCopy): 
                if len(word) < minLen:
                    ans = word 
                    minlen = len(word)
                    
        return ans
            
            

        