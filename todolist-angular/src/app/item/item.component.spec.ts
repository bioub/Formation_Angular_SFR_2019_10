import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show todo input', () => {
    component.todo = {
      id: 123,
      title: 'Test',
      completed: false,
    };

    fixture.detectChanges();

    const spanText = fixture.nativeElement.querySelector('span').innerText;
    expect(spanText).toContain('Test');
  });


  it('should emit delete on button click', () => {
    component.todo = {
      id: 123,
      title: 'Test',
      completed: false,
    };

    fixture.detectChanges();

    // ---------
    component.delete.subscribe((todo) => {
      expect(todo).toEqual(component.todo);
    });

    const btn = fixture.nativeElement.querySelector('button');
    const event = document.createEvent('MouseEvent');
    event.initEvent('click', true, true);
    btn.dispatchEvent(event);
  });
});
