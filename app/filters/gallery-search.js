'use strict';

module.exports = function() {
  return function(galleries, searchTerm) {
    console.log(searchTerm);
    let fuzzyRegex = generateFuzzyRegex(searchTerm);
    //console.log(fuzzyRegex);
    return galleries.filter(gallery => {
      return fuzzyRegex.test(gallery.name.toUpperCase());
    });
  };
};


function generateFuzzyRegex(input) {
  if (!input) return /.*/;
  let fuzzyString = '.*' + input.toUpperCase().split('').join('.*') + '.*';
  console.log('generated:',fuzzyString, 'fuzzyString',input);
  return new RegExp(fuzzyString);
}