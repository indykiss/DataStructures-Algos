
## ----- Build my toolkit ----- ##
## --- Handy "how to" tricks -- ##


# Handy Built In Methods

# Str built in methods
str.find(char)
    s1 = "hello"
    print(s1.find("Y")) => -1, there is no Y 

str.replace(this, withThat)
    s2 = "hi there"
    print(s2.replace("there", "bye")) => "hi bye"

str.split()
   Splits a string into an array using WHITESPACE
   OR to split on a comma or different ele:
        str.split("#")

list(str)
    Split a str into n arr on every CHARACTER

str[::-1]
NO .reverse in python, instead word[::-1]
    s = "hi"
    return s[::-1] =>
    "ih"
    This works because of how slicing works in Python, Start at beg, End at end, because both are ommitted, and move with -1 steps.

str.count(" ")
Counts the number of spaces in the str

Sort a string:
    sortedList = sorted(str)
    return "".join(sortedList)


# List built in methods 
sorted(arr)
    Actually sorts as expected! JS .sort() behavior
    Need to use .sorted(arr) to sort an arr in asc order

Sort in descending order:
sorted(arr, reverse=True)

arr.sort() returns none, just sorts in place
    l1 = [1,2,3,5,4]
    l1.sort() RETURNS NONE
        [1,2,3,4,5]

list(str)
    Split a str into n arr on every CHARACTER

"".join(arr)
    Converts an arr to a string
    Same .join in JS, so use .join option

"THING".join(arr): Joins with separator:
    arr = [hi,there]
    "-".join(arr)
    "hi-there"

sum(arr)
    Adds all the nums in a particular arr 
    Faster than doing:
        sum = 0
        for num in nums:
            sum = sum + num

max(arr) - max(num1, num2) - min(arr) 
    Finds the maximum in an arr or 2 vals

To pop the ele in the front of a list: (JS's shift)
    ele = arr[0]
    del arr[0]
    arr.pop(0)    

Add an ele to the front of a list (JS unshift):
    arr = ["i"]
    # arr.insert(idx, num)
    arr.insert(0, "h")
    arr = ["h", "i"]

next(itr(dict))
    Returns the 1st key in the dictionary or list 

Sorting nested lists:
    intervals = [["k", 1], ["a", 5]]
    intervals.sort(key=lambda x: x[0]) # sort by 1st ele 
    intervals = [["a", 5], ["k", 1]]


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

.ceil(float)
    rounds a number up

.round(float)
    rounds a number down

range(start, end)
numbers = range(5, 10) is list of numbers 5 -> 9


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

