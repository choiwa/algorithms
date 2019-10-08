var reverseList = function (head) {
  let newLinkedList = new ListNode(null);
  let pointer = null;

  if (head === null) {
    return head;
  }

  const reverseAction = (head) => {
    if (head.next !== null) {
      reverseAction(head.next);
    }

    if (newLinkedList.val === null) {
      newLinkedList.val = head.val;
      pointer = newLinkedList;
    } else {
      pointer.next = new ListNode(head.val);
      pointer = pointer.next;
    }
  }

  reverseAction(head);

  return newLinkedList;
};