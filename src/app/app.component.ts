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
  inputField: string = 'test';
  ops: string[];
  observable: Observable<string>;
  subscriber: Subscriber<string>;
  subject: Subject<string>;

  constructor(private appService: AppService) {
    this.appService.getOperations().subscribe(value => {
      this.ops = value;
    });
    this.appService.add(10, 20);
    this.appService.substract(30, 20);
    this.observable = new Observable(sub => {
      this.subscriber = sub;
      sub.next('First')
      sub.next('Second')
      sub.next('Third')
      sub.next('Fourth')
      setTimeout(() => {
        sub.next('Fifth');
      }, 1000)
      sub.next('Sixth')
    });
    this.subject = new Subject();
  }
  
  ngOnInit(): void {
    console.log('AppComp ngOnInit');
    this.observable.subscribe((value) =>
    console.log('S1:: ', value)
    );
    this.observable.subscribe((value) =>
    console.log('S2:: ', value)
    );
    this.subject.subscribe(value => console.log('Sub-S1:: ', value))
    this.subject.next('Sub-First')
    this.subject.subscribe(value => console.log('Sub-S2:: ', value))
    this.subject.next('Sub-Second')
    this.subject.next('Sub-Third')
  }

  pushAValue() {
    // const authors = ['John Doe', 'jane doe', 'john smith'];
    // this.subscriber.next(authors[Math.floor(Math.random() * 3)]);
  }
  /*

  ngOnDestroy(): void {
    console.log('AppComp ngOnDestroy');
  }

  ngAfterViewChecked(): void {
    console.log('AppComp ngAfterViewChecked');
  }
  
  ngAfterViewInit(): void {
    console.log('AppComp ngAfterViewInit');
  } */

  handleSubmit(value: string) {
    console.log('clicked me.', value);
    this.flag = !this.flag;
  }

  getOperations() {
    this.appService.getOperations().subscribe(value => {
      console.log('app comp ', value)
    });
  }
}
