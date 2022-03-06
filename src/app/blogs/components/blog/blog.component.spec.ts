import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    (component.blog = {
      id: 1,
      title: 'Blog title',
      body: 'Blog description',
      userId: 2,
    }),
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit delete event', () => {
    const spyOnDelete = spyOn(component.delete, 'emit');
    component.deleteBlog();
    expect(spyOnDelete).toHaveBeenCalled();
    expect(spyOnDelete).toHaveBeenCalledTimes(1);
    expect(spyOnDelete).toHaveBeenCalledWith(1);
  });

  it('should emit show event', () => {
    const spyOnShow = spyOn(component.show, 'emit');
    component.showDetails();
    expect(spyOnShow).toHaveBeenCalled();
    expect(spyOnShow).toHaveBeenCalledTimes(1);
    expect(spyOnShow).toHaveBeenCalledWith(1);
  });

  it('should emit edit event', () => {
    const spyOnEdit = spyOn(component.edit, 'emit');
    component.editBlog();
    expect(spyOnEdit).toHaveBeenCalled();
    expect(spyOnEdit).toHaveBeenCalledTimes(1);
    expect(spyOnEdit).toHaveBeenCalledWith(1);
  });
});
