
# Sorting the Sentence

# A sentence is a list of words that are separated by a single space with no 
# leading or trailing spaces. Each word consists of lowercase and uppercase 
# English letters.

# A sentence can be shuffled by appending the 1-indexed word position to 
# each word then rearranging the words in the sentence.

# For example, the sentence "This is a sentence" can be shuffled as 
# "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".


class Solution:
    def sortSentence(self, s: str) -> str:
        arr = s.split()
        ans = [0] * len(arr)
        
        for word in arr:
            idx = int(word[-1]) # grabs last character in the word
            clean = word[0:-1]
            ans[idx-1] = clean
            
        return " ".join(ans)