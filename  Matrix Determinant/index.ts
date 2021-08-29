// 求行列式，输入是 n * n 的矩阵
export function determinant(m: Array<Array<number>>): number {
  let len = m.length;
  let res = 0;
  if (len === 1) {
    return m[0][0];
  }
  let temp: Array<Array<number>> = [];
  for (let i = 0; i < len - 1; i++) {
    temp[i] = [];
  }
  let flag = 1;

  for (let i = 0; i < len; i++) {
    // clear temp
    for (let i = 0; i < len - 1; i++) {
      temp[i] = [];
    }
    for (let j = 1; j < len; j++) {
      for (let k = 0; k < len; k++) {
        if (i !== k) {
          temp[j - 1].push(m[j][k]);
        }
      }
    }
    res += flag * determinant(temp) * m[0][i];
    flag *= -1;
  }
  return res;
}

console.log(
  determinant([
    [2, 5, 3],
    [1, -2, -1],
    [1, 3, 4],
  ])
);
