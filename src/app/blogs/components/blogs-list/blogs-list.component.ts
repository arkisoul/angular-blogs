import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IBlog } from '../../interfaces/blog.interface';
import { AppService } from '../../../app.service';
import { BlogsService } from '../../services/blogs.service';

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

  ops: string[];
  listOrder: string;

  constructor(
    private appService: AppService,
    private router: Router,
    private blogsService: BlogsService,
    private route: ActivatedRoute
  ) {
    this.appService.substract(20, 20);
    this.ops = this.appService.getOperations();
    this.route.queryParams.subscribe((query) => {
      this.listOrder = query.order;
      this.sortBlogList(this.listOrder);
    });
    this.route.data.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {
    this.blogsService.getAll().subscribe((blogs) => (this.blogs = blogs));
    this.sortBlogList(this.listOrder);
  }

  sortBlogList(order: string = 'asc') {
    this.blogs = [...this.blogs].sort((a, b) => {
      if (a.id < b.id) return order === 'asc' ? -1 : 1;
      if (a.id === b.id) return 0;
      return order === 'asc' ? 1 : -1;
    });
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
    this.blogsService.delete(blogId).subscribe((res) => {
      this.blogs = this.blogs.filter((blog) => blog.id !== blogId);
    });
  }

  addBlog() {
    console.log(this.blogAuthor, this.blogTitle, this.blogDesc);
  }

  getOperations() {
    const operations = this.appService.getOperations();
    console.log(operations);
  }

  showBlogDetails(blogId: number) {
    this.router.navigate([`/blogs/${blogId}`], {
      queryParams: { sort: 'asc' },
    });
  }

  onEditBlog(blogId: number) {
    this.router.navigate([`/blogs/${blogId}/edit`]);
  }
}
