function removeDuplicates(head) {
  var currentHead = head;
  // debugger

  if (currentHead.next === null) {
    return head;
  }

  while (currentHead.next.next !== null) {
    while (
      currentHead.data === currentHead.next.data &&
      currentHead.next.next !== null
    ) {
      currentHead.next = currentHead.next.next;
    }
    if (currentHead.next.next !== null) {
      currentHead = currentHead.next;
    }
  }

  if (currentHead.data === currentHead.next.data) {
    currentHead.next = null;
  }

  return head;
}

// const linkedList = {
//   data: 1,
//   next: {
//     data: 2,
//     next: {
//       data: 2,
//       next: {
//         data: 2,
//         next: {
//           data: 5,
//           next:{
//             data: 6,
//             next: {
//               data: 7,
//               next: {
//                 data: 7,
//                 next: {
//                   data: 8,
//                   next: {
//                     data: 10,
//                     next: {
//                       data: 10,
//                       next: {
//                         data: 11,
//                         next: {
//                           data: 11,
//                           next: {
//                             data: 12,
//                             next: {
//                               data: 12,
//                               next: {
//                                 data: 13,
//                                 next: null,
//                               }
//                             }
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//           }
//       }
//     }
//   }
// };

linkedList = {
  data: 16,
  next: null
};

removeDuplicates(linkedList);
