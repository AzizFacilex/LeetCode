function leftRightDifference(nums) {
    var leftSum:number[]= [];
    var rightSum:number[] = [];
    var cumulativeLeftSum:number= 0;
    var cumulativeRightSum:number = 0;
    for (var i = 0; i < nums.length; i++) {
        leftSum.push(cumulativeLeftSum);

        cumulativeLeftSum += nums[i];
        if (isNaN(nums[nums.length - i]))
            cumulativeRightSum += 0
        else
            cumulativeRightSum += nums[nums.length - i];
        rightSum.unshift(cumulativeRightSum);
    }
    return leftSum.map((x, index) => { return Math.abs(x - rightSum[index]) });
}
