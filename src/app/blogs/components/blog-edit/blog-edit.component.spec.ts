import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { IBlog } from '../../interfaces/blog.interface';
import { BlogsService } from '../../services/blogs.service';
import { BlogsListComponent } from '../blogs-list/blogs-list.component';

import { BlogEditComponent } from './blog-edit.component';

describe('BlogEditComponent', () => {
  let component: BlogEditComponent;
  let fixture: ComponentFixture<BlogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogEditComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'blogs', component: BlogsListComponent },
        ]),
        ReactiveFormsModule,
        FormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create EditBlog FormGroup', () => {
    expect(component.newBlogFormGroup).toBeTruthy();
  });

  it('should FormGroup be in invalid state', () => {
    expect(component.newBlogFormGroup.invalid).toBeTrue();
    expect(component.newBlogFormGroup.valid).toBeFalse();
  });

  it('should title be in invalid state', () => {
    expect(component.newBlogFormGroup.controls.title.invalid).toBeTrue();
  });

  it('should title length be between 10 to 30', () => {
    component.newBlogFormGroup.controls.title.setValue('Title');
    expect(component.newBlogFormGroup.controls.title.invalid).toBeTrue();
    expect(component.newBlogFormGroup.controls.title.errors).toBeTruthy();
    component.newBlogFormGroup.controls.title.setValue(
      'A very long blog title that is invalid'
    );
    expect(component.newBlogFormGroup.controls.title.invalid).toBeTrue();
    expect(component.newBlogFormGroup.controls.title.errors).toBeTruthy();
  });

  it('should body be in invalid state', () => {
    expect(component.newBlogFormGroup.controls.body.invalid).toBeTrue();
  });

  it('should FormGroup be in valid state', () => {
    component.newBlogFormGroup.controls.title.setValue('Blog title');
    component.newBlogFormGroup.controls.body.setValue('Blog body');
    expect(component.newBlogFormGroup.controls.body.valid).toBeTrue();
  });

  it('should render the submit button', () => {
    const debugElement = fixture.debugElement;
    const submitBtn = debugElement.query(By.css('.btn-submit'));
    expect(submitBtn?.nativeElement?.textContent?.trim()).toEqual('Submit');
  });

  it('should invoke updateBlog fun on click of submit', fakeAsync(() => {
    const debugElement = fixture.debugElement;
    const blogForm = debugElement.query(By.css('.blog-form'));
    component.newBlogFormGroup.controls.title.setValue('Blog title');
    component.newBlogFormGroup.controls.body.setValue('Blog body');
    component.newBlogFormGroup.controls.id.setValue(1);
    component.newBlogFormGroup.controls.userId.setValue(2);
    const spyOnEdit = spyOn(component, 'updateBlog');
    blogForm.triggerEventHandler('submit', null);
    tick(1000);
    expect(spyOnEdit).toHaveBeenCalled();
  }));

  it('should invoke BlogService edit fun on updateBlog call', fakeAsync(() => {
    component.newBlogFormGroup.controls.title.setValue('Blog title');
    component.newBlogFormGroup.controls.body.setValue('Blog body');
    component.newBlogFormGroup.controls.userId.setValue(2);
    component.newBlogFormGroup.controls.id.setValue(1);

    const service = fixture.debugElement.injector.get(BlogsService);
    const serviceAddSpy = spyOn(service, 'edit').and.callFake(() =>
      of<IBlog>({
        id: 1,
        title: 'Blog title',
        body: 'Blog body',
        userId: 2,
      })
    );
    component.updateBlog();
    tick(1000);
    expect(serviceAddSpy).toHaveBeenCalled();
    expect(serviceAddSpy).toHaveBeenCalledWith({
      id: 1,
      title: 'Blog title',
      body: 'Blog body',
      userId: 2,
    });
  }));

  it('should return undefined on updateBlog call with invalid form', () => {
    expect(component.updateBlog()).toBeUndefined();
  });

  it('should patch value in the form', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(BlogsService);
    const spyOnGetDetails = spyOn(service, 'getBlogById')
      .withArgs(1)
      .and.returnValue(
        of({ id: 1, title: 'Blog title', body: 'Blog description', userId: 1 })
      );
    tick(1000);
    expect(spyOnGetDetails).toHaveBeenCalled();
    expect(component.newBlogFormGroup.controls.id.value).toEqual(1);
  }));
});
