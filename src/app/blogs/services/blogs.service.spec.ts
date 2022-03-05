import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { BlogsService } from './blogs.service';
import { BlogsMockService } from './blogs-mock.service';

describe('BlogsService', () => {
  let service: BlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: BlogsService, useClass: BlogsMockService }],
    });
    service = TestBed.inject(BlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a blog', () => {
    service
      .add({ title: 'Blog title', body: 'Blog description', userId: 1 })
      .subscribe((value) => {
        expect(value.title).toEqual('Blog title');
        expect(value.body).toEqual('Blog description');
        expect(value.userId).toEqual(1);
        expect(value.id).toEqual(1);
      });
  });

  it('should edit a blog', () => {
    service
      .edit({ id: 2, title: 'Blog title', body: 'Blog description', userId: 1 })
      .subscribe((value) => {
        expect(value.title).toEqual('Blog title');
        expect(value.body).toEqual('Blog description');
        expect(value.userId).toEqual(1);
        expect(value.id).toEqual(2);
      });
  });

  it('should get all blogs', () => {
    service
      .getAll()
      .subscribe((value) => {
        expect(value.length).toEqual(2);
        expect(value[0].title).toEqual('Blog 1');
      });
  });

  it('should getBlog by Id', () => {
    service
      .getBlogById(1)
      .subscribe((value) => {
        expect(value.id).toEqual(1);
      });
    service
      .getBlogById(2)
      .subscribe((value) => {
        expect(value.id).toEqual(2);
      });
  });
  
  it('should delete a blog by Id', () => {
    service
      .delete(1)
      .subscribe((value) => {
        expect(value).toEqual({});
      });
  });
});
