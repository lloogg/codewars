export function sumOfIntervals(intervals: [number, number][]) {
  let set = new Set();
  for (let i = 0; i < intervals.length; i++) {
    let a = intervals[i][0];
    let b = intervals[i][1];
    for (let j = a; j < b; j++) {
      if (!set.has(j)) {
        set.add(j);
      }
    }
  }
  return set.size;
}
console.log(
  sumOfIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
);
console.log(
  sumOfIntervals([
    [1, 5],
    [1, 5],
  ])
);

console.log(
  sumOfIntervals([
    [1, 5],
    [6, 10],
  ])
);
