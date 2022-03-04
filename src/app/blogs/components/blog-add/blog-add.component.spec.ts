import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { BlogAddComponent } from './blog-add.component';
import { By } from '@angular/platform-browser';

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
    component.newBlogFormGroup.controls.title.setValue('A very long blog title that is invalid');
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
});
