import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css'],
})
export class BlogAddComponent implements OnInit {
  // reactive blog add form
  newBlogFormGroup: FormGroup;

  constructor(private blogsService: BlogsService) {
    this.createNewBlogFormGroup();
  }

  ngOnInit(): void {}

  createNewBlogFormGroup() {
    this.newBlogFormGroup = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30),
      ]),
      userId: new FormControl(this.generateUserId(), Validators.required),
      body: new FormControl('', Validators.required),
    });
  }

  generateUserId(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  addNewBlog() {
    this.blogsService.add(this.newBlogFormGroup.value).subscribe(blog => console.log(blog));
    this.newBlogFormGroup.reset();
  }
}
