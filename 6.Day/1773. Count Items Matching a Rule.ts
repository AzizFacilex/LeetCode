function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let count = 0
    items.forEach((item) => {
       if (ruleKey === 'type' && item[0] === ruleValue) {
            count++    
       }
       if (ruleKey === 'color' && item[1] === ruleValue) {
            count++
       }
       if (ruleKey === 'name' && item[2] === ruleValue) {
            count++
       }
    })
    return count
};