import { Component, VERSION } from '@angular/core';

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

  constructor(private appService: AppService) {
    this.appService.add(10, 20);
    this.appService.substract(30, 20);
  }
  /*
  ngOnInit(): void {
    console.log('AppComp ngOnInit');
  }

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
    const operations = this.appService.getOperations();
    console.log('AppComp ', operations);
  }
}
