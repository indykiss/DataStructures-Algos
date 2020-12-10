


/*
Character frequencies

Sherlock considers a string to be valid if all
characters of the string appear the same number of times. It is 
also valid if he can remove just  character at  index in the string, 
and the remaining characters will occur the same number of times. Given a string,
determine if it is valid. If so, return YES, otherwise return NO.
*/

// Complete the isValid function below.
function isValid(s) {
  var hash = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hash) {
      hash[s[i]] += 1;
    } else {
      hash[s[i]] = 1;
    }
  }
  var freq = [];
  var lastIneq;
  var keys = Object.keys(hash);
  for (var i = 0; i < keys.length; i++) {
    freq.push(hash[keys[i]]);
  }
  var dif = (Math.max(...freq) - Math.min(...freq))
  var count=0;
  for (let i = 1; i < freq.length; i++) {
    if (freq[0] !== freq[i]) {
      count ++;
      lastIneq = i;
    }
  }

  if(count <= 1){
    if(freq[lastIneq] == 1 || dif <= 1){
     return "YES";
    }
    else{
      return "NO"
    }
  } else{
    return "NO";
  }
}
