import { LinkedList } from '../lib/linked_list';

describe('LinkedList', () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList<number>();
  });

  test('should initialize with empty list', () => {
    expect(linkedList.getSize()).toBe(0);
    expect(linkedList.toArray()).toEqual([]);
  });

  test('should initialize with elements', () => {
    const newList = new LinkedList<number>([1, 2, 3]);
    expect(newList.getSize()).toBe(3);
    expect(newList.toArray()).toEqual([1, 2, 3]);
  });

  test('should add a new element', () => {
    linkedList.add(1);
    expect(linkedList.getSize()).toBe(1);
    expect(linkedList.toArray()).toEqual([1]);
  });

  test('should add multiple elements', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.getSize()).toBe(3);
    expect(linkedList.toArray()).toEqual([1, 2, 3]);
  });

  test('should remove an element by value', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.remove(2)).toBe(true);
    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.toArray()).toEqual([1, 3]);
  });

  test('should delete last element', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.remove()).toBe(true);
    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.toArray()).toEqual([1, 2]);
  });

  test('should return false when removing non-existing value', () => {
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.remove(4)).toBe(false);
    expect(linkedList.getSize()).toBe(2);
  });

  test('should remove an element by index', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.removeIdx(1)).toBe(true);
    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.toArray()).toEqual([1, 3]);
  });

  test('should return false when removing element by invalid index', () => {
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.removeIdx(5)).toBe(false); // invalid index
    expect(linkedList.getSize()).toBe(2);
  });

  test('should return true if contains the element', () => {
    linkedList.add(1);
    expect(linkedList.contains(1)).toBe(true);
  });

  test('should return false if does not contain the element', () => {
    linkedList.add(1);
    expect(linkedList.contains(2)).toBe(false);
  });

  test('should return correct index of element', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.indexOf(2)).toBe(1);
    expect(linkedList.indexOf(3)).toBe(2);
  });

  test('should return -1 when element is not found by indexOf', () => {
    linkedList.add(1);
    expect(linkedList.indexOf(5)).toBe(-1);
  });

  test('should return element at specified index', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.get(1)).toBe(2);
    expect(linkedList.get(0)).toBe(1);
  });

  test('should return undefined for invalid index in get method', () => {
    linkedList.add(1);
    expect(linkedList.get(5)).toBe(undefined); // invalid index
  });

  test('should return empty array for empty list', () => {
    expect(linkedList.toArray()).toEqual([]);
  });

  test('should remove the head of the list', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.remove(1)).toBe(true);
    expect(linkedList.toArray()).toEqual([2, 3]);
  });

  test('should not remove from an empty list', () => {
    expect(linkedList.remove(1)).toBe(false);
    expect(linkedList.getSize()).toBe(0);
  });
});
