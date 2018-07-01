/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const fact = function (n) {
        if (n == 0) return 1
        let sum = 1
        if (n === 1) {
            return sum
        }
        return n * fact(n - 1)
    }
    const C = function (x, y) {
        // 排列组合 
        let fz = 1
        for (i = 0; i < y; i++) {
            fz = fz * x;
            x -= 1
        }
        return fz / fact(y)
    }
    let two = 1
    let one = n - 2 * two
    let t = one + two
    let res = 1
    while (one >= 0) {
        res += C(t, two)
        two += 1
        one = n - 2 * two
        t = one + two
    }
    return res
};
console.log(climbStairs(5))