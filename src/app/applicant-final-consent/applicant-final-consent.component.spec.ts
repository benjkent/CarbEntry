import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantFinalConsentComponent } from './applicant-final-consent.component';

describe('ApplicantFinalConsentComponent', () => {
  let component: ApplicantFinalConsentComponent;
  let fixture: ComponentFixture<ApplicantFinalConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantFinalConsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantFinalConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
