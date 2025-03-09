class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        ch_idx_map = {char: idx for idx, char in enumerate(order)}

        for i in range(len(words) - 1):
            word1, word2 = words[i], words[i + 1]

            for j in range(len(word1)):
                if j == len(word2): return False  #edge: apple, app
                word1Ch, word2Ch = word1[j], word2[j]
                word1Idx = ch_idx_map[word1Ch]
                word2Idx = ch_idx_map[word2Ch]

                if word1Idx > word2Idx:
                    return False 
                if word1Idx < word2Idx:
                    break 
            
        return True

           
