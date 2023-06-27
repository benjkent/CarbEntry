import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantAdditionalResidencesComponent } from './applicant-additional-residences.component';

describe('ApplicantAdditionalResidencesComponent', () => {
  let component: ApplicantAdditionalResidencesComponent;
  let fixture: ComponentFixture<ApplicantAdditionalResidencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantAdditionalResidencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantAdditionalResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
