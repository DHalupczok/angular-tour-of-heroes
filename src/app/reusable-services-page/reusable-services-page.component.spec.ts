import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableServicesPageComponent } from './reusable-services-page.component';

describe('ReusableServicesPageComponent', () => {
  let component: ReusableServicesPageComponent;
  let fixture: ComponentFixture<ReusableServicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableServicesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
