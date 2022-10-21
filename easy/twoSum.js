/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < nums.length; k++) {
      if (nums[i] + nums[k] === target && i !== k) {
        newArr.push(i, k);
        return newArr;
      }
    }
  }
};
twoSum([2,7,11,15],9)
