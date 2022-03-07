import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { BlogsService } from '../../services/blogs.service';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { BlogEditComponent } from '../blog-edit/blog-edit.component';
import { BlogComponent } from '../blog/blog.component';
import { BlogsListComponent } from './blogs-list.component';

describe('BlogsListComponent', () => {
  let component: BlogsListComponent;
  let fixture: ComponentFixture<BlogsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BlogsListComponent,
        BlogComponent,
        BlogEditComponent,
        BlogDetailsComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'blogs/:blogId/edit',
            component: BlogEditComponent,
          },
          {
            path: 'blogs/:blogId',
            component: BlogDetailsComponent,
          },
        ]),
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should blogs length equals zero', () => {
    expect(component.blogs.length).toEqual(0);
    expect(component.filteredBlogs.length).toEqual(0);
  });

  it(`should render 'No blogs available' when no blogs`, () => {
    const debugElement = fixture.debugElement;
    expect(
      debugElement.query(By.css('#no-blog')).nativeElement.textContent
    ).toContain('No blogs available');
  });

  it(`should render blogs list`, fakeAsync(() => {
    const service = fixture.debugElement.injector.get(BlogsService);
    spyOn(service, 'getAll').and.returnValue(
      of([
        { id: 1, title: 'Blog 1', body: 'Blog body', userId: 1 },
        { id: 2, title: 'Blog 2', body: 'Blog body', userId: 2 },
      ])
    );
    component.ngOnInit();
    tick(2000);
    expect(component.blogs.length).toEqual(2);

    const debugElement = fixture.debugElement;
    fixture.detectChanges();
    expect(debugElement.queryAll(By.css('app-blog')).length).toEqual(2);
    expect(debugElement.query(By.css('#no-blog'))).toBeNull();
  }));

  it(`should [app-blog] receives appname, blogLenght, blogData`, fakeAsync(() => {
    const service = fixture.debugElement.injector.get(BlogsService);
    spyOn(service, 'getAll').and.returnValue(
      of([
        { id: 1, title: 'Blog 1', body: 'Blog body', userId: 1 },
        { id: 2, title: 'Blog 2', body: 'Blog body', userId: 2 },
      ])
    );
    component.ngOnInit();
    tick(2000);

    const debugElement = fixture.debugElement;
    fixture.detectChanges();
    expect(
      debugElement.queryAll(By.css('app-blog'))[0].attributes[
        'ng-reflect-appname'
      ]
    ).toContain(component.appname);
    expect(
      debugElement.queryAll(By.css('app-blog'))[0].attributes[
        'ng-reflect-blog-length'
      ]
    ).toContain('2');
  }));

  it(`should [app-blog] trigger 'onDeleteBlog' method on delete event`, fakeAsync(() => {
    const service = fixture.debugElement.injector.get(BlogsService);
    spyOn(service, 'getAll').and.returnValue(
      of([
        { id: 1, title: 'Blog 1', body: 'Blog body', userId: 1 },
        { id: 2, title: 'Blog 2', body: 'Blog body', userId: 2 },
      ])
    );
    component.ngOnInit();
    tick(2000);

    const debugElement = fixture.debugElement;
    fixture.detectChanges();
    const blogComp = debugElement.queryAll(By.css('app-blog'))[0];
    const spyOnDelete = spyOn(component, 'onDeleteBlog');
    blogComp.triggerEventHandler('delete', 1);
    expect(spyOnDelete).toHaveBeenCalled();
    expect(spyOnDelete).toHaveBeenCalledWith(1);
  }));

  it(`should [app-blog] trigger 'showBlogDetails' method on show event`, fakeAsync(() => {
    const service = fixture.debugElement.injector.get(BlogsService);
    spyOn(service, 'getAll').and.returnValue(
      of([
        { id: 1, title: 'Blog 1', body: 'Blog body', userId: 1 },
        { id: 2, title: 'Blog 2', body: 'Blog body', userId: 2 },
      ])
    );
    component.ngOnInit();
    tick(2000);

    const debugElement = fixture.debugElement;
    fixture.detectChanges();
    const blogComp = debugElement.queryAll(By.css('app-blog'))[0];
    const spyOnShow = spyOn(component, 'showBlogDetails');
    blogComp.triggerEventHandler('show', 1);
    expect(spyOnShow).toHaveBeenCalled();
    expect(spyOnShow).toHaveBeenCalledWith(1);
  }));

  it(`should [app-blog] trigger 'onEditBlog' method on edit event`, fakeAsync(() => {
    const service = fixture.debugElement.injector.get(BlogsService);
    spyOn(service, 'getAll').and.returnValue(
      of([
        { id: 1, title: 'Blog 1', body: 'Blog body', userId: 1 },
        { id: 2, title: 'Blog 2', body: 'Blog body', userId: 2 },
      ])
    );
    component.ngOnInit();
    tick(2000);

    const debugElement = fixture.debugElement;
    fixture.detectChanges();
    const blogComp = debugElement.queryAll(By.css('app-blog'))[0];
    const spyOnEdit = spyOn(component, 'onEditBlog');
    blogComp.triggerEventHandler('edit', 1);
    expect(spyOnEdit).toHaveBeenCalled();
    expect(spyOnEdit).toHaveBeenCalledWith(1);
  }));

  it(`should navigate to '/blogs/:blogId/edit' on onEditBlog call`, fakeAsync(() => {
    fixture.ngZone.run(() => {
      const location: Location = TestBed.inject(Location);
      component.onEditBlog(1);
      tick(1000);
      expect(location.path()).toEqual('/blogs/1/edit');
    })
  }));
  
  it(`should navigate to '/blogs/:blogId' on onShowDetails call`, fakeAsync(() => {
    fixture.ngZone.run(() => {
      const location: Location = TestBed.inject(Location);
      component.showBlogDetails(1);
      tick(1000);
      expect(location.path()).toContain('/blogs/1');
    })
  }));
  
  it(`should call blogService delete api on onDeleteBlog call`, fakeAsync(() => {
    const service = fixture.debugElement.injector.get(BlogsService);
    const spyOnDelete = spyOn(service, 'delete').and.returnValue(of({}));
    component.onDeleteBlog(1);
    expect(spyOnDelete).toHaveBeenCalledTimes(1);
    expect(spyOnDelete).toHaveBeenCalledWith(1);
  }));
});
