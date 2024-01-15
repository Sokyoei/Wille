// JavaScript function

var f = function (a) { return a };
console.log(f(2));

var f2 = new Function("a", "return a");
console.log(f2(2));

(function () {
    console.log(2);
})();

const f4 = (x, y) => x * y;
console.log(f4(2, 2));
