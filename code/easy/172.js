/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    if (!n || (n > 0 && n < 5)) return 0
    let k = n % 10
    if (k >= 5 && k <= 9) {
        return Math.floor((n / 10)) * 2 + 1
    } else if (k === 0) {
        return (n / 10) * 2
    }
};

const Foo = {
    foo () { console.log('foo') }
};
const Boo = {
    boo(){
        console.log('boo')
    }
}
function a(...list) {
    console.log(...list)
}
console.log(...Foo)