"use strict";

function repeatString(string, num) {
  // your code here
  if (num <= 0) {
    return '';
  }

  var stringbuilder = '';

  while (num !== 0) {
    stringbuilder = stringbuilder.concat(string);
    num--;
  }

  return stringbuilder;
}

console.log(repeatString('hello', 3));