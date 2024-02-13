function countPairs(nums: number[], target: number): number {
    var result:number=0
    for (let index = 0; index < nums.length; index++) {
        for (let j = 0; j < nums.length; j++) {
            if (j===index)
                continue
            if (nums[index]+nums[j] < target && index < j)
                result++
        }
    }

    return result
};