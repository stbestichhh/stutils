import { LinkedList } from '../linked_list';

export class Arrays extends Array {
  public static unique<T>(array: T[]): T[] {
    return new Array<T>(...new Set(array));
  }

  public static chunk<T>(array: T[], size: number): T[][] {
    if (size <= 0) throw new RangeError(`Chunk size must be greater than 0`);
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) => {
      return array.slice(i * size, i * size + size);
    });
  }

  public static asort<T extends string | number>(array: Array<T>): T[] {
    if (array.length === 0) return array;

    if (typeof array[0] === 'number') {
      return array.sort((a, b) => (a as number) - (b as number));
    } else if (typeof array[0] === 'string') {
      return array.sort((a, b) => (a as string).localeCompare(b as string));
    } else {
      throw new TypeError('Unsupported array element type');
    }
  }

  public static dsort<T extends string | number>(array: Array<T>): T[] {
    if (array.length === 0) return array;

    if (typeof array[0] === 'number') {
      return array.sort((a, b) => (b as number) - (a as number));
    } else if (typeof array[0] === 'string') {
      return array.sort((a, b) => (b as string).localeCompare(a as string));
    } else {
      throw new TypeError('Unsupported array element type');
    }
  }

  public static toList<T>(array: T[]): LinkedList<T> {
    return new LinkedList(array);
  }
}
