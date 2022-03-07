import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BlogsService } from '../../services/blogs.service';

import { BlogDetailsComponent } from './blog-details.component';

describe('BlogDetailsComponent', () => {
  let component: BlogDetailsComponent;
  let fixture: ComponentFixture<BlogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogDetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ blogId: 1 }).pipe(delay(1)) },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get blog details', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(BlogsService);
    const spyOnDetails = spyOn(service, 'getBlogById').and.returnValue(
      of({ id: 1, title: 'Blog title', body: 'Blog desc', userId: 1 }).pipe(
        delay(1)
      )
    );
    component.ngOnInit();
    tick(2);
    expect(spyOnDetails).toHaveBeenCalled();
    expect(component.blog).toEqual({
      id: 1,
      title: 'Blog title',
      body: 'Blog desc',
      userId: 1,
    });
  }));
});
