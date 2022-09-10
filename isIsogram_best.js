function isIsogram(str) {
  let s = str.toLowerCase();
  return !/(.).*\1/.test(s);
}


console.log(isIsogram("Dermatoglyphics")) //> true
console.log(isIsogram("isogram")) //> true
console.log(isIsogram("")) //> true
console.log( isIsogram("aba")) //> false
console.log(isIsogram("moOse")) //> false
console.log(isIsogram("isIsogram")) //> false