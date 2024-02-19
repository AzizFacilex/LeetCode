class SubrectangleQueries {
  rectange: number[][];
  constructor(rectangle: number[][]) {
    this.rectange = rectangle;
  }

  updateSubrectangle(
    row1: number,
    col1: number,
    row2: number,
    col2: number,
    newValue: number
  ): void {
    for (let i = col1; i <= col2; i++) {
        for (let j= row1; j <= row2; j++) {
            this.rectange[j][i] = newValue
        }
        
    }
  }

  getValue(row: number, col: number): number {
    return this.rectange[row][col]
  }
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
