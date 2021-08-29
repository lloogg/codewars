export class G964 {
  public static productFib = (prod: number): Array<number | boolean> => {
    let f1 = 1;
    let f2 = 1;
    while (f1 * f2 <= prod) {
      if (f1 * f2 === prod) {
        return [f1, f2, true];
      }
      let temp = f2;
      f2 += f1;
      f1 = temp;
    }
    return [f1, f2, false];
  };
}
console.log(G964.productFib(5895));
