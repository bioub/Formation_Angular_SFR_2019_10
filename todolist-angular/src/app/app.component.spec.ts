import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FormComponent,
        ListComponent,
        ItemComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'todolist-angular'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('todolist-angular');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('todolist-angular app is running!');
  // });
});
