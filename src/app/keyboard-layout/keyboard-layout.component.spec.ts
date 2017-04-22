import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardLayoutComponent } from './keyboard-layout.component';

describe('KeyboardLayoutComponent', () => {
  let component: KeyboardLayoutComponent;
  let fixture: ComponentFixture<KeyboardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
