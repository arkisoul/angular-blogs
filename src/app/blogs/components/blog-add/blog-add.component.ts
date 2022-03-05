import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css'],
})
export class BlogAddComponent implements OnInit {
  // reactive blog add form
  newBlogFormGroup: FormGroup;

  constructor(private blogsService: BlogsService, private fb: FormBuilder) {
    this.createNewBlogFormGroup();
  }

  ngOnInit(): void {}

  createNewBlogFormGroup() {
    this.newBlogFormGroup = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),
        ],
      ],
      userId: [this.generateUserId(), Validators.required],
      body: ['', Validators.required],
    });
  }

  generateUserId(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  addNewBlog() {
    if (this.newBlogFormGroup.invalid) {
      return;
    }

    this.blogsService
      .add(this.newBlogFormGroup.value)
      .subscribe((blog) => {});
    this.newBlogFormGroup.reset();
  }
}
