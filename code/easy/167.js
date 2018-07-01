/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let map = {}
    for (let i = 0; i < numbers.length; i++) {
        if ((!map[numbers[i]]) && map[numbers[i]] !== 0) {
            map[target - numbers[i]] = i
            continue;
        } else {
            return [map[numbers[i]] + 1, i + 1]
        }
    }
};
console.log(twoSum([2, 72, 28], 100))