function numberGame(nums: number[]): number[] {
    let arr:number[]=[]
    nums.sort((a,b)=> a-b)
    for (let index = 0; index < nums.length-1; index+=2) {
       arr.push(nums[index+1],nums[index])
    }
   return arr
};