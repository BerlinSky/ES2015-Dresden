import 'jquery';

// var createArist  = function(name) {
//   return name;
// }

// const createArist =  (name) => {
//   return name;
// }

// const createArist = name => {
//   return name;
// }

// const createArist = name => name;

const createArist = (first, last) => last + ', ' + first;

const triple = x => x * 3; 

$(function () {
  // const artist = createArist("Chris Stapleton 5");
  const artist = createArist("Chris", "Stapleton");
  console.log(artist);

  const tripled = triple(9);
  console.log(tripled);
});

