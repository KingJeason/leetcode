/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
    let map = {}
    let sum = 0
    for (let i = 0; i < candies.length; i++) {
        map[candies[i]] = true
    }
    for (let i in map) {
        sum += 1
    }
    if ((candies.length / 2) < sum) {
        return candies.length / 2
    }
    return sum
};
console.log(distributeCandies([1, 1, 2, 3]))