var mergeTwoLists = function (l1, l2) {
  let newList = null;
  let newListPointer = null;
  let l1Pointer = l1;
  let l2Pointer = l2;

  if (l1 == null) {
    return l2;
  }

  if (l2 == null) {
    return l1;
  }

  while (l1Pointer != null && l2Pointer != null) {
    if (l1Pointer.val <= l2Pointer.val) {
      if (newList === null) {
        newList = new ListNode(l1Pointer.val);
        newListPointer = newList;
      } else {
        newListPointer.next = new ListNode(l1Pointer.val);
        newListPointer = newListPointer.next;
      }

      l1Pointer = l1Pointer.next;

    } else {
      if (newList === null) {
        newList = new ListNode(l2Pointer.val);
        newListPointer = newList;
      } else {
        newListPointer.next = new ListNode(l2Pointer.val);
        newListPointer = newListPointer.next;
      }
      l2Pointer = l2Pointer.next;
    }


  }

  if (l1Pointer != null) {
    newListPointer.next = l1Pointer;
  }

  if (l2Pointer != null) {
    newListPointer.next = l2Pointer;
  }

  return newList;

};