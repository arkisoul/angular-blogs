import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  VERSION,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit
{
  title = 'Angular Blogs';
  subtitle = 'Learning Angular ' + VERSION.major;
  flag = false;
  inputField: string = 'test';

  constructor() {
    console.log('AppComp Constructor');
  }

  handleSubmit(value: string) {
    console.log('clicked me.', value);
    this.flag = !this.flag;
  }

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
  }
}
