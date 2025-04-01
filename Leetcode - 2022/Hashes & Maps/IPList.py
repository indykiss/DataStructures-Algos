

# Given a log file, return IP address(es) which accesses the site most often.
# e.g: 
# "10.0.0.1 - log entry 1 11", 
# "10.0.0.1 - log entry 2 213", 
# "10.0.0.2 - log entry 1 11", 
# "10.0.0.2 - log entry 2 213", 
# "10.0.0.2 - log entry 133132"
# Ans: 10.0.0.2

# strategy:
# split based on " - "
# dictionary, based on IP address: freq
# return max freq, iterate through dictionary 

# O(n) time and O(n) space 
def returnIPAddress(ips): 
  if len(ips) == 0: return ""
  tracker = {}
  
  for ip in ips: 
    str = ip.split(" - ") 
    tracker[str[0]] = 1 + tracker.get(str[0], 0) 

  max_val = max(tracker.values())

  for key, val in tracker.items(): 
    if val == max_val: 
      return key 

print(returnIPAddress(["10.0.0.1 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.2 - log entry 1 11"]))

print(returnIPAddress(["10.0.0.1 - log entry 1 11", "10.0.0.2 - log entry 1 11"]))

print(returnIPAddress([""]))

print(returnIPAddress(["10.0.0.1 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.1 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.1 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.1 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.1 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.1 - log entry 1 11", "10.0.0.2 - log entry 1 11", "10.0.0.2 - log entry 1 11"]))

