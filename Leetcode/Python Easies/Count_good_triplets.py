

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

# slightly more performant, still O(N^3)
class Solution:
    def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
        count = 0
        for i in range(len(arr)):
            for j in range(i+1, len(arr)):
                a_cond = abs(arr[i] - arr[j]) <= a
                if(a_cond): 
                    for k in range(j+1, len(arr)):
                        b_cond = abs(arr[k] - arr[j]) <= b
                        c_cond = abs(arr[i] - arr[k]) <= c
                        if(a_cond and b_cond and c_cond):
                            count += 1
        return count
        
