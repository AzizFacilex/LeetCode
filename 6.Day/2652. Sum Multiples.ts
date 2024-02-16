function sumOfMultiples(n: number): number {
    let result:number=0
    for (let index = 3; index <= n; index++) {
        if (index%3===0 || index%5===0 || index%7===0)
            result+=index
    }
    return result
};