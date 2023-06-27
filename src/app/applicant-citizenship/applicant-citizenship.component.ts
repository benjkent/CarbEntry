import {Component, ElementRef, OnInit, ViewChildren} from '@angular/core';
import {FormControl, FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {
  ApplicantAdditionalResidencesComponent
} from "../applicant-additional-residences/applicant-additional-residences.component";

@Component({
  selector: 'app-applicant-citizenship',
  templateUrl: './applicant-citizenship.component.html',
  styleUrls: ['./applicant-citizenship.component.css']
})
export class ApplicantCitizenshipComponent {
  constructor(
    private formsModule: FormsModule,
    private router: Router,
  ) {
  }
  navLinks: {[key:string]:string}={'quit':'/'}

  public onNext(){
      if(this.model.citizenOf == 'USA'){
        this.model.alienAdmissionType = new AdmissionType('','');
        this.model.nonImmigrantVisa = 'no';
        this.model.exception = '';
        this.model.exceptionDoc = '';

      }
      this.router.navigateByUrl('agreement-terms');
  }
  model = new citizenshipDetails(
    'USA',new AdmissionType('',''),'no','',''
  )

}

export class citizenshipDetails{
  constructor(
    public citizenOf: string,
    public alienAdmissionType: AdmissionType,
    public nonImmigrantVisa: string,
    public exception: string,
    public exceptionDoc: string,

  ) {
  }
}
export class AdmissionType{
  constructor(
    public type: string,
    public number: string,
  ) {}
}
