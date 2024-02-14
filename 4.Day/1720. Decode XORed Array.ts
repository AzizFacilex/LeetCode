function decode(encoded: number[], first: number): number[] {
    var result:number[]=[first]
    for (let index = 0; index < encoded.length; index++) {
        result.push(encoded[index]^result[index])
    }
    return result
};