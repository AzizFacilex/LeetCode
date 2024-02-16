function decompressRLElist(nums: number[]): number[] {
    var result:number[]=[]
    for (let index = 0; index < nums.length; index+=2) {
        let freq = nums[2*index]
        let val = nums[2*index+1]
        for (let index = 0; index < freq; index++) {
            result.push(val);
        }
        
    }
    return result
};