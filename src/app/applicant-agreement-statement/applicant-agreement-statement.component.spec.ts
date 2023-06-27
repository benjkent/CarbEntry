import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantAgreementStatementComponent } from './applicant-agreement-statement.component';

describe('ApplicantAgreementStatementComponent', () => {
  let component: ApplicantAgreementStatementComponent;
  let fixture: ComponentFixture<ApplicantAgreementStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantAgreementStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantAgreementStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
