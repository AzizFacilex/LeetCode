function buildArray(nums: number[]): number[] {
    var result: number[] = [];
    nums.forEach(value => {
        result.push(nums[value])
    })
    return result;
};