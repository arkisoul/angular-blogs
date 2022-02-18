import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, Input } from '@angular/core';

import { IBlog } from '../interfaces/blog.interface';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit {
  @Input('appname') appname: string;

  blogs: IBlog[] = [
    {
      title: 'Blog 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: true,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'JOHN DOE'
    },
    {
      title: 'Blog 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: true,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'Jane doe'
    },
    {
      title: 'Blog 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'John doe'
    },
    {
      title: 'Blog 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'jonAs Doe'
    },
    {
      title: 'Blog 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'John Smith'
    },
    {
      title: 'Blog 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: true,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'John Doe'
    },
    {
      title: 'Blog 7',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'John Doe'
    },
    {
      title: 'Blog 8',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'Sean Pean'
    },
    {
      title: 'Blog 9',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'Damian'
    },
    {
      title: 'Blog 10',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'Daniel'
    }
  ];
  fruit: string = 'mango';
  fruitMango: string = 'mango';
  titleColor: string = '#ff0000';
  fontSize: string = '20px';
  titleStyle = { 'color': this.titleColor, 'font-size.px': 40, 'text-decoration': 'underline' };
  
  constructor() {
    console.log("Blog list constructor");
  }

  ngOnInit(): void {
    console.log('Blog list ngOnInit');
  }
  
  ngOnDestroy(): void {
    console.log('Blog list ngOnDestroy');
  }
  
  ngAfterViewChecked(): void {
    console.log('Blog list ngAfterViewChecked');
  }
  
  ngAfterViewInit(): void {
    console.log('Blog list ngAfterViewInit');
  }
}
