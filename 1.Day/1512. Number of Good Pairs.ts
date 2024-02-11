function numIdenticalPairs(nums: number[]): number {
    var result:number = 0
    nums.forEach((value1,index1) => {
        nums.forEach((value2, index2) => {
            if (value1 == value2 && index1 < index2) {
                result += 1;
            }
        })
    })
    return result;
};