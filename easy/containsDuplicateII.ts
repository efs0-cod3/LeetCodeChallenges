interface obj {
    [key: number]: number
}
var containsNearbyDuplicate = function(nums: number[], k: number): boolean {
	let ob: obj = {}
    for (let i: number = 0; i < nums.length; i++)  {
        if (i - ob[nums[i]] <= k) {
            return true;
        } else {
            ob[nums[i]] = i;   
    }
}
    return false;
}
console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))
console.log(containsNearbyDuplicate([1,2,1],0))