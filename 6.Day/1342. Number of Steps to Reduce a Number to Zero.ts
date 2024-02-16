function numberOfSteps(num: number): number {
    let result:number=0
    while(num !== 0) {
        result++
        if (num%2===0) {
            num/=2
        } else {
            num--
        }
    }
    return result
};