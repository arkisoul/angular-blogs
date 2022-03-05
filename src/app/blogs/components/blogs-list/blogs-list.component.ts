import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { IBlog } from '../../interfaces/blog.interface';
import { AppService } from '../../../app.service';
import { BlogsService } from '../../services/blogs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent implements OnInit, OnDestroy {
  appname: string = 'Blogs';

  blogs: IBlog[] = [];
  filteredBlogs: IBlog[] = [];
  fruit: string = 'mango';
  fruitMango: string = 'mango';
  titleColor: string = '#ff0000';
  fontSize: string = '20px';
  titleStyle = {
    color: this.titleColor,
    'font-size.px': 40,
    'text-decoration': 'underline',
  };

  listOrder: string;
  searchField: FormControl;
  getAllSub: Subscription;
  searchFieldSub: Subscription;

  constructor(
    private router: Router,
    private blogsService: BlogsService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.route.queryParams.subscribe((query) => {
      this.listOrder = query.order;
      this.sortBlogList(this.listOrder);
    });
    this.searchField = this.fb.control('');
  }

  ngOnInit(): void {
    this.getAllSub = this.blogsService.getAll().subscribe((blogs) => {
      this.filteredBlogs = this.blogs = blogs;
      this.sortBlogList(this.listOrder);
    });
    this.searchFieldSub = this.searchField.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value: string) => {
        this.filteredBlogs = this.blogs.filter((blog) =>
          blog.title.startsWith(value)
        );
      });
  }

  ngOnDestroy(): void {
    this.getAllSub.unsubscribe();
    this.searchFieldSub.unsubscribe();
  }

  sortBlogList(order: string = 'asc') {
    this.blogs = [...this.blogs].sort((a, b) => {
      if (a.id < b.id) return order === 'asc' ? -1 : 1;
      if (a.id === b.id) return 0;
      return order === 'asc' ? 1 : -1;
    });
  }

  onDeleteBlog(blogId: number) {
    this.blogsService.delete(blogId).subscribe((res) => {
      this.blogs = this.blogs.filter((blog) => blog.id !== blogId);
    });
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
