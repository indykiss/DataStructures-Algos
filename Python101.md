# Table of contents
1. [Arrs & Strs](#strs&arrs)
2. [Dictionaries](#dicts)
3. [Loops](#Loops)
4. [Doubles](#doubles)
5. [Pointers](#pointers)
6. [Sets](#sets)
7. [Ques, heaps, bitwise, regex](#ques)

## Arrs & Strs <a name="strs&arrs"></a>
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

arr.pop() / .pop(-1)      # To pop the ele in the end of a list, o(1)
arr.pop(i)                # To pop anywhere, o(n) bc need to shift eles
arr.insert(idx, num)      # Add ele to arr at specific idx
arr.remove("ele")  #o(n)
arr.extend([1, 2, 3])     # Adds multiple things to the end of a list
arr1 + arr2 = arr3        # Arr concat
arr = [[0,"abc"], [2]]    # Arr[0][1] = "abc"

# Random tricks:
Sorting nested lists:
    next(itr(dict))
        Returns the 1st key in the dictionary or list 
    intervals = [["k", 1], ["a", 5]]
    intervals.sort(key=lambda x: x[0]) # sort by 1st ele 
    intervals = [["a", 5], ["k", 1]]
Find shortest word in an arr of words
    smallestWord = min(words, key=len)
```
### Strs 
Immutable, so any changes creates a copy
```
Find / Replace
    "hell".find(e)  # idx of 1. if no e, -1
    str.replace(this, withThat)
        s2 = "hi there"
        s2.replace("there", "bye") => "hi bye"
Slice
    str[start:stop_noninclusive:step]
    str[i:]  # From i to end of str
    str[:i]  # From beg of str to i, noninclusive
Reverse - O(n)
    str[::-1]     
    This works bc of how slicing works in Python, Start at beg, End at end, because both are ommitted, and move with -1 steps.
    reversed(text)
Sort, by using arr sort:
    sortedList = sorted(str)
    return "".join(sortedList)
Random ones:
    len(str)
    str.count(" ")        # Counts the number of spaces in the str
    str.upper() / str.lower()
    str[-1]
    "hello ".format(s)    # Insert var into str
    or  print(f"Hello, {name}") 
    s += "hi" * 3                # s = "hihihi"
    isalpha                      # Check is a char is A-Z
    
```
### Strs <=> Arrs, Nums <=> Char
```
Arr => Str
    "".join(["a","b"])  # "ab"
Str => Arr
    list("str")         # [s,t,r]
Sentence => Arr
    "str st".split()    # [str, st]
    "s,t".split(,)      # [s, t]

# Convert num <=> char
ord(character) = character's unicode str
    ord(a) = 97 
    ord(a) + 1 = 98 
chr(number) = string's unicode str
    chr(97) = "a"
    chr(98) = "b"

str(integer) # Returns a STRING from an integer
chr(integer) # Returns a character from an integer
int(str)     # Returns an integer from a string
float()
bool()

# Random stuff
Checking type:
    isinstance(9, int) => true 
    isinstance(tom, Person) => true. # Tom is obj, person class
    isinstance("cat", str) => true
```
## Dictionaries <a name="dicts"></a>
```
dict = {'b': 2, 'a': 1, 'c': 3}
dict.items()       # Returns tuple of key + val of dict, ideal in loops
Declare dict example with default value of 0 / empty arr/ empty str
    my_dict = defaultdict(int)
    my_dict = defaultdict(list)
    my_dict = defaultdict(str)
d1 = {"a": [1,2,3], "b": 4}             # d1['a'][1] ==> 2

# Random tricks
Sort dict based on vals, ascending 
    sorted(dict.items())                # {'a': 1, 'b': 2, 'c': 3}
Sort dict based on vals, descending
    sorted(dict.items(), reverse=True)  # {'c': 3, 'b': 2, 'a': 1}
Build a frequency dictionary:
    freq = {}
    for num in nums:
        freq[num] = 1 + freq.get(num, 0)
    //Bonus, custom sort nums by frequency based on our dict
    nums.sort(key=lambda x: freq[x])
    return nums
```
## Loops <a name="Loops"></a>
### Loop through Arrs 
```
arr = [cat, dog, fish]
// for i in range(start, end_noninclusive, step)

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
Build a prefix sum, ie calcs sum of subarrs in an arr of nums
    def fn(arr):
        prefix = [arr[0]]
        for i in range(1, len(arr)):
            prefix.append(prefix[-1] + arr[i])
        return prefix
Most freq K in arr = heap or 
    freq = {8: 1, 9: 3, 7: 4}
    res = []
    for key, val in sorted(freq.items()):
        if i <= k:
            res.append(key)
            i += 1  
    return res
```
### Loop through dictionaries 
```
dic = {'1':"hi", '2':"bye"}    
for key, val in dic.items():
    print(key, val)

for key in dict.keys():
    print(key)
  
for val in dict.values():
    print(val)
```
## Pointers <a name="pointers"></a>
### Two Pointers
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
### Sliding window
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
# Doubles <a name="doubles"></a>
```
Simple math
    isnumeric   # Check is a char is a number
    x += 1
    x -= 1
    x *= 1
    x /= 1
    x //= 1     # Integer floor of result 
    x %= y      # Remainder, ex 10 % 4 = 2
    x **= y     # Exponent, ie raised power
    math.sqrt(9) = 3 
    math.pow(2,3) = 8
        OR print(10 ** 3) => 1000 #10 to the power of 3 
    range(start, end)
        numbers = range(5, 10) is list of numbers 5 -> 9
    5/2 = 2.5
    5//2 = 2 (rounds down, integer)
    -3//2 = -2 
    int(-3/2) = -1 
    if num % 2 == 0      # Even
    if num % 2 == 1      # Odd
Modulo = getting remainder 
        10 % 3 = 1 is remainder
    weird negative:
        -10 % 3 = 2 is remainder for some garbage reason 
    fix weird negative:
        import math 
        math.fmod(-10 % 3) = -1    
Finds unicode of a char (int rep of chars & punctuation)
    ord(char)
    Helps us do things like shift chars in the alphabet:
        "a1c" => "abc"
        We will use ord(char) + num to find the 'b'
        Then use char() to make the unicode num into a char 
Finds the greatest common factor between two nums
    .gcd(8, 24) -> 8
Round
    import math
    math.ceil(float)
    math.floor(float) OR math.round(float)
Number to binary AND adds all 32 zeros so we can count for big numbers too 
    format(num, 'b').zfill(32)
```
# Ques, heaps, bitwise, regex <a name="ques"></a>
## Queue / Deque
```
Deque = double ended queue
append / appendleft
pop / popleft 
[0] first / [-1] last ele
```
## Heaps
```
```
## Bitwise 
IF we have to do some crazy "find the only non-dupe in set"
    XOR -> inequality detector 
        arr = [2,1,2,1,3]
        a = 0
        for i in arr:
            a ^= i
        return a 
    XNOR -> equality detector
## Regex in Python
```
import re
regex = re.compile(r"\d\d\d\d")
text = "Your id is 4933"
match = regex.search(text)
start, end = match.start(), match.end()
found = text[start:end] # 4933
```
## Control logic
```
    val1 = l1.val if l1 else 0
    Python data types: float, int, string, boolean, none
```
