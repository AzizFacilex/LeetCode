function smallerNumbersThanCurrent(nums: number[]): number[] {
    var result:number[]=[]
    for (let index = 0; index < nums.length; index++) {
        let count = 0

        for (let j = 0; j < nums.length; j++) {
            if (j !== index) {
                if (nums[j] < nums[index])
                    count++
            }
        }
        result.push(count)
    }
    return result
};