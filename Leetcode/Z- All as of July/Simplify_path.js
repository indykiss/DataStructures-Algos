

/*
Simplify path

Given an absolute path for a file (Unix-style), simplify it.
Or in other words, convert it to the canonical path.

In a UNIX-style file system, a period . refers to the current
directory. Furthermore, a double period .. moves the directory
up a level.

Note that the returned canonical path must always begin 
with a slash /, and there must be only a single slash / 
between two directory names. The last directory name 
(if it exists) must not end with a trailing /. 
Also, the canonical path must be the shortest string 
representing the absolute path.

 
Input: "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.

Input: "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

Input: "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

Input: "/a/./b/../../c/"
Output: "/c"

Input: "/a/../../b/../c//.//"
Output: "/c"

Input: "/a//b////c/d//././/.."
Output: "/a/b/c"
*/

// USE A STACK 

// I was very far from getting this 

var simplifyPath = function(path) {
    
    path = path.split("/");
    const stack = [];
    
    for(let i = 0; i < path.length; i++) {
        if(path[i] == "." || path[i] == "") continue;
        if(path[i] == "..") stack.pop();
        else stack.push(path[i])
    }
    
    return '/' + stack.join('/');    
    
};