import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeH1Component } from './some-h1.component';

describe('SomeH1Component', () => {
  let component: SomeH1Component;
  let fixture: ComponentFixture<SomeH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeH1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
