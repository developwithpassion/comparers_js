import { expect } from 'chai';
import sut from './default';

describe('Default comparison', () => {
  it('returns the result of comparing two items by value', () => {
    expect(sut('a', 'b')).to.eql(-1);
    expect(sut('10', '11')).to.eql(-1);
    expect(sut(9, 10)).to.eql(-1);
    expect(sut(10, 9)).to.eql(1);
    expect(sut(9, 9)).to.eql(0);
  });
});
