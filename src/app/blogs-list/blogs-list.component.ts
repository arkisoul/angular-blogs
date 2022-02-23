import { Component, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { IBlog } from '../interfaces/blog.interface';
import { AppService } from '../app.service';
import { BlogsService } from '../blogs/services/blogs.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent {
  appname: string = 'Blogs';

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
    desc: new FormControl('', Validators.required),
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
  ops: string[];

  constructor(
    private appService: AppService,
    private router: Router,
    private blogsService: BlogsService
  ) {
    this.appService.substract(20, 20);
    this.ops = this.appService.getOperations();
  }

  ngOnInit(): void {
    this.blogs = this.blogsService.getAll();
  }
  /* 
  

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

  getOperations() {
    const operations = this.appService.getOperations();
    console.log(operations);
  }

  showBlogDetails(blogId: number) {
    this.router.navigateByUrl(`/blogs/${blogId}`);
  }
}
