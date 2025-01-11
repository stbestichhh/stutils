import { Node } from './node';

export class LinkedList<T> {
  private head: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  public add(value: T) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  public remove(value: T) {
    return this.removeByValue(value);
  }

  public removeIdx(index: number) {
    return this.removeByIndex(index);
  }

  public contains(value: T) {
    let current = this.head;
    while (current) {
      if (JSON.stringify(current.value) === JSON.stringify(value)) return true;
      current = current.next;
    }
    return false;
  }

  public indexOf(value: T) {
    return this.toArray().indexOf(value);
  }

  public get(index: number) {
    return this.toArray()[index];
  }

  public getSize() {
    return this.size;
  }

  public toArray() {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  private removeByValue(value: T) {
    if (!this.head) return false;

    if (JSON.stringify(this.head.value) === JSON.stringify(value)) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next && JSON.stringify(current.next.value) !== JSON.stringify(value)) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
      return true;
    }

    return false;
  }

  private removeByIndex(index: number) {
    if (index < 0 || index >= this.size || !this.head) return false;

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current: Node<T> | null = this.head;
    let previous: Node<T> | null = null;
    let currentIndex = 0;

    while (currentIndex < index && current) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (previous && current) {
      previous.next = current.next;
      this.size--;
      return true;
    }

    return false;
  }
}
