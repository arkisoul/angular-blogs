import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBlog, TNewBlog } from '../interfaces/blog.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  add(data: TNewBlog): Observable<IBlog> {
    return this.http.post<IBlog>(`${this.baseUrl}/posts`, data, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
  
  edit(data: IBlog): Observable<IBlog> {
    return this.http.put<IBlog>(`${this.baseUrl}/posts/${data.id}`, data, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  getAll(): Observable<IBlog[]> {
    return this.http.get<IBlog[]>(`${this.baseUrl}/posts`);
  }

  getBlogById(id: number): Observable<IBlog> {
    return this.http.get<IBlog>(`${this.baseUrl}/posts/${id}`);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/posts/${id}`);
  }
}
