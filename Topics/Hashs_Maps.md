
## Hash tables 

A hash table is a dictionary like data structure that maps keys to values. It allows people to look up a value based off its key. 

Key value pair lookup, with O(1) lookups with O(n) worst case

Collisions: Here's a limited # of 
hash codes but infinite possible things to go
into the codes. So we can have collisions when 
keys share the same code. 

To prevent collisions, we need to do chaining. 
So basically when there are collisions, we want to store
them in a linked list. 


    In order to find keys based off values, we need to loop through all values & keys. Same w/ arrs. Ex:

      const lightBulbToHoursOfLight = {
      'incandescent': 1200,
      'compact fluorescent': 10000,
      'LED': 50000,
      };
    
Really useful for when we want to keep track of counts per char in a string. 

Sometimes when there's duplicates within the keys, there can be a hash collision. Which is bad. It's rare, but if we are dealing with a hash collision, we can have each array slot hold a pointer to a linked list with the key/value pair, instead of the usual having the value itself in that slot. 

Hash tables are also known as objects. 

Hash tables are basically built-on arrays, where instead of indices, we use keys. 

Pros: Quick lookups and flexible keys (most data types can be hashable). O(1) time. 

Cons: 
Worst case lookup is O(n), so not great. This happens when there's hash collisions. 
Not ordered. So can't easily find lowest/highest value. 
Single directional lookups, as in can find a value using a key in O(1) BUT if I'm trying to find the key, using a value, it's O(n) b/c need to loop through the whole structure. 
Not cache friendly. 



## Hashing and Hash functions 

A hash function takes data, like a string or a file, and converts it into a hash-- a fixed-size string or number. 

For example, here’s the MD5 hash (MD5 is a common hash function) for a file simply containing “cake”:
  DF7CE038E2FA96EDF39206F898DF134D
  

## Hashes vs Maps 

Maps are recently added to ES6. It's the same as hashes in that
there is a key value pair, but there are some big differences. 

Main differences:
* Maps have map.set() to add and map.get() to get methods
* We can loop through maps:
for(let [key, value] of map) {
}
* But you can't loop through hashes/ aka objects
* Hashes/ also called objects can only have strings as a key
* Maps let you use objects (like arrs) as a key
* Maps have map.size() which is how big map is. Hashes don't have this
* JSON string: Hash's main advantage over maps is their ability to be directly parsed into a JSON str with JSON.stringify();



# Hash tables are just arrays on steroids 
# Sets track unique items. It's built on an array
# that uses hashing to index into an array

# Strengths:
- Fast lookups. Lookups take O(1)O(1) time on average.
- Flexible keys. Most data types can be used for keys, as long as they're hashable.

# Weaknesses:
- Slow worst-case lookups. Lookups take O(n)O(n) time in the worst case.
- Unordered. Keys aren't stored in a special order. If you're looking for the smallest key, the largest key, or all the keys in a range, you'll need to look through every key to find it.
- Single-directional lookups. While you can look up the value for a given key in O(1)O(1) time, looking up the keys for a given value requires looping through the whole dataset—O(n)O(n) time.
- Not cache-friendly. Many hash table implementations use linked lists, which don't put data next to each other in memory.

