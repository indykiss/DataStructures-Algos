

# Odd Even Linked List
# Given the head of a singly linked list, group 
# all the nodes with odd indices together followed by the 
# nodes with even indices, and return the reordered list.

# The first node is considered odd, and the second node is even, and so on.

# Note that the relative order inside both the even and odd 
# groups should remain as it was in the input.

# You must solve the problem in O(1) extra space complexity 
# and O(n) time complexity.
# https://leetcode.com/problems/odd-even-linked-list/


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Strategy:
# linked list w/ evens, and another w/ odds
# even + odd is returned 
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        evens = ListNode(0)
        odds = ListNode(0)
        evensHead = evens
        oddsHead = odds
        even_idx = True 
        
        while head: 
            if even_idx:
                evens.next = head
                evens = evens.next 
            else: 
                odds.next = head
                odds = odds.next 
            even_idx = not even_idx
            head = head.next 
            
        odds.next = None
        evens.next = oddsHead.next 
        return evensHead.next 
        
        