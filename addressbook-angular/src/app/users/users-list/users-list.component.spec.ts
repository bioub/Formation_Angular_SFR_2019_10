import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListComponent ],
      imports: [
        HttpClientTestingModule,
      ]
      // providers: [
      //   {
      //     provide: UserService,
      //     useValue: {
      //       findAll() {
      //
      //       }
      //     }
      //   }
      // ]
    })
    .compileComponents();
  }));

  let httpTestingController: HttpTestingController;
  beforeEach(() => httpTestingController = TestBed.get(HttpTestingController));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show result from mock backend', () => {
    httpTestingController.expectOne('/users').flush([{id: 123, name: 'Toto'}]);

    fixture.detectChanges();

    const firstLink = fixture.nativeElement.querySelector('mat-nav-list a:first-child');

    expect(firstLink.textContent).toContain('Toto');

    httpTestingController.verify();
  })
});
