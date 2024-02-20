// 32-bit int min-max range
const MIN = -2147483648
const MAX = 2147483647

function reverse(x: number): number {
    let reveresed = parseInt(x.toString().split('').reverse().join(''))
    if(x < 0) reveresed = reveresed * -1
    return (reveresed < MIN || reveresed > MAX) ? 0 : reveresed
};