
## ----- Build my toolkit ----- ##
## Javascript -> Python translation notes ##

# Data Structures, Python
- Lists* [=Arrays]
- Strings* [Immutable]
- Dictionaries
- Sets
- Trees*
- Graphs*
- Tries
- Linked Lists 
- Tuples [Immutable -- more memory efficient than lists]

# Traditional algorithms, Python 
- Recursion*
- Depth first search*
    - Recursive (stack)
    - Stack
- Breadth first search*
    - Normal
    - Level wise
- Binary search
- Dynammic programming*
    - Overlapping subproblems / Memoization
    - MISC
    - THERE'S LOTS I DONT KNOW HERE 
- Greedy 

# Patterns, Python
- Two pointers
    - Two pointers with differing paces
- Sliding window
- Merge intervals
- Top K / Merge K 

# Misc tips & tricks / Minor patterns:
- Maths*
- Swapping things
- Subsets [BFS]
- Cyclic sort
- Doing things in place 
- Reverse a linked list 
- Counting things 
- Bitwise And, Or, XOR
- Using 2 heaps 
- Closures [I should know this]
- Regex


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
```
import re
regex = re.compile(r"\d\d\d\d")
text = "Your id is 4933"
match = regex.search(text)
start, end = match.start(), match.end()
found = text[start:end] # 4933
``` 

# Simpler Data structures
JS => Python
    Array  => List
    Object => Dictionary
    Set    => Set
    N/A    => Tuple

# Lists/ Arrays 
Similar to JS arrays, also mutable. Main differences:

Different terms for push/ pop
```
l = ["yo", "i", "potat"]
l.append("woo") 
 # print(my_list) = ["yo", "i", "potat", "woo"]
l.remove("yo")
 # print(my_list) = ["i", "potat", "woo"]
l.pop(1) 
 # Removes index 1 element

.extend([1, 2, 3])
    Adds multiple things to the end of a list

 ```
Concatenate lists! 
```
list1 = ["I", "is"]
list2 = ["potato"]
print(list1+list2) = ["I", "is", "potato"]
```

Nested lists behave the same as JS:
    l1 = [[0,"abc"], [2], 3, 4]
    l1[0][1] = "abc"

Nested dictionaries/ arrs:
    d1 = {"a": [1,2,3], "b": 4}
    d1['a'][1] ==> 2

IF we need to use the index in an arr to assign. For ex:
    "rearrange1 sentence3 this2" => "rearrange this sentence"
    We need to:
        arr = [0] * len(sentence)
            build arr that is length of sentence 
        for word in arr:
            arr[idx] = word[0:-1]

# Tuples 
Immutable.
Only 2 methods: .count() for counting number of times
something is in the tuple and .index() to search the tuple
for that value and returns its position. 

Why use a tuple? When passing around objects that need to 
not be changed. Keep data integrity, use tuples.

my_tuple = ("i", 9, "am", 10, "potato")




# Dictionaries
Similar to Javascript's object key/value pair 
In JS, everything is an object (array, str, set, etc). In Python, a dictionary is just a dict, not a building block for all. 

To add to a dict:
    dict[num] = val
To check if a key is in a dictionary:
    dict.get(num)
To update val in dict:
    dict[num] = dict.get(num) + 1

```
my_dict = {"indy": 10, "dave": 6.5}
my_dict.get("indy") # 10 
my_dict.pop("dave") # returns 6.5, removes it from dict
my.dict["puppy"] = 10
my.dict.keys() # ["indy", "puppy"]
my.dict.clear() # {} dict is empty

# Can be good for case switching 
def get_ratings(animal):
    mapping = {
        "cat": 10, 
        "dog: 10, 
        "human": 4, 
    }
    return mapping.get(animal, "Sorry no match")

# Merge dicts with | 
# Like the ... spread operator

a = {"indy": 10}
b = {"status": "single"}
c = a | b  # {"indy": 10, "status": "single"}
```

dict.keys() returns all the keys 
dict.values() returns all the values 
dict.items() returns all the key/ value pairs in TUPLES form


# Sets
Holds unique values. Extra mathenatical set operations over JS 

To quickly add eles in an arr to a set:
    newSet = set(arr)
To add 1 ele to a set:
    newSet.add(ele)
To check if something is in a set:
    if stone in stoneSet: 

```
my_set = set()
my_set.add("Bojangles")
my_set.add("Kenai")
my_set.delete("Katmai")
second_set = set()
second_set.add("Katmai")

Just like JS, has:
.forEach, .size

BUT also has:
difference, intersecttion, issubset, issuperset, union, etc

Union combines two sets:
new_set = my_set | second_set 
# {Bojangles, Kenai, Katmai}

Intersection:
set1 = {hi, i, am , cat}
set2 = {cat, dog}
intersecton = set1 & set2
# {cat}
```

