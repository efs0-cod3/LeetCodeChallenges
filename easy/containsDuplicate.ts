interface oN {
    [key: number]:number
}
function containsDuplicateTs(nums: number[]): boolean {
   let objNum = nums.reduce((acc, cur) => {
        return acc[cur] ? ++acc[cur] : (acc[cur] = 1), acc
    },{})
        console.log(Object.values(objNum))
        return Object.values(objNum).some( (item:any) => item >= 2)
};
containsDuplicateTs([1,2,3,1])