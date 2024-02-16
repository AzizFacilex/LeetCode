function sumOfMultiples(n: number): number {
    let result:number=0
    for (let index = 1; index <= n; index++) {
        if (index%3===0 || index%5===0 || index%7===0)
            result+=index
    }
    if (result<= Math.pow(10,3) && n>=1)
        return result
    return 0
};