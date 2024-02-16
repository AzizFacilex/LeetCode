function numberOfMatches(n: number): number {
  var result: number = 0;

  function rec(currentNumber: number) {
    if (currentNumber > 1) {
      if (currentNumber % 2 !== 0) {
        result += (currentNumber - 1) / 2;
        rec((currentNumber + 1) / 2);
      } else {
        result += currentNumber / 2;
        rec(currentNumber / 2);
      }
    }
    return result;
  }
  rec(n);
  return result;
}
