import x from '@developwithpassion/matchers_js';
import sut from './comparer_behaviours';
import { expect } from 'chai';

describe('adding comparer behaviours to a comparer function', function() {
  let comparer;

  it('extends it with reverse behaviour', function() {
    comparer = function(first, second) {
      return -1;
    };

    comparer = sut(comparer);

    expect(x.is_defined(comparer.reverse)).to.be.true;

    expect(comparer.reverse(null, null)).to.eql(1);
  });

  it('extends it with combine behaviour', function() {
    let first_comparer = function(first, second) {
      return 1;
    };

    let second_comparer = function(first, second) {
      return 0;
    };

    let comparer = sut(first_comparer);

    let combined = comparer.combine(second_comparer);

    expect(combined(null, null)).to.eql(1);
  });
});
