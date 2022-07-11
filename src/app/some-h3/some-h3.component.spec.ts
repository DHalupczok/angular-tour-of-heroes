import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeH3Component } from './some-h3.component';

describe('SomeH3Component', () => {
  let component: SomeH3Component;
  let fixture: ComponentFixture<SomeH3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeH3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeH3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
