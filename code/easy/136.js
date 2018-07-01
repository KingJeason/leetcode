/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]] = false
        }else{
            map[nums[i]] = true
        }
    }
    for(let key in map){
        if(map[key]){
            return ~~key
        }
    }
};
console.log(singleNumber([1, 1, 2, 3, 3]))