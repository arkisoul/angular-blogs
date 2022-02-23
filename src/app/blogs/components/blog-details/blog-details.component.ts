import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';
import { IBlog } from '../../interfaces/blog.interface';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  blog: IBlog;

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const blogId = parseInt(params.blogId);
      this.blog = this.blogsService.getBlogById(blogId);
    });
    this.route.queryParams.subscribe((query) => {
      console.log(query)
    })
  }
}
