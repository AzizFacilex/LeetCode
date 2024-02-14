function mostWordsFound(sentences: string[]): number {
    var max:number=0
    for (let index = 0; index < sentences.length; index++) {
        const element = sentences[index];
        const numberOfWords = element.split(' ').length
        if (numberOfWords>max)
            max=numberOfWords
    }
    return max
};