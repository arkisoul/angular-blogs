import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogsListComponent } from './components/blogs-list/blogs-list.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogAddComponent } from './components/blog-add/blog-add.component';

@NgModule({
  declarations: [BlogsListComponent, BlogComponent, BlogDetailsComponent, BlogAddComponent],
  imports: [CommonModule, BlogsRoutingModule, FormsModule, ReactiveFormsModule],
})
export class BlogsModule {}
