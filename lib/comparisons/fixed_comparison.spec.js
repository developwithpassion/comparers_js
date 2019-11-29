import { expect } from 'chai';
import comparer from './fixed_comparison';

describe('comparing items using a fixed comparison', function() {
  let fixed;
  let sut;

  beforeEach(function() {
    fixed = [2, 1, 3];
  });

  beforeEach(function() {
    sut = comparer(fixed);
  });

  it('compares the items based on where they fall in a fixed list', function() {
    expect(sut(2, 1)).to.be.lessThan(0);
    expect(sut(1, 2)).to.be.greaterThan(0);
    expect(sut(1, 3)).to.be.lessThan(0);
    expect(sut(3, 1)).to.be.greaterThan(0);
  });

  it('compares items in the fixed list with items not in the fixed list correctly', function() {
    expect(sut(2, 4)).to.be.lessThan(0);
  });

  it('compares items in the fixed list with items not in the fixed list correctly', function() {
    expect(sut(4, 2)).to.be.greaterThan(0);
  });

  it('compares items not in the fixed list in their placement order', function() {
    let items = [1, 2, 7, 3, 5, 4, 2, 6];
    let results = items.sort(sut);

    expect(results).to.eql([2, 2, 1, 3, 7, 5, 4, 6]);
  });
});
