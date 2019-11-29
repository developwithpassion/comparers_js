import {
  create_attribute_comparer as sut,
  create_attribute_by_name_resolver
} from './attribute_comparer';
import { expect } from 'chai';

describe('attribute comparer', () => {
  let name;
  let new_comparer;
  let comparer;
  let name1;
  let name2;
  let first;
  let second;
  let result;

  beforeEach(() => {
    name = create_attribute_by_name_resolver('name');
  });

  describe('when created with an attribute name and a comparison', () => {
    beforeEach(() => {
      name1 = 'not_important1';
      name2 = 'not_important2';

      first = {
        name: name1
      };

      second = {
        name: name2
      };

      comparer = (first_value, second_value) => {
        expect(first_value).to.eql(first.name);
        expect(second_value).to.eql(second.name);

        return -1;
      };
    });

    beforeEach(() => {
      new_comparer = sut(name, comparer);
    });

    beforeEach(() => {
      result = new_comparer(first, second);
    });

    it('compares two objects by comparing the attributes on both instances using the comparer', () => {
      expect(result).to.eql(-1);
    });
  });

  describe('when created with an attribute resolver and a comparison', () => {
    beforeEach(() => {
      name1 = 'not_important1';
      name2 = 'not_important2';

      first = {
        name: name1
      };

      second = {
        name: name2
      };

      comparer = (first_value, second_value) => {
        expect(first_value).to.eql(first.name);
        expect(second_value).to.eql(second.name);

        return -1;
      };
    });

    beforeEach(() => {
      new_comparer = sut(
        name,
        target => {
          return 1;
        },
        () => {
          return 1;
        }
      );
    });

    beforeEach(() => {
      result = new_comparer(first, second);
    });

    it('compares two objects by comparing the attribute resolver values on both instances using the comparer', () => {
      expect(result).to.eql(1);
    });
  });
});
