var result;
var voidFunction = function (one, two) {
    if (one === undefined || two === undefined) {
        return;
    }
    else {
        result = one;
    }
};
var neverFunction = function () {
    throw new Error('Error is coming');
};
