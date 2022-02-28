import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  name = 'calc';
  private operations: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {}

  add(a: number, b: number) {
    const value = this.operations.getValue();
    value.push('add')
    this.operations.next(value)
    return a + b;
  }

  substract(a: number, b: number) {
    const value = this.operations.getValue();
    value.push('substract');
    this.operations.next(value);
    return Math.abs(a - b);
  }

  getOperations() {
    return this.operations.asObservable();
  }
}
