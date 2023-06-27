import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantHomeAddressComponent } from './applicant-home-address.component';

describe('ApplicantHomeAddressComponent', () => {
  let component: ApplicantHomeAddressComponent;
  let fixture: ComponentFixture<ApplicantHomeAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantHomeAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantHomeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
