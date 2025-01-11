export class Node<T> {
  public next: Node<T> | null;

  constructor(public readonly value: T) {
    this.next = null;
  }
}
