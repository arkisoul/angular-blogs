import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from '../../interfaces/blog.interface';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
})
export class BlogEditComponent implements OnInit {
  newBlogFormGroup: FormGroup;
  blog: IBlog;

  constructor(
    private blogsService: BlogsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createUpdateBlogFormGroup();
    this.route.params.subscribe((params) => {
      this.blogsService.getBlogById(params.blogId).subscribe((blog) => {
        this.blog = blog;
        this.newBlogFormGroup.get('id').patchValue(this.blog.id);
        this.newBlogFormGroup.get('title').patchValue(this.blog.title);
        this.newBlogFormGroup.get('body').patchValue(this.blog.body);
        this.newBlogFormGroup.get('userId').patchValue(this.blog.id);
      });
    });
  }

  ngOnInit(): void {}

  createUpdateBlogFormGroup() {
    this.newBlogFormGroup = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30),
      ]),
      userId: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
    });
  }

  updateBlog() {
    if (this.newBlogFormGroup.invalid) {
      return;
    }

    this.blogsService.edit(this.newBlogFormGroup.value).subscribe(() => {
      this.router.navigate(['/blogs'])
    });
    this.newBlogFormGroup.reset();
  }
}
