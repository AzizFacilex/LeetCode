function longestPalindrome(s: string): string {
    let result:string=""
    for (let index = 0; index < s.length; index++) {
        if (result.length<=2) {
            result = s[index];
            break
        }
           
        const left = s[index];
        const right = s[s.length-1-index];
        if (left===right)
            result+=left
        else if (index >s.length-1-index)
            break
        else
            result=""
    }
    return result
};