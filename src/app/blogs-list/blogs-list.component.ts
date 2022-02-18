import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { IBlog } from '../interfaces/blog.interface';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent {
  @Input('appname') appname: string;

  blogs: IBlog[] = [
    {
      id: 1,
      title: 'Blog 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: true,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'JOHN DOE',
    },
    {
      id: 2,
      title: 'Blog 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: true,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'Jane doe',
    },
    {
      id: 3,
      title: 'Blog 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'John doe',
    },
    {
      id: 4,
      title: 'Blog 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'jonAs Doe',
    },
    {
      id: 5,
      title: 'Blog 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'John Smith',
    },
    {
      id: 6,
      title: 'Blog 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: true,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'John Doe',
    },
    {
      id: 7,
      title: 'Blog 7',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'John Doe',
    },
    {
      id: 8,
      title: 'Blog 8',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'Sean Pean',
    },
    {
      id: 9,
      title: 'Blog 9',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'Damian',
    },
    {
      id: 10,
      title: 'Blog 10',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      isNew: false,
      publishedAt: new Date(),
      modifiedAt: new Date(),
      author: 'Daniel',
    },
  ];
  fruit: string = 'mango';
  fruitMango: string = 'mango';
  titleColor: string = '#ff0000';
  fontSize: string = '20px';
  titleStyle = {
    color: this.titleColor,
    'font-size.px': 40,
    'text-decoration': 'underline',
  };

  // template driven blog add form
  blogTitle: string = '';
  blogAuthor: string;
  blogDesc: string;

  blog = {
    title: '',
    author: '',
    desc: ''
  }

  // reactive blog add form
  title: FormControl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]);
  author: FormControl = new FormControl('');
  desc: FormControl = new FormControl('');

  /* constructor() {
    console.log('Blog list constructor');
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
  } */

  onDeleteBlog(blogId: number) {
    this.blogs = this.blogs.filter((blog) => blog.id !== blogId);
  }

  addBlog() {
    console.log(this.blogAuthor, this.blogTitle, this.blogDesc);
  }

  addBlogReactive() {
    console.log(this.author, this.title, this.desc);
  }
}
