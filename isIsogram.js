function isIsogram(str){
  const str2 = str.toLowerCase();
  for(var i = 0; i <= str2.length; i++) {
    for(var j = i+1; j <= str2.length; j++) {
        if(str2[j] == str2[i]) {
            return false;
        }
    }
}
return true;
}

console.log(isIsogram("Dermatoglyphics")) //> true
console.log(isIsogram("isogram")) //> true
console.log(isIsogram("")) //> true
console.log( isIsogram("aba")) //> false
console.log(isIsogram("moOse")) //> false
console.log(isIsogram("isIsogram")) //> false