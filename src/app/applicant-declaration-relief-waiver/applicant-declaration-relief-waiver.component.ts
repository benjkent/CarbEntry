import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {applicantAgreement} from "../applicant-agreement-statement/applicant-agreement-statement.component";

@Component({
  selector: 'app-applicant-declaration-relief-waiver',
  templateUrl: './applicant-declaration-relief-waiver.component.html',
  styleUrls: ['./applicant-declaration-relief-waiver.component.css']
})
export class ApplicantDeclarationReliefWaiverComponent {
  navLinks: {[key:string]:string}={'quit':'/'};

  constructor(private formsModule: FormsModule,
              private router: Router) {
  }

  model = new applicantDeclarationWaiver(
    "",
    "",
    false,
    false
    )
checkBoxChange(event: any){
    console.log(event.target.checked);
    console.log(event.target.value);
}

  public onNext(){
      this.router.navigateByUrl('final-consent')
  }
  public returnToDeclarations(){
    this.router.navigateByUrl('declarations');
  }
}
export class applicantDeclarationWaiver{
  constructor(
    public applicantWaiverInitials: string,
    public reliefGrantedDate: string,
    public convictionTypeFelony: boolean,
    public convictionTypeMisdemeanor: boolean

    ) {}
}
