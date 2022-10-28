function optional(name, age) {
    return name;
}
console.log(optional('waqas'));
function defaultParam(name, age) {
    if (age === void 0) { age = 20; }
    return name + ' ' + age;
}
console.log(defaultParam('waqas'));
function restParam(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    return a.concat(b.join(','));
}
console.log(restParam('a', 'b', 'c', 'd', 'e'));
