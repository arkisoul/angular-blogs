// function add(a, b) {
//     return a + b;
// }

// function* generator() {
//     console.log('first')
//     yield(1)
//     console.log('second')
//     yield(2)
//     console.log('third')
//     yield(3)
// }

// function aPromise() {
//     return new Promise(resolve => {
//         resolve('Promised value')
//         resolve('Another promised value')
//     })
// }

// console.log(add(10, 20))
// console.log(add(10, 20))
// const gen = generator();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// aPromise().then(value => console.log(value))
// aPromise().then(value => console.log('second ', value))

const arr = [1, 2, 3, 4, 5];
function square(n) {
    return n * n;
}
const squareExp = function (n) {
    return n * n
}
const squareExpArrow = (n) => {
    return n * n
}
const squareExpArrowShortest = n => n * n;

const arr1 = arr.map(function aName(n) {
    return n * n;
})
const arr2 = arr.map(function(n) {
    return n * n;
})
const arr3 = arr.map((n) => {
    return n * n;
})
const arr4 = arr.map(n => {
    return n * n;
})
const arr5 = arr.map(n => n * n)
const arr6 = arr.map(square);
const arr7 = arr.map(squareExp);
const arr8 = arr.map(squareExpArrow);
const arr9 = arr.map(squareExpArrowShortest);

function customMap(fn) {
    console.log('Inside customMap before')
    fn();
    console.log('Inside customMap after')
}

customMap(function() {
    console.log('Inside callback function')
})