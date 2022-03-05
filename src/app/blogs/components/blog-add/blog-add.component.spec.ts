import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { BlogAddComponent } from './blog-add.component';
import { By } from '@angular/platform-browser';
import { BlogsService } from '../../services/blogs.service';
import { IBlog } from '../../interfaces/blog.interface';

describe('BlogAddComponent', () => {
  let component: BlogAddComponent;
  let fixture: ComponentFixture<BlogAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogAddComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create AddBlog FormGroup', () => {
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

  it('should render a button as disabled', () => {
    const debugElement = fixture.debugElement;
    const submitBtn = debugElement.query(By.css('.btn-submit'));
    expect(submitBtn.nativeElement.textContent).toEqual('Submit');
    expect(submitBtn.attributes['disabled']).toBeDefined();
  });

  it('should invoke addNewBlog fun on click of submit', fakeAsync(() => {
    const debugElement = fixture.debugElement;
    const blogForm = debugElement.query(By.css('.blog-form'));
    component.newBlogFormGroup.controls.title.setValue('Blog title');
    component.newBlogFormGroup.controls.body.setValue('Blog body');
    const addBlogSpy = spyOn(component, 'addNewBlog');
    blogForm.triggerEventHandler('submit', null);
    tick(1000);
    expect(addBlogSpy).toHaveBeenCalled();
  }));

  it('should invoke BlogService add fun on addNewBlog call', fakeAsync(() => {
    component.newBlogFormGroup.controls.title.setValue('Blog title');
    component.newBlogFormGroup.controls.body.setValue('Blog body');
    component.newBlogFormGroup.controls.userId.setValue(2);
    
    const service = fixture.debugElement.injector.get(BlogsService);
    const serviceAddSpy = spyOn(service, 'add').and.callFake(() =>
      of<IBlog>({
        id: 1,
        title: 'Blog title',
        body: 'Blog body',
        userId: 2,
      })
    );
    component.addNewBlog();
    tick(1000);
    expect(serviceAddSpy).toHaveBeenCalled();
    expect(serviceAddSpy).toHaveBeenCalledWith({
      title: 'Blog title',
      body: 'Blog body',
      userId: 2,
    });
  }));
  
  it('should return undefined on addNewBlog call with invalid form', () => {
    expect(component.addNewBlog()).toBeUndefined();
  });
});
