import { Component, OnInit } from '@angular/core';

interface Blog {
  title: string;
  description: string;
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
    },
    {
      title: 'Blog 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Blog 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Blog 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Blog 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Blog 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Blog 7',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Blog 8',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Blog 9',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Blog 10',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }
  ];
  
  constructor() {}

  ngOnInit(): void {}
}
