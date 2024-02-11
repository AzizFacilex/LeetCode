function findWordsContaining(words: string[], x: string): number[] {
    var result:number[] = []

    words.forEach((word, index) => {
        if (word.indexOf(x) !== -1) {
            result.push(index)
        }
    })

    return result
};