function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for(let i = 0; i < nums.length; i++) {
        const num = target - nums[i];
        const part =  map.get(num);
        if(part !== undefined) {
            return [part, i]
        }
        map.set(nums[i],i);
    }
    return []
};