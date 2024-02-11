function differenceOfSums(n: number, m: number): number {
    var num1: number = 0;
    var num2: number = 0;
    for (let index = 1; index <= n; index++) {
        if (index % m !== 0) {
            num1 += index; 
        } else {
            num2 += index;
        }
    }
    return num1 - num2
};