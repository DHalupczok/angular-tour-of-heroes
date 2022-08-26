import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeFormContainerComponent } from './some-form-container.component';

describe('SomeFormContainerComponent', () => {
  let component: SomeFormContainerComponent;
  let fixture: ComponentFixture<SomeFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
