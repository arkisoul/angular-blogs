import { Component, OnInit } from '@angular/core';

interface Blog {
  title: string;
  description: string;
  isNew: boolean;
}

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent implements OnInit {
  blogs: Blog[] = [
    {
      title: 'Blog 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: true
    },
    {
      title: 'Blog 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: true
    },
    {
      title: 'Blog 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false
    },
    {
      title: 'Blog 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false
    },
    {
      title: 'Blog 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false
    },
    {
      title: 'Blog 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: true
    },
    {
      title: 'Blog 7',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false
    },
    {
      title: 'Blog 8',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false
    },
    {
      title: 'Blog 9',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false
    },
    {
      title: 'Blog 10',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false
    }
  ];
  fruit: string = 'mango';
  fruitMango: string = 'mango';
  titleColor: string = '#ff0000';
  titleStyle = { 'color': this.titleColor };
  
  constructor() {
    // this.blogs = [];
  }

  ngOnInit(): void {}
}
