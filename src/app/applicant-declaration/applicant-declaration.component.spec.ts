import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDeclarationComponent } from './applicant-declaration.component';

describe('ApplicantDeclarationComponent', () => {
  let component: ApplicantDeclarationComponent;
  let fixture: ComponentFixture<ApplicantDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantDeclarationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
