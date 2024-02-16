function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let result:number=0
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        if (element.some((x,i)=>{
            if (x===ruleValue) {
                if (i===0 && ruleKey==='type') {
                    return true
                } else if (i===1 && ruleKey==='color'){
                    return true
                } else if (i===2 && ruleKey==='name'){
                    return true
                }
            }
        }))
            result++   
              
    }
    return result
};