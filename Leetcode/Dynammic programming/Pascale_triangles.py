

# Pascal's Triangle I && II 
# Given an integer numRows, return the first numRows of Pascal's triangle.

# In Pascal's triangle, each number is the sum of the two numbers directly above it

# Input: numRows = 5
# Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

# Space and time: O(numRows^2)
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        triangle = [[1]]
        for row_i in range(1,numRows):
            # row starts with 1
            row = [1]
            # add the nums above this spot
            # this part is DP: 
            for col_i in range(1, row_i):
                prev = triangle[row_i-1][col_i-1] + triangle[row_i-1][col_i]
                row.append(prev)
            # row ends with 1
            row.append(1)
            triangle.append(row)
        return triangle



# Given an integer rowIndex, return the rowIndexth (0-indexed) 
# row of the Pascal's triangle.

# In Pascal's triangle, each number is the sum of the two numbers directly above it:
# Input: rowIndex = 3
# Output: [1,3,3,1]

class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        if rowIndex == 0: return [1]
        if rowIndex == 1: return [1,1]
        dp = [1] * (rowIndex+1)
        dp[0] = [1]
        dp[1] = [1,1]
        dp[2] = [1,2,1]
        
        for i in range(3, rowIndex+1):
            tmp = [1]
            for j in range(1, i):
                num = dp[i-1][j-1] + dp[i-1][j]
                tmp.append(num)
            tmp.append(1)
            dp[i] = tmp
            
        return dp[rowIndex]
        
        