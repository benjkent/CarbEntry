import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantGovIdTypeComponent } from './applicant-gov-id-type.component';

describe('ApplicantGovIdTypeComponent', () => {
  let component: ApplicantGovIdTypeComponent;
  let fixture: ComponentFixture<ApplicantGovIdTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantGovIdTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantGovIdTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
