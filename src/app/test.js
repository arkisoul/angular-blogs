function add(a, b) {
    return a + b;
}

function* generator() {
    console.log('first')
    yield(1)
    console.log('second')
    yield(2)
    console.log('third')
    yield(3)
}

function aPromise() {
    return new Promise(resolve => {
        resolve('Promised value')
        resolve('Another promised value')
    })
}

console.log(add(10, 20))
console.log(add(10, 20))
const gen = generator();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
aPromise().then(value => console.log(value))
aPromise().then(value => console.log('second ', value))