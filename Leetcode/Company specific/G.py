
Counting Words With a Given Prefix

You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.

Google
Let's say the words in the dictionary are sorted
Strategy: 
Better answer: Binary search to ID one word with prefix 
Once we find, two pointer looking left/ right of that word, counting 
all matches 

def count_prefix_words(words: List[str], pref: str): 
	count = 0 
	floor = 0 
	ceiling = len(words)-1
	while floor <= ceiling: 
		mid = (floor + (ceiling-floor)) // 2 
		curr_pref = words[mid][:len(pref)]
		if curr_pref == pref: 
			count += 1
			i = mid-1
			j = mid+1 
			while words[i][:len(pref)] == pref and i : 
				count += 1 
				i -= 1 
			while words[j][:len(pref)] == pref: 
				count += 1 
				j += 1 			
		elif curr_pref < pref:  # can I do this? ASCII? helper funct
			floor = mid+1 
		else: 
			ceiling = mid-1 
	return count 




Serialize n-ary tree (easier than LC 428)
Given a n-ary tree, print the nodes in the required format.
Follow-up: given the printed string, make the tree and return the root.

Example:
		   1
   /       |       \
  2        3        4 
  |       /  \      |
  5      6    7     8
              |
			  9
print the output in this format (append a dash "-" to each node value and keep adding dashes for each level)
-1
--2
---5
--3
---6
---7
----9
--4
---8

Strategy:
- DFS, tracking the level to account for the dashes 
- DFS: recursive 
	- tmp, hold dashes + the node val 
	- iterate thru the root node's children, calling dfs on each child 

def print_node_nary_tree(root): 
    if not root: return ""
    ans = []

    def dfs(node, lvl):
        if not node: return 
        tmp = '-' * lvl
        tmp += str(node.val)
        ans.append(tmp)
        for child in node.children: 
            if child: 
                dfs(child, lvl+1)
    
    dfs(root, 1)	
    res = "\n".join(ans)
    return res 

# Strategy
# Convert str to list so we have lvls+node.val 
# First node.val is the root
# Iterate through the list of lvls+nodes
	# from child node, look backwards to find currlvl-1 parent, add the child node to that parent node's list of children 
# return the tree at the end

def build_nary_tree_str(str):
  nodes = str.split('\n')
  tree = {} # parent: [children]
  for i in range(len(nodes)):
    node = nodes[i]
    curr_lvl = node.count('-') # helper fnc 
    curr_val = int(node[curr_lvl:])
    while i >= 0: 
      maybe_lvl = nodes[i].count('-')
	  maybe_parent = int(node[maybe_lvl:])
      if maybe_lvl == curr_lvl-1:
	  # need to check on building vs appending a .children()
        if maybe_parent in tree: 
      tree[maybe_parent].append(curr_val)
      else: 
        tree[maybe_parent] = []
      i -= 1

  return tree



# Course Schedule II
# There are a total of numCourses courses you have to take, labeled from 0 to 
# numCourses - 1. You are given an array prerequisites where 
# prerequisites[i] = [ai, bi] indicates that you must take course bi 
# first if you want to take course ai.

# For example, the pair [0, 1], indicates that to take course 0 you have to 
# first take course 1.
# Return the ordering of courses you should take to finish all courses. If 
# there are many valid answers, return any of them. If it is impossible to 
# finish all courses, return an empty array.

def find_course_order(prereqs: List[int])
  adj = defaultdict(list)

  for crs, pre in prereqs: 
    adj[crs].append(pre)

  ordered_courses = []
  visited = {}
  
  def dfs(adj, crs): 
    nonlocal visited 
    visted[crs] = True 
    for pre in adj[crs]:
        if pre not in visited:
 	  dfs(adj, pre)
	 else: 
	  if pre in visited and visited[pre]: return 
    ordered_courses.append(crs)
    visited[crs] = False 
 
  for i in range(numCourses):
	if i not in visited:
	   dfs(adj, i)

  return ordered_courses

    

# Given an index and an input string find the char at the
# given index of the string. 
# If the index exceeds the len of the str, then you transform 
# the string by removing the string's last char and appending 
# it to the front and appending this transformed string to the original 
# string until you have a string length that exceeds the desired index.

# For example,if we have a string "abcd" and want to find the char at index 3
# it would obviously be 'd'. However, if we want to find the char at index 7 
# of "abcd" we would transform "abcd" to "abcddabc" and the char would be 'c'. 
# If we want to find the char at index 12 of "abcd" we would transform "abcd" to 
# "abcddabc" and then again transform to "abcddabccabcddab" and the char would be 'd.

Strategy 
- Brute:  
  - Build the transformed string, 1 transformation at a time until we have a str len 
  greater than desired idx 

def getChar(string, idx): 
  # calculate # of transformations needed
  transforms = 0 
  temp_len = len(string)

  while temp_len <= idx:
    transforms += 1 
    temp_len // 2
    
  # make a new string with our transformations
  new_str = string 
  for j in range(transforms): 
    new_str = new_str + new_str[-1] + new_str[0:-1] # our string is the prev 
    # str + the last char in front of slice of str from 0 to end-1
  return new_str[idx] # return char at idx in our new string

- O(log n) time 
- Strategy: 
- Math. Calculate the number of transformations