# Instance operators 
Actually kinda important, but I'm mentally done
Come back to this :(

Python instanceof

# Built in functions

Checking type:
```
isinstance(9, int) => true 
isinstance(tom, Person) => true. Tom is obj, person class
isinstance("cat", str) => true
```

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

# Handy Built In Methods
.find()
    s1 = "hello"
    print(s1.find("Y")) => -1, there is no Y 

.replace()
    s2 = "hi there"
    print(s2.replace("there", "bye")) => "hi bye"

.range()
numbers = range(5, 10) is list of numbers 5 -> 9

.sorted(arr)
    Actually sorts as expected! JS .sort() behavior
    Need to use .sorted(arr) to sort an arr in asc order

To sort in descending order:
.sorted(arr, reverse=True)

.sort() returns none, just sorts in place
    l1 = [1,2,3,5,4]
    l1.sort() RETURNS NONE
        [1,2,3,4,5]

str.split()
   Splits a string into an array using WHITESPACE
    OR to split on a comma or different ele:
        str.split("#")

list(str)
    Split a str into n arr on every CHARACTER

"".join(arr)
    Converts an arr to a string
    Same .join in JS, so use .join option

"THING".join(arr): Joins with separator:
    arr = [hi,there]
    "-".join(arr)
    "hi-there"

.sum(arr)
    Adds all the nums in a particular arr 
    Faster than doing:
        sum = 0
        for num in nums:
            sum = sum + num

str[::-1]
NO .reverse in python, instead word[::-1]
    s = "hi"
    return s[::-1] =>
    "ih"

.max(arr) OR .max(num1, num2)
    Finds the maximum in an arr
    Finds the maximum in a couple of values

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

To pop the ele in the front of a list: (JS's shift)
    ele = arr[0]
    del arr[0]    

Add an ele to the front of a list (JS unshift):
    arr = ["i"]
    # arr.insert(idx, num)
    arr.insert(0, "h")
    arr = ["h", "i"]

.next(itr(dict))
    Returns the 1st key in the dictionary or list 

.ceil(float)
    rounds a number up

.round(float)
    rounds a number down

Sorting nested lists:
    intervals = [["k", 1], ["a", 5]]
    intervals.sort(key=lambda x: x[0]) # sort by 1st ele 
    intervals = [["a", 5], ["k", 1]]

str.count(" ")
Counts the number of spaces in the str


# Handy extended tricks 

Sorting a dictionary based on its values:
Return k most freq eles in arr
    freq = {8: 1, 9: 3, 7: 4}
    res = []
    sortedFreq = sorted(freq.items(), key=lambda x: x[1], reverse=True)
    for key, val in sortedFreq:
        if i <= k:
            res.append(key)
            i += 1  
    return res
BUT REALLY USING A HEAP IS THE RIGHT ANSWER FOR K FREQUENT Qs

Build a frequency dictionary quickly:
    freq = {}
    for num in nums:
        freq[num] = 1 + freq.get(num, 0)
    # freq: {9: 5, 8: 2}

Adding a char or a space x number of times:
    s = ""
    s += "hi" * 3
    s = "hihihi"

Check is a char is a number:
isnumeric

Check is a char is A-Z:
isalpha


# Min heap 
import heapq

nums = []
heapq.heapify(nums)

heapq.heappush(val) ==> Pushes ele into heap 
heapq.heappop() ==> Pops min or max ele from heap
heapq.heapreplace(a, x) ==> Returns the smallest val in heap THEN pushes x
heapq.heappushpop(a,x) ==> Pushes x into a and then returns smallest val  

Remember, broadly for heaps: based on a tree and the root is either 
the largest or the smallest number. We bubble up, bubble down, elements,
swapping as needed. 

# Max heap (make nums negative and use min heap)
Python does not have built in support for max heap :((((

Python, only has Min-Heap. Just as the name suggests, this is a Heap that instead of always returning the maximum item, it returns the minimum. Solution:
    - Multiply all numbers going into the heap by -1, and then multiply them by -1 to restore them when they come out.

    Make the numbers in the heap negative and un-negative when pull out minheap. 

    # Make all the nums negative. We want to do this *in place*, to keep the
    # space complexity of this algorithm at O(1).
    for i in range(len(nums)):
        num[i] *= -1
    
    # Heapify all the nums.
    heapq.heapify(nums)

    # Do things to our min heap (treating it like a max heap)
    s1 = heapq.heappop(nums)
    s2 = heapq.heappop(nums)
    heapq.heappush(nums, s2 - s1)

    # Convert the goal num back into positive 
    return -heapq.heappop(nums) if nums else 0


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


# Tries 

A Python trie implementation:      
class Trie:
    def __init__(self):
        self.root = {}
        
    def insert(self, word):
        node = self.root
        for letter in word:
            if letter not in node:
                node[letter] = {}
            node = node[letter]
        node['*'] = True
                