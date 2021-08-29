function tokenizer(input: string): Array<any> {
  let current = 0;
  let tokens: Array<any> = [];
  while (current < input.length) {
    let character = input[current];

    let whitespace = /\s/;
    if (whitespace.test(character)) {
      current++;
      continue;
    }
    let digit = /[0-9.]/;
    if (digit.test(character)) {
      let number = "";
      while (digit.test(character)) {
        number += character;
        current++;
        character = input[current];
      }
      tokens.push(number);
      continue;
    }
    if (character === "(" || character === ")") {
      tokens.push(character);
      current++;
      continue;
    }

    if (character === "*" || character === "+" || character === "/") {
    }

    if (character === "-") {
      // if there is no operator in front of '-' or this '-' is the first operator, then it means negative
      if (
        tokens.length === 0 ||
        tokens[tokens.length - 1] === "-" ||
        tokens[tokens.length - 1] === "+" ||
        tokens[tokens.length - 1] === "*" ||
        tokens[tokens.length - 1] === "/" ||
        tokens[tokens.length - 1] === "("
      ) {
        tokens.push("neg");
      } else {
        tokens.push(character);
      }

      current++;
      continue;
    }
    tokens.push(character);
    current++;
    continue;
  }
  return tokens;
}

function parser(input: Array<string>): number {
  let token: string = input[0];
  let current = 0;
  function match(expected: string) {
    if (expected === token) {
      current++;
      token = input[current];
    } else {
      throw new Error();
    }
  }

  function exp(): number {
    let temp = term();
    while (token === "+" || token === "-") {
      switch (token) {
        case "+":
          match("+");
          temp += term();
          break;
        case "-":
          match("-");
          temp -= term();
          break;
      }
    }
    return temp;
  }
  function term(): number {
    let temp = factor();
    while (token === "*" || token === "/") {
      switch (token) {
        case "/":
          match("/");
          temp /= factor();
          break;
        case "*":
          match("*");
          temp *= factor();
          break;
      }
    }

    return temp;
  }
  function factor(): number {
    let temp = 1;
    let flag = 1;
    if (token === "neg") {
      match("neg");
      flag = -1;
    }
    if (token === "(") {
      match("(");
      temp = flag * exp();
      match(")");
    } else if (parseFloat(token) !== NaN) {
      temp = flag * parseFloat(token);
      token = input[++current];
    }
    return temp;
  }

  return exp();
}

export function calc(expression: string): number {
  let tokens = tokenizer(expression);
  let res = parser(tokens);

  return res;
}
console.log(calc("2 /2+3 * 4.75- -6"));
