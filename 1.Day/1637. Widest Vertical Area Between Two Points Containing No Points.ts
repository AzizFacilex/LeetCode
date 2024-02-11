function maxWidthOfVerticalArea(points: number[][]): number {
    var result : number = 0;
    points.sort(function (a, b) { return a[0] - b[0]; });
    for (let index = 0; index < points.length-1; index++) {
        if (points[index+1][0] - points[index][0] > result) {
            result = points[index+1][0] - points[index][0]
        }
    }

    return result;
}