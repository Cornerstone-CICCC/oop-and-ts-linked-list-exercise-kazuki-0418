// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require("../lib/DLL");

function deleteAllNodesWithValue(list, value) {
  // your code here

  let runner = list.head;
  let previous = null;

  while (runner) {
    if (runner.data === value) {
      if (previous === null) {
        list.head = runner.next;
        runner.next.prev = null;
      } else {
        previous.next = runner.next;
        if (runner.next) {
          runner.next.prev = previous;
        }
      }
      list.size -= 1;
    } else {
      previous = runner;
    }
    runner = runner.next;
  }

  return list;
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5
