import { sort as sort_array } from '@developwithpassion/arrays_js';
import sort from './sort';
import { expect } from 'chai';

function Movie(details) {
  for (let key in details) {
    this[key] = details[key];
  }
}

Movie.prototype.toString = function() {
  return this.title;
};

describe('sorting with the convenience sort method', function() {
  let GENRES = {
    COMEDY: {},
    KIDS: {},
    ACTION: {}
  };

  let STUDIOS = {
    UNIVERSAL: {},
    PIXAR: {},
    DISNEY: {},
    DREAMWORKS: {},
    MGM: {}
  };

  let indiana_jones_and_the_temple_of_doom = new Movie({
    title: 'Indiana Jones And The Temple Of Doom',
    release_date: new Date(1982, 1, 1, 0, 0, 0, 0),
    genre: GENRES.ACTION,
    studio: STUDIOS.UNIVERSAL,
    rating: 10
  });

  let cars = new Movie({
    title: 'Cars',
    release_date: new Date(2004, 1, 1, 0, 0, 0, 0),
    genre: GENRES.KIDS,
    studio: STUDIOS.PIXAR,
    rating: 10
  });

  let yours_mine_and_ours = new Movie({
    title: 'Yours, Mine and Ours',
    release_date: new Date(2005, 1, 1, 0, 0, 0, 0),
    genre: GENRES.COMEDY,
    studio: STUDIOS.MGM,
    rating: 7
  });

  let shrek = new Movie({
    title: 'Shrek',
    release_date: new Date(2006, 5, 10, 0, 0, 0, 0),
    genre: GENRES.KIDS,
    studio: STUDIOS.DREAMWORKS,
    rating: 10
  });

  let a_bugs_life = new Movie({
    title: 'A Bugs Life',
    release_date: new Date(2000, 6, 20, 0, 0, 0, 0),
    genre: GENRES.KIDS,
    studio: STUDIOS.PIXAR,
    rating: 10
  });

  let theres_something_about_mary = new Movie({
    title: "There's Something About Mary",
    release_date: new Date(2007, 1, 1, 0, 0, 0, 0),
    genre: GENRES.COMEDY,
    studio: STUDIOS.MGM,
    rating: 5
  });

  let pirates_of_the_carribean = new Movie({
    title: 'Pirates of the Carribean',
    release_date: new Date(2003, 1, 1, 0, 0, 0, 0),
    genre: GENRES.ACTION,
    studio: STUDIOS.DISNEY,
    rating: 10
  });

  let original_movies;
  let results;
  let comparer;

  beforeEach(function() {
    original_movies = [
      indiana_jones_and_the_temple_of_doom,
      cars,
      a_bugs_life,
      theres_something_about_mary,
      pirates_of_the_carribean,
      yours_mine_and_ours,
      shrek
    ];
  });

  describe('Sorting movies', function() {
    it('Sorts all movies by descending title', function() {
      comparer = sort.by_descending('title');
      results = sort_array(comparer, original_movies);

      expect(results).to.eql([
        yours_mine_and_ours,
        theres_something_about_mary,
        shrek,
        pirates_of_the_carribean,
        indiana_jones_and_the_temple_of_doom,
        cars,
        a_bugs_life
      ]);
    });

    it('Sorts all movies by ascending title', function() {
      comparer = sort.by('title');
      results = sort_array(comparer, original_movies);

      expect(results).to.eql([
        a_bugs_life,
        cars,
        indiana_jones_and_the_temple_of_doom,
        pirates_of_the_carribean,
        shrek,
        theres_something_about_mary,
        yours_mine_and_ours
      ]);
    });

    it('Sorts all movies by descending release date', function() {
      comparer = sort.by_descending('release_date');
      results = sort_array(comparer, original_movies);

      expect(results).to.eql([
        theres_something_about_mary,
        shrek,
        yours_mine_and_ours,
        cars,
        pirates_of_the_carribean,
        a_bugs_life,
        indiana_jones_and_the_temple_of_doom
      ]);
    });

    it('Sorts all movies by ascending release date', function() {
      comparer = sort.by('release_date');
      results = sort_array(comparer, original_movies);

      expect(results).to.eql([
        indiana_jones_and_the_temple_of_doom,
        a_bugs_life,
        pirates_of_the_carribean,
        cars,
        yours_mine_and_ours,
        shrek,
        theres_something_about_mary
      ]);
    });

    it('Sorts all movies by preferred studios and release date ascending', function() {
      // In this spec the results of the movies should be sorted as follows:
      //  MGM Movies
      //   - By ascending release date
      //  Pixar Movies
      //   - By ascending release date
      //  Dreamworks Movies
      //   - By ascending release date
      //  Universal Movies
      //   - By ascending release date
      //  Disney Movies
      //   - By ascending release date
      let comparer = sort
        .by_fixed('studio', [
          STUDIOS.MGM,
          STUDIOS.PIXAR,
          STUDIOS.DREAMWORKS,
          STUDIOS.UNIVERSAL,
          STUDIOS.DISNEY
        ])
        .combine(sort.by('release_date'));

      let results = sort_array(comparer, original_movies);

      expect(results).to.eql([
        yours_mine_and_ours,
        theres_something_about_mary,
        a_bugs_life,
        cars,
        shrek,
        indiana_jones_and_the_temple_of_doom,
        pirates_of_the_carribean
      ]);
    });
  });
});
