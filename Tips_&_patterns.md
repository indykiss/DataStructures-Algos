
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
my_list = ["yo", "i", "potat"]
my_list.append("woo") 
 # print(my_list) = ["yo", "i", "potat", "woo"]
my_list.remove("yo")
 # print(my_list) = ["i", "potat", "woo"]
 ```
Concatenate lists! 
```
list1 = ["I", "is"]
list2 = ["potato"]
print(list1+list2) = ["I", "is", "potato"]
```

# Tuples 
my_tuple = ("i", 9, "am", 10, "potato")

# Dictionaries
Similar to Javascript's object key/value pair 
In JS, everything is an object (array, str, set, etc). In Python, a dictionary is just a dict, not a building block for all. 

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

# Sets
Holds unique values. Extra mathenatical set operations over JS 

```
my_set = set()
my_set.add("Bojangles")
my_set.add("Kenai")
my_set.delete("Katmai")
second_set = set()
second_set.add("Katmai")

Just like JS, has:
.has, .forEach, .size

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


