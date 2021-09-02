export function containAllRots(str: string, arr: string[]): boolean {
  if (str.length === 0) {
    return true;
  }
  let rotations: string[] = [];
  rotations.push(str);

  for (let i = 0; i < str.length; i++) {
    let rotation: string = rotations[rotations.length - 1];
    let item =
      rotation[rotation.length - 1] +
      rotation.substring(0, rotation.length - 1);
    if (rotations.indexOf(item) === -1) {
      rotations.push(item);
    }
  }

  let set = new Set(arr);
  let iterator = set.values();
  let value = iterator.next().value;
  let count = 0;
  while (value) {
    if (rotations.indexOf(value) !== -1) {
      count++;
    }
    value = iterator.next().value;
  }
  return count === rotations.length;
}

console.log(
  containAllRots("abcd", [
    "TzYxlgfnhf",
    "yqVAuoLjMLy",
    "BhRXjYA",
    "YABhRXj",
    "hRXjYAB",
    "jYABhRX",
    "XjYABhR",
    "ABhRXjY",
  ])
);
console.log(
  containAllRots("12341234", ["12341234", "41234123", "34123412", "23412341"])
);
