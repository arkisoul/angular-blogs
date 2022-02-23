import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  { path: 'blogs/:blogId', component: BlogDetailsComponent },
  { path: 'blogs', component: BlogsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
