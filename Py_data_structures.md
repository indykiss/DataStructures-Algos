
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

# Misc tips & tricks / Minor patterns:
- Maths*
- Subsets [BFS]
- Cyclic sort
- Doing things in place 
- Reverse a linked list 
- Counting things 
- Bitwise And, Or, XOR
- Using 2 heaps 
- Closures [I should know this]
- Regex


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
{Bojangles, Kenai, Katmai}

Intersection:
set1 = {hi, i, am , cat}
set2 = {cat, dog}
intersecton = set1 & set2
{cat}

# Trees


# Graphs


# Linked Lists


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
                