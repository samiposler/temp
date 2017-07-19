var add1 = function (x) {
    return x + 1;
}

var negate = function (func) {
    return function (x) {
        return -1 * func (x);
    }
}

// Supposed to be (5 + 1) * - 1 = -6
console.log (negate (add1)(5));
// this notation doesn't work, you can't pass arguments like that.  Ask Ryan D'souza.
console.log (negate (add1(5)));