function smallerNumbersThanCurrent(nums: number[]): number[] {
    const result = [...nums].sort((a, b) => a - b);

    return nums.map((num) => result.indexOf(num))
};