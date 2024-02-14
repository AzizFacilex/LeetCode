function subtractProductAndSum(n: number): number {
    const stringified:string[]=[...n.toString()]
    var sum:number=0
    var mult:number=1
    stringified.forEach(x => {
        let parsedInt:number=parseInt(x)
        sum+=parsedInt
        mult = mult*parsedInt
    })
    return mult-sum
};