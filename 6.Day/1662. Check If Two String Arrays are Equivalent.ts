function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    return word1.reduce((acc,curr)=> acc+curr,'') === word2.reduce((acc,curr)=> acc+curr,'')
};