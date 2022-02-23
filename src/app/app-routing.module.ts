import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'blogs', component: BlogsListComponent },
  { path: 'blogs/blog-details', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
