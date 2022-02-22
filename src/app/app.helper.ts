export const add = (a: number, b: number) => a + b;

class Calculation {
  name = 'calc';
  private operations: string[] = [];

  constructor() {}

  add(a: number, b: number) {
    this.operations.push('add');
    return a + b;
  }

  substract(a: number, b: number) {
    this.operations.push('substract');
    return Math.abs(a - b);
  }

  getOperations() {
    return this.operations;
  }
}

export const calc = new Calculation();
