function numJewelsInStones(jewels: string, stones: string): number {
    var output:number = 0
    for (let index = 0; index < stones.length; index++) {
        for (let index2 = 0; index2 < jewels.length; index2++) {
            if (jewels[index2] === stones[index]) {
                output += 1
            }
        }
    }
    return output;
};