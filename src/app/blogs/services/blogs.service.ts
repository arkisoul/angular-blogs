import { Injectable } from '@angular/core';

import { IBlog } from '../../interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogs: IBlog[];

  constructor() {
    this.blogs = [];
    this.generateBlogs();
  }
  
  private generateBlogs() {
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

  getAll(): IBlog[] {
    return [...this.blogs];
  }

  getBlogById(id: number) {
    const blog = this.blogs.filter(blog => blog.id === id);
    if(blog.length) return blog[0]

    return null
  }
}
