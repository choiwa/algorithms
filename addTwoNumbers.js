var addTwoNumbers = function (l1, l2) {
  let sum = new ListNode(0);
  let curr = sum;
  let remainder = 0;
  let left = l1;
  let right = l2;
  
  while (left !== null || right !== null) {
      let val1 = left !== null ? left.val : 0;
      let val2 = right !== null ? right.val : 0;
      
      let currSum = remainder + val1 + val2;
      
      if (currSum > 9) {
          remainder = 1;
      } else {
          remainder = 0;
      }
      
      curr.next = new ListNode(currSum % 10);
      curr = curr.next;
      
      if (left !== null) {
          left = left.next;
      }
      
      if (right !== null) {
          right = right.next;
      }
  }
  
  if (remainder > 0) {
      curr.next = new ListNode(remainder);
  }
   
  return sum.next;
};