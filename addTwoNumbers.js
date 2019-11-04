var addTwoNumbers = function (l1, l2) {
  let totalSum = new ListNode(0);
  let remainder = 0;
  let sum = 0;


  const recursion = (left, right, current, remainder) => {
    let sum = 0;
    let currRemainder = remainder;

    if (left === null && right === null) {
      current.val = currRemainder;
      return;
    }

    if (left === null) {
      sum += right.val;
    } else if (right === null) {
      sum += left.val;
    } else {
      sum += right.val + left.val;
    }

    if (currRemainder === 1) {
      currRemainder = 0;
      sum += 1;
    }

    if (sum > 9) {
      sum -= 10;
      currRemainder += 1;
    }

    current.val = sum;

    if (right !== null || right !== null || currRemainder !== 0) {
      current.next = new ListNode(0);
      recursion(left.next, right.next, current.next, currRemainder);
    } else {
      return;
    }




  }

  recursion(l1, l2, totalSum, remainder);

  return totalSum;
};

function ListNode(num) {
  this.val = num;
  this.next = null;
}

// (2 -> 4 -> 3) + (5 -> 6 -> 4)
const left = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
};
const right = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
};