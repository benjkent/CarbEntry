import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantMailingAddressComponent } from './applicant-mailing-address.component';

describe('ApplicantMailingAddressComponent', () => {
  let component: ApplicantMailingAddressComponent;
  let fixture: ComponentFixture<ApplicantMailingAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantMailingAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantMailingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
