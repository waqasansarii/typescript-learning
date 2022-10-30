"use strict";
// function type variable 
let showTable;
showTable = () => {
    return [20, 30, 5];
};
showTable = () => [2, 5, 9, 5];
showTable = () => ['khi', 'isb', 'lhr'];
// array of function type 
let calc = [];
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let Multiply = (a, b) => a * b;
calc.push(add);
calc.push(sub);
calc.push(Multiply);
calc.forEach((items) => {
    console.log(items(30, 25));
});
