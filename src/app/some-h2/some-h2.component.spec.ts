import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeH2Component } from './some-h2.component';

describe('SomeH2Component', () => {
  let component: SomeH2Component;
  let fixture: ComponentFixture<SomeH2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeH2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
