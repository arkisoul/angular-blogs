import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsListComponent } from './components/blogs-list/blogs-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogAddComponent } from './components/blog-add/blog-add.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';

const routes: Routes = [
  { path: 'new', component: BlogAddComponent },
  { path: ':blogId/edit', component: BlogEditComponent },
  { path: ':blogId', component: BlogDetailsComponent },
  {
    path: '',
    pathMatch: 'full',
    component: BlogsListComponent,
    data: { title: 'Blog List', keywords: ['blogs', 'list', 'blog', 'tags'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
