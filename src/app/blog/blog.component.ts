import { Component, Input } from '@angular/core';

import { IBlog } from '../interfaces/blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  @Input('blogData') public blog: IBlog;
  @Input() public blogLength: number;
  @Input('app') public appname: string;

  constructor() {}
}
