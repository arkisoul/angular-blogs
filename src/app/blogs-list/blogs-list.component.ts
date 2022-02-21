import { Component, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { IBlog } from '../interfaces/blog.interface';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent {
  @Input('appname') appname: string;

  blogs: IBlog[] = [];
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
    desc: '',
  };

  // reactive blog add form
  reactiveBlog = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(30),
    ]),
    author: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required)
  });
  // reactiveBlog = {
  //   title: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(10),
  //     Validators.maxLength(30),
  //   ]),
  //   author: new FormControl('', Validators.required),
  //   desc: new FormControl('', Validators.required)
  // };

  constructor() {
    const authors = ['John Doe', 'jane doe', 'john smith'];
    const now = new Date();
    for (let index = 1; index <= 10; index++) {
      this.blogs.push({
        id: index,
        title: `Blog title ${index}`,
        description: 'lorem ipsum decor is dummy text.',
        isNew: index % 2 === 0,
        author: authors[index % 3],
        publishedAt: now,
        modifiedAt: now,
      });
    }
  }
  /* 
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
    console.log(this.reactiveBlog.value);
  }
}
