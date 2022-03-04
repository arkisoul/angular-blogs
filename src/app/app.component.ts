import { Component, VERSION } from '@angular/core';
import { Observable, Subscriber, Subject } from 'rxjs';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Blogs';
  subtitle = 'Learning Angular ' + VERSION.major;
  flag = false;
  ops: string[];

  constructor(private appService: AppService) {
    this.appService.add(10, 20);
    this.appService.substract(30, 20);
    this.getOperations();
  }

  handleSubmit() {
    this.flag = !this.flag;
  }

  getOperations() {
    this.appService.getOperations().subscribe(value => {
      this.ops = value;
    });
  }
}
