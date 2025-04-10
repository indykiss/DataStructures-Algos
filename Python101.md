# Table of contents
1. [Strs & Arrs](#strs&arrs)
2. [Doubles](#doubles)
3. [Pointers](#pointers)

## Strs <=> Arrs <a name="strs&arrs"></a>
```
Arr => Str
    return "".join(["a","b"])  # "ab"
Str => Arr
    return list("str")         # [s,t,r]
Sentence => Arr
    return "str st".split()    # [str, st]
    return "s,t".split(,)      # [s, t]

# Convert num -<=> char
ord(character) = character's unicode str
    ord(a) = 97 
    ord(a) + 1 = 98 
chr(number) = string's unicode str
    chr(97) = "a"
    chr(98) = "b"
```
## Strs 
```
Find / Replace
    return "hell".find(e)  # idx of 1. if no e, -1
    return str.replace(this, withThat)
        s2 = "hi there"
        print(s2.replace("there", "bye")) => "hi bye"
Slice
    return str[start:stop_noninclusive:step] 
Reverse
    return str[::-1]     
    This works because of how slicing works in Python, Start at beg, End at end, because both are ommitted, and move with -1 steps.
Sort, by using arr sort:
    sortedList = sorted(str)
    return "".join(sortedList)
Random ones:
    return len(str)
    return str.count(" ")  # Counts the number of spaces in the str
    return str.upper() / str.lower()
    s = "world"
    return "hello ".format(s)  # Insert var into str
```
### Arrs
```
k = sorted(arr)               # ascending order
m = sorted(arr, reverse=True) # descending order
arr.sort() returns none, just sorts in place

list(str)                  # Split a str into n arr on every CHARACTER
"".join(arr)               # Arr -> str
"THING".join(arr): Joins with separator:
    arr = [hi,there]
    "-".join(arr)          # "hi-there"

sum(arr)                   # O(n), Adds all nums in arr 
max(arr) - max(num1, num2) - min(arr) 
    Finds the maximum/ minimum in an arr or between 2 vals

arr.pop(0) / del arr[0]   # To pop the ele in the front of a list
arr.insert(idx, num)      # Add ele to arr at specific idx

# Random tricks:

Sorting nested lists:
    next(itr(dict))
        Returns the 1st key in the dictionary or list 

    intervals = [["k", 1], ["a", 5]]
    intervals.sort(key=lambda x: x[0]) # sort by 1st ele 
    intervals = [["a", 5], ["k", 1]]

    smallestWord = min(words, key=len) # find shortest word in an arr of words
```
## Loop through Arrs 
```
    arr = [cat, dog, fish]

Access every ele in arr
    for ele in arr:
        print ele      # cat, dog, fish
Need idx, ex: accessing 2 arrs in parallel or modifying arr in-place
    for i in range(len(arr)):
        print(i)       
Need index, go backwards
    for i in range(len(arr),2,-2):
        print(i)       #
Need both ele + idx 
    for i, item in enumerate(arr):
        print(i, item) # 0 10, 1 8, 2 4, 3 4
Want more control over loop flow
    i = 0
    while i < len(arr):
        #do stuff
        i += 1
Create new list by transforming elements
    upper_animals = [ele.upper() for ele in arr]
Map: Apply a fn to each ele
    def shout(word):
        return word.upper()
    shouted = list(map(shout, arr))
Select some stuff in arr
    long_words = list(filter(lamda f: len(f) > 5, arr))
Manual control over iteration
    stuff_iter = iter(arr)
    print(next(stuff_iter)) # just get the 1st ele
    # do a bunch of stuff
    print(next(stuff_iter)  # now next ele in arr
 
```
## Loop through dictionaries 
```
```
## Two Pointers <a name="pointers"></a>
```
Two pointers: one input, opposite ends
def fn(arr):
    left = ans = 0
    right = len(arr) - 1
    while left < right:
        # do some logic here with left and right
        if CONDITION:
            left += 1
        else:
            right -= 1    
    return ans
```
```
Two pointers: two inputs, exhaust both
def fn(arr1, arr2):
    i = j = ans = 0
    while i < len(arr1) and j < len(arr2):
        # do some logic here
        if CONDITION:
            i += 10
        else:
            j += 1
    while i < len(arr1):
        # do logic
        i += 1
    while j < len(arr2):
        # do logic
        j += 1
    return ans
```
## Sliding window
```
def fn(arr):
    left = ans = curr = 0
    for right in range(len(arr)):
        # do logic here to add arr[right] to curr
        while WINDOW_CONDITION_BROKEN:
            # remove arr[left] from curr
            left += 1
        # update ans
    return ans
```
## Build a prefix sum
```
def fn(arr):
    prefix = [arr[0]]
    for i in range(1, len(arr)):
        prefix.append(prefix[-1] + arr[i])
    return prefix
```

#HELLO FUTURE INDY I AM HERE


# Num / char handy built in 
ord(char)
    Finds the unicode of a character
    Unicode is an interger representation of chars and 
    punctuation 
    Helps us do things like shift chars in the alphabet:
        "a1c" => "abc"
        We will use ord(char) + num to find the 'b'
        Then use char() to make the unicode num into a char 

.gcd(n1, n2)
    Finds the greatest common factor between two nums
        .gcd(8, 24) -> 8
        .gcd() 
import math
math.ceil(float)
    rounds a number up
math.floor(float) OR math.round(float)
    rounds a number down
math.sqrt(9) = 3 
math.pow(2,3) = 8

range(start, end)
numbers = range(5, 10) is list of numbers 5 -> 9

# Simple math 
    5/2 = 2.5
    5//2 = 2 (rounds down, integer)
    -3//2 = -2 
    int(-3/2) = -1 

# Modulo = getting remainder 
        10 % 3 = 1 is remainder
    weird negative:
        -10 % 3 = 2 is remainder for some garbage reason 
    fix weird negative:
        import math 
        math.fmod(-10 % 3) = -1

# Iterate through array, forward and back
    for i in range(5):
        print(i) # 0,1,2,3,4
    for i in range(1,6):
        print(i) # 0,1,2,3,4
    for i in range(5,1,-1):
        print(i) # 5,4,3,2
    for i in range(10,2,-2):
        print(i) # 10,8,6,4
    arr = [10,8,4,2]
    for i, item in enumerate(arr):
        print(i, item) // 0 10, 1 8, 2 4, 3 4

# Sorting a dictionary based on its values: sorted(dict.items()) as iterate
Return k most freq eles in arr
    freq = {8: 1, 9: 3, 7: 4}
    res = []

    for key, val in sorted(freq.items()):
        if i <= k:
            res.append(key)
            i += 1  
    return res
BUT REALLY USING A HEAP IS THE RIGHT ANSWER FOR K FREQUENT Qs


# Sorting an array by increasing frequency 
# Use a frequency dictionary, then custom sort (line 136)
def frequencySort(self, nums: List[int]) -> List[int]:     
    c = {}
    for num in nums:
        c[num] = c.get(num, 0) + 1
        
    nums.sort(reverse=True)  # edge case for decreasing order
    nums.sort(key=lambda x: c[x])
    return nums


# Build a frequency dictionary quickly:
    freq = {}
    for num in nums:
        freq[num] = 1 + freq.get(num, 0)
    # freq: {9: 5, 8: 2}

# Adding a char or a space x number of times:
    s = ""
    s += "hi" * 3
    s = "hihihi"

# Check is a char is a number:
isnumeric

Check is a char is A-Z:
isalpha


# Converting data types
str(integer)
    Returns a STRING from an integer
    Much better than chr()

chr(integer)
    Returns a character from an integer

int(str)
    Returns an integer from a string

format(num, 'b').zfill(32)
    Number to binary AND adds all 32 zeros so we can 
    count for big numbers too 


# Queue / Deque
Deque = double ended queue
append / appendleft
pop / popleft 
[0] first / [-1] last ele

# Formatting strings 
How to add variables into strings:

Strings:
    name = "Indy"
    print(f"Hello, {name}") 
    "Hello, Indy"



# Random
Returns all the text in the file
    file1 = a text file 
    file1.read() returns all the text in the file

Opening a file from a different location.
Use pwd to find the path
    open_file = open("/Users/UserName/Folder/file1.txt)
Remember, need to .close() a file after opening it if we're trying 
to delete it

# Bitwise 
IF we have to do some crazy "find the only non-dupe in set"
    XOR -> inequality detector 
        arr = [2,1,2,1,3]
        a = 0
        for i in arr:
            a ^= i
        return a 
    XNOR -> equality detector

# Lamdas


# Two possible values for a variable
    val1 = l1.val if l1 else 0
        Like JS's: let val1 = l1.val ? l1 : 0

# Loops 
Basic for loop with index:
    for(let i = 0; i < nums.length; i++)
    ==
    for i in range(len(nums))

If we want to change our for loop's increment:
    for(let i = 0; i < nums.length; i+=2)
    == 
    for i in range(0, len(nums), 2)

Basic for/ in, no index:
    for char in/of arr:
    ==
    for char in arr:

Key, val through a dictionary:
    dic = {'1':"hi", '2':"bye"}
    
    for key, val in dic.items():
        print(key) # 1
        print(val) # hi

Reverse loop, from end of arr to front of arr 
    arr = ["c", "b", "a"]
    for i in range(len(digits)-1, -1, -1):
        print arr[i]
            # a b c 


# Dynammic programming 
1. Always has a lookup table
    - memoization for ex
2. Use past values to get current solution

Steps:
1. Recursion
2. Memoization to store previous vals
3. Bottom up
    - Alternative to recursion! 
    - Better because it's much faster (no recursion)
    Basically:
        def fib_bottom_up(n):
            if n == 1 or n == 2:
                return 1 
            dp = [] * n+1
            dp[1] = 1
            dp[2] = 1
            for i in range(3, n):
                dp[i] = dp[i-1] + dp[i-2]
            return dp[n]

# Data types and logic
JS => Python logic
    || => or
    && => and
    !  => not 
    in => in 
        We can do ```"a" in [a,b,c]``` returns true
        Works in strings, tuples, lists, dictionaries
        Technically JS has "in" but it sucks, only works w/ objs. 
        Python's "in" is v good, works for a lot

Comparison operators are the same. Just python doesn't have ===
Bc python doesn't force coercion ("a" + 9 = "a9" in JS)
== > < <= >= != all the same

Python data types: float, int, string, boolean, none
    No BigInt, no undefined. 
    Null (JS) is None (Python)

# Math in Python  - remember PEMDAS
print(10 - 2)
print(10 + 2)
print(10 / 3) => 3.33
    One / gives us division float
print(10 // 3) => 3
    Double // rounds division to int 
print(10 % 3) => 1
print(10 ** 3) => 1000 
    10 to the power of 3 

# Checking even and odd in python 
Even:
    if num % 2 == 0
Odd:
    if num % 2 == 1

# Regex in Python
import re
regex = re.compile(r"\d\d\d\d")
text = "Your id is 4933"
match = regex.search(text)
start, end = match.start(), match.end()
found = text[start:end] # 4933

# Instance operators 
Actually kinda important, but I'm mentally done
Come back to this :(

Python instanceof


# Built in functions
Checking type:

isinstance(9, int) => true 
isinstance(tom, Person) => true. Tom is obj, person class
isinstance("cat", str) => true

Other topics to cover:
https://www.valentinog.com/blog/python-for-js/ 

Raising exceptions, sychronous, commenting, etc


# Converting data types 
We can convert str -> int, int -> str, etc, by using these:
    int()
    float()
    str()
    bool()

Ex:
    i1 = input("First: ") takes a num
    i2 = input("Second: ") takes a num
    sum = float(i1) + float(i2)
    print("Sum = " + str(sum))

Compound Assignment Operators
Operator
Description
Syntax
Results
x=7 and y=4

+=
Add and assign: Add the right-side operand with the left-side operand, and assign the result to the left operand (x = x + y)
x += y    
x = 11

-=
Subtract and assign: Subtract the right-side operand from the left-side operand and assign the result to the left operand (x = x - y)
x -= y  
x = 3

*=
Multiply and assign: Multiply the right-side operand with the left side operand and assign the result to the left operand (x = x * y)
x *= y    
x = 28

/=
Divide and assign: Divide the left operand with the right operand, and then assign it to the left operand (x = x / y)
x /= y    
x = 1.75

//=
Integer divide and assign: Divide the left operand and the right operand, and assign the integer value (floor of the result) to the left operand (x = x // y)
x //= y    
x = 1

%=
Modulo and assign: Take modulo after dividing the left operand with the right operand, and assign the result to the left operand (x = x % y)
x %= y    
x = 3

**=
Exponent and assign: Calculate the exponent (raised power) value using operands and assign the value to the left operand (x = x ** y)
x **= y    
x = 2401
