function xorOperation(n: number, start: number): number {
    var result:number[]=[]
    for (let index = 0; index < n; index++) {
        result.push(start +2*index)
        
    }
    return result.reduce((acc,curr)=> acc^curr,0)
};