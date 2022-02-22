import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
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
