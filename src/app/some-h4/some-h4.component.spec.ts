import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeH4Component } from './some-h4.component';

describe('SomeH4Component', () => {
  let component: SomeH4Component;
  let fixture: ComponentFixture<SomeH4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeH4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeH4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
