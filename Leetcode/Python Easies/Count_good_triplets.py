

# Strategy
# 3 nested loops, count any matches that fit the description 

class Solution:
    def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
        matches = 0 
        for i in range(len(arr)):
            for j in range(i+1, len(arr)):
                for k in range(j+1, len(arr)): 
                    fit1 = abs(arr[i] - arr[j]) <= a
                    fit2 = abs(arr[j] - arr[k]) <= b
                    fit3 = abs(arr[i] - arr[k]) <= c
                    
                    if fit1 and fit2 and fit3: 
                        matches += 1
        return matches
                    
        