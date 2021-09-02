export class Kata {
  static highAndLow(numbers: string): string {
    let nums = numbers.split(" ").map((v) => parseInt(v));
    let smallest = nums[0];
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < smallest) {
        smallest = nums[i];
      }
      if (nums[i] > largest) {
        largest = nums[i];
      }
    }
    return largest + " " + smallest;
  }
}

console.log(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
