import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {leadingComment} from "@angular/compiler";
import {ValidateJPGDirective} from "../directives/validate-jpg.directive";

@Component({
  selector: 'app-applicant-final-consent',
  templateUrl: './applicant-final-consent.component.html',
  styleUrls: ['./applicant-final-consent.component.css']
})
export class ApplicantFinalConsentComponent {
  navLinks: {[key:string]:string}={'quit':'/'};

  model: finalConsent = new finalConsent();

  constructor(private formsModule: FormsModule,
              private router: Router) {}
  onNext(){

  }


  protected readonly ValidateJPGDirective = ValidateJPGDirective;
}

export class finalConsent{
  public fingerPrintedAndPhotographed: string = "";
  public applicantLegalAgreement: string = "";
  public applicantFirearmsCourse: string ="";
  public firearmsCourseDate: string = "";
  public firearmsCourseJPG: string="";
  public applicantSignature: string ="";
  public applicantSignatureDate: string="";
  public permitAgentSignature: string="";
  public permitAgentSignatureDate: string="";
}
