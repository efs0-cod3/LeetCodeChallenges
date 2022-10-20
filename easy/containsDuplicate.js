function containsDuplicate(nums) {
    var objNum = nums.reduce(function (acc, cur) {
        return acc[cur] ? ++acc[cur] : (acc[cur] = 1), acc;
    }, {});
    let objNumValues= Object.values(objNum)
    return objNumValues.some(function (item) { return item >= 2; });
}
;
console.log(containsDuplicate([1, 2, 3, 1]))
