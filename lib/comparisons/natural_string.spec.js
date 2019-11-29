import sorts from './natural_string';
import { expect } from 'chai';

describe('comparing two regular words', function() {
  describe('with case sensitivity', function() {
    it('compares different words correctly', function() {
      var first = 'Art';
      var second = 'Second';

      var result = sorts.case_sensitive(first, second);

      expect(result).to.be.lessThan(0);
    });

    it('compares two words that only differ by case correctly', function() {
      var first = 'Art';
      var second = 'art';

      var result = sorts.case_sensitive(first, second);

      expect(result).to.be.lessThan(0);
    });
  });

  describe('with case insensitivity', function() {
    it('compares different words correctly', function() {
      var first = 'art';
      var second = 'Second';

      var result = sorts.case_insensitive(first, second);

      expect(result).to.be.lessThan(0);
    });

    it('compares two words that only differ by case correctly', function() {
      var first = 'art';
      var second = 'Art';

      var result = sorts.case_insensitive(first, second);

      expect(result).to.eql(0);
    });
  });
});

describe('sorting with a natural sort', function() {
  describe('plain phrases along with phrases with sequencing', function() {
    describe('with case sensitivity', function() {
      it('sorts correctly', function() {
        var items = ['cat', 'Art 1', 'Art 2', 'Cat', 'Art 20', 'Art 10'];

        items.sort(sorts.case_sensitive);

        expect(items).to.eql(['Art 1', 'Art 2', 'Art 10', 'Art 20', 'Cat', 'cat']);
      });
    });
  });

  describe('with case insensitivity', function() {
    it('sorts correctly', function() {
      let items = ['cat', 'Art 1', 'Art 2', 'Cat', 'Art 20', 'Art 10'];

      items.sort(sorts.case_insensitive);

      expect(items).to.eql(['Art 1', 'Art 2', 'Art 10', 'Art 20', 'cat', 'Cat']);
    });
  });

  describe('phrases with no sequencing', function() {
    describe('with case sensitivity', function() {
      it('sorts correctly', function() {
        var items = ['cat', 'Art', 'Arty', 'bat', 'Bat', 'Batty'];

        items.sort(sorts.case_sensitive);

        expect(items).to.eql(['Art', 'Arty', 'Bat', 'Batty', 'bat', 'cat']);
      });
    });

    describe('with case insensitivity', function() {
      it('sorts correctly', function() {
        var items = ['cat', 'Art', 'Arty', 'bat', 'Bat', 'Batty'];

        items.sort(sorts.case_insensitive);

        expect(items).to.eql(['Art', 'Arty', 'bat', 'Bat', 'Batty', 'cat']);
      });
    });
  });
});
