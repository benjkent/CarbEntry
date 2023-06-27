import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDeclarationReliefWaiverComponent } from './applicant-declaration-relief-waiver.component';

describe('ApplicantDeclarationReliefWaiverComponent', () => {
  let component: ApplicantDeclarationReliefWaiverComponent;
  let fixture: ComponentFixture<ApplicantDeclarationReliefWaiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantDeclarationReliefWaiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantDeclarationReliefWaiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
