import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [AppService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Blogs'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular Blogs');
  });

  it(`should have as subtitle 'Learning Angular 10'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.subtitle).toEqual('Learning Angular 10');
  });

  it(`should have as flag false`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.flag).toBeFalse();
  });

  it(`should have as flag true on handleSubmit call`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.handleSubmit('test');
    expect(app.flag).toBeTrue();
  });

  it(`should call appService getOperations function on getOperations call`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const service = fixture.debugElement.injector.get(AppService);
    const getOpSpy = spyOn(service, 'getOperations').and.callFake(
      () => new BehaviorSubject([])
    );
    app.getOperations();
    expect(getOpSpy).toHaveBeenCalled();
    expect(getOpSpy).toHaveBeenCalledTimes(1);
    expect(getOpSpy.calls.count()).toEqual(1);
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('blogs app is running!');
  // });
});
