import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInComponent } from './book-in.component';

describe('BookInComponent', () => {
  let component: BookInComponent;
  let fixture: ComponentFixture<BookInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
