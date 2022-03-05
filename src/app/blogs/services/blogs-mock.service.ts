import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IBlog, TNewBlog } from '../interfaces/blog.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogsMockService {
  add(data: TNewBlog): Observable<IBlog> {
    return of({ ...data, id: 1 });
  }

  edit(data: IBlog): Observable<IBlog> {
    return of(data);
  }

  getAll(): Observable<IBlog[]> {
    return of([
      { id: 1, title: 'Blog 1', body: 'Blog body', userId: 1 },
      { id: 2, title: 'Blog 2', body: 'Blog body', userId: 2 },
    ]);
  }

  getBlogById(id: number): Observable<IBlog> {
    return of({ id: id, title: 'Blog 1', body: 'Blog body', userId: 1 });
  }

  delete(id: number): Observable<{}> {
    return of({});
  }
}
