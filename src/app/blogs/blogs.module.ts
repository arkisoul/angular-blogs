import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogsListComponent } from './components/blogs-list/blogs-list.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogsRoutingModule } from './blogs-routing.module';

@NgModule({
  declarations: [BlogsListComponent, BlogComponent, BlogDetailsComponent],
  imports: [CommonModule, BlogsRoutingModule, FormsModule, ReactiveFormsModule],
})
export class BlogsModule {}
