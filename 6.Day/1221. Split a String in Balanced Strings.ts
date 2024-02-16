function balancedStringSplit(s: string): number {
    let counter:number=0
    let result:number=0
    for (let index = 0; index < s.length; index++) {
        if (s[index]==='L') 
            counter++
        else
            counter--
        if (counter===0) result++ 
    }
    return result
};