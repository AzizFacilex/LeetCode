function restoreString(s: string, indices: number[]): string {
    let dict:string[]= []
    for (let index = 0; index < indices.length; index++) {
        const element = indices[index];
        dict[element]=s[index]
    }
    return dict.join('')
     
};