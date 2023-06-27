import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantLegalIdComponent } from './applicant-legal-id.component';

describe('ApplicantLegalIdComponent', () => {
  let component: ApplicantLegalIdComponent;
  let fixture: ComponentFixture<ApplicantLegalIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantLegalIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantLegalIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
