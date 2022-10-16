function twoSumTs(nums: number[], target: number) {
    let newArr: number[] = []	
    for(let i:number = 0; i < nums.length; i++){
        for(let k:number = 0; k < nums.length; k++){
              if(nums[i] + nums[k] === target && i !== k){
                newArr.push(i,k)
                    return newArr
            } 
        }
    }
};
twoSumTs([2,7,11,15],9)