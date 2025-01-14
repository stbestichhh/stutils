import { Arrays } from '../lib/arrays';
import { LinkedList } from '../lib/linked_list';

describe('Arrays', () => {
  describe('unique', () => {
    it('removes duplicate values from an array', () => {
      expect(Arrays.unique([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
      expect(Arrays.unique(['a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    it('returns an empty array when input is empty', () => {
      expect(Arrays.unique([])).toEqual([]);
    });

    it('handles arrays with no duplicates', () => {
      expect(Arrays.unique([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('chunk', () => {
    it('splits an array into chunks of the specified size', () => {
      expect(Arrays.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(Arrays.chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    });

    it('throws an error for chunk size <= 0', () => {
      expect(() => Arrays.chunk([1, 2, 3], 0)).toThrow(RangeError);
      expect(() => Arrays.chunk([1, 2, 3], -1)).toThrow(RangeError);
    });

    it('handles empty arrays gracefully', () => {
      expect(Arrays.chunk([], 2)).toEqual([]);
    });
  });

  describe('asort', () => {
    it('sorts an array of numbers in ascending order', () => {
      expect(Arrays.asort([3, 1, 4, 2])).toEqual([1, 2, 3, 4]);
    });

    it('sorts an array of strings alphabetically', () => {
      expect(Arrays.asort(['c', 'a', 'b'])).toEqual(['a', 'b', 'c']);
    });

    it('returns an empty array when input is empty', () => {
      expect(Arrays.asort([])).toEqual([]);
    });

    it('throws an error for unsupported types', () => {
      expect(() => Arrays.asort([{} as number])).toThrow(TypeError);
    });
  });

  describe('dsort', () => {
    it('sorts an array of numbers in descending order', () => {
      expect(Arrays.dsort([3, 1, 4, 2])).toEqual([4, 3, 2, 1]);
    });

    it('sorts an array of strings in reverse alphabetical order', () => {
      expect(Arrays.dsort(['c', 'a', 'b'])).toEqual(['c', 'b', 'a']);
    });

    it('returns an empty array when input is empty', () => {
      expect(Arrays.dsort([])).toEqual([]);
    });

    it('throws an error for unsupported types', () => {
      expect(() => Arrays.dsort([{} as number])).toThrow(TypeError);
    });
  });

  describe('toList', () => {
    it('converts an array to a LinkedList', () => {
      const array = [1, 2, 3];
      const list = Arrays.toList(array);
      expect(list).toBeInstanceOf(LinkedList);
      expect(list.toArray()).toEqual(array);
    });

    it('handles empty arrays gracefully', () => {
      const list = Arrays.toList([]);
      expect(list).toBeInstanceOf(LinkedList);
      expect(list.toArray()).toEqual([]);
    });
  });
});
