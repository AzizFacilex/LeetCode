function shuffle(nums: number[], n: number): number[] {
  var result: number[] = [];
  for (let index = 0; index < n; index++) {
    result.push(nums[index], nums[n + index]);
  }
  return result;
}
