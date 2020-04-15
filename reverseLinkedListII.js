var reverseBetween = function (head, m, n) {
  let count = 1;
  let move = head;
  let begPointer;
  let endPointer;
  let begin = m;
  let end = n;
  let array = [];
  let reversedLinkedList = new ListNode(0);
  let reversedPointer = reversedLinkedList;

  // check if m > n
  if (m > n) {
    begin = n;
    end = m;
  }

  // find begin
  while (count <= begin - 1) { // count = 1 begin = 0
    move = move.next;
    count += 1;
  }

  // start reversing
  begPointer = move;


  while (count <= end) {
    array.push(move.val);
    count += 1;
    move = move.next;
    endPointer = move;

  }

  for (let i = array.length - 1; i >= 0; i -= 1) {
    reversedPointer.val = array[i];
    if (i > 0) {
      reversedPointer.next = new ListNode(0)
    };
    reversedPointer = reversedPointer.next;
  }

  //     console.log(reversedLinkedList);
  console.log("endPointer", endPointer)

  console.log("begPointer", begPointer)
  if (endPointer !== null) {
    reversedPointer.next = endPointer;
  }

  if (begin === 1) {
    head = reversedPointer;
  }

  return head;
};

function ListNode(num) {
  this.val = num;
  this.next = null;
}

// let input = {val: 1, next: {val: 2, next: {val: 3, next: {val:4, next: {val:5, next: null}}}}};
// reverseBetween(input, 2, 4);
// let input = {val: 5, next: null}
// reverseBetween(input, 1, 1);
input = {
  val: 3,
  next: {
    val: 5,
    next: null
  }
};
reverseBetween(input, 1, 2);