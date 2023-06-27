import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantCitizenshipComponent } from './applicant-citizenship.component';

describe('ApplicantCitizenshipComponent', () => {
  let component: ApplicantCitizenshipComponent;
  let fixture: ComponentFixture<ApplicantCitizenshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantCitizenshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantCitizenshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
