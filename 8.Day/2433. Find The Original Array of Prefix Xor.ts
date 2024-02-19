function findArray(pref: number[]): number[] {
  return pref.map((x, i) => x ^ pref[i - 1]);
}
