/** Stack is a data structure that follows the LIFO principle (Last in, first out). */

class Stack<TItem> {
  private items: TItem[] = [];

  push(item: TItem) {
    this.items.push(item);
  }

  pop(): TItem | undefined {
    return this.items.pop();
  }

  peek(): TItem | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

interface IHistory {
  idx: number;
  url: string;
}

const h = new Stack<IHistory>();
h.push({ idx: 0, url: '/home' });
h.push({ idx: 1, url: '/contact' });
h.push({ idx: 2, url: '/home' });

h.pop();
h.pop(); 
h.peek();
h.pop();
h.isEmpty();

