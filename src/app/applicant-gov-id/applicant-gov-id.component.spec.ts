import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantGovIdComponent } from './applicant-gov-id.component';

describe('ApplicantGovIdComponent', () => {
  let component: ApplicantGovIdComponent;
  let fixture: ComponentFixture<ApplicantGovIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantGovIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantGovIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
