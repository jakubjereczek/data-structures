/** A Singly Linked List consists of nodes, where each node contains a value and a reference (pointer) to the next node in the list.  */

class ListNode<TItem> {
  next: ListNode<TItem> | null = null;

  constructor(public value: TItem) {}
}

class LinkedList<TItem> {
  head: ListNode<TItem> | null = null;

  append(value: TItem): void {
    if (this.head === null) {
      this.head = new ListNode(value);
    } else {
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new ListNode(value);
    }
  }

  remove(value: TItem): void {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let node = this.head;
    while (node.next !== null) {
      if (node.next.value === value) {
        node.next = node.next.next;
        return;
      }
      node = node.next;
    }
  }

  print(): void {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const myList = new LinkedList<number>();

myList.append(10);
myList.append(20);
myList.append(30);
myList.append(40);

console.log('List contents after adding elements: ');
myList.print(); // Expected output: 10, 20, 30, 40

myList.remove(20);

console.log('List contents after removing 20: ');
myList.print(); // Expected output: 10, 30, 40

myList.remove(10);

console.log('List contents after removing 10: ');
myList.print(); // Expected output: 30, 40

myList.append(100);

console.log('List contents after adding 100: ');
myList.print(); // Expected output: 30, 40, 100
