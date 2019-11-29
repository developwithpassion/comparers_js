import sut from './combine_comparer';
import { expect } from 'chai';

describe('Chaining comparisons', () => {
  let first;
  let second;
  let result;

  describe('when the first comparison results in the 2 objects not being equal', () => {
    beforeEach(() => {
      first = () => {
        return -1;
      };
      second = () => {
        return 1;
      };
    });

    beforeEach(() => {
      result = sut(first, second);
    });

    it('returns the result of the first comparison', () => {
      expect(result(null, null)).to.eql(-1);
    });
  });

  describe('when the first comparison results in the 2 objects being equal', () => {
    beforeEach(() => {
      first = () => {
        return 0;
      };
      second = () => {
        return 1;
      };
    });

    beforeEach(() => {
      result = sut(first, second);
    });

    it('returns the result of the second comparison', () => {
      expect(result(null, null)).to.eql(1);
    });
  });
});
