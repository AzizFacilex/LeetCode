function firstPalindrome(words: string[]): string {
    let result:string=''
    for (let index = 0; index < words.length; index++) {
        let palindromic:boolean=true
        let currentWord:string= words[index]
        for (let j = 0; j < currentWord.length; j++) {
            const left = currentWord[j];
            const right = currentWord[currentWord.length-1-j];
            if (left!==right) {
                palindromic=false
                break
            }
        }
        if (palindromic) {
            result=currentWord
            break
        }
        
    }
    return result
};