function deleteMiddleNode(head) {
  let slow = (fast = head);
  let previousSlow;

  while (fast && fast.next) {
    previousSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  previousSlow.next = slow.next;
  return head;
}

const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

deleteMiddleNode(linkedList);
