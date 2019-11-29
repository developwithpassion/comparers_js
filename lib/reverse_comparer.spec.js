import sut from './reverse_comparer';
import { expect } from 'chai';

describe('Reversing a comparison', () => {
  let first;
  let second;

  beforeEach(function() {
    first = function() {
      return -1;
    };
    second = function() {
      return 1;
    };
  });

  it('returns the negative of what it received from the original comparer', function() {
    let first_result = sut(first)(1, 2);
    let second_result = sut(second)(1, 2);

    expect(first_result).to.eql(1);
    expect(second_result).to.eql(-1);
  });
});
