function sumIndicesWithKSetBits(nums: number[], k: number): number {
    return nums.filter((_,index)=> isSetBits(index,k)).reduce((a,b)=> a+ b,0)
};  

function isSetBits(num, k) {
    var bitsArray:string[] = [...num.toString(2)]

    if (bitsArray.map(x => parseInt(x)).reduce((a,b) => a + (b === 1? b:0),0) === k)
        return true
    else
        return false
}