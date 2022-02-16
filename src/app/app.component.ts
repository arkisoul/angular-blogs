import { Component, VERSION } from '@angular/core';

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

  handleSubmit(value: string) {
    console.log('clicked me.', value)
    this.flag = !this.flag;
  }
}
