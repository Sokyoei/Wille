// JavaScript Regular Expressions
// /regex/(i | g | m)

var str = "Dear Ahri";
var ahri = /Ahri/i;

console.log(str.search(ahri));
console.log(str.replace(ahri, "Nono"));

console.log(ahri.test(str))
console.log(ahri.exec(str))
