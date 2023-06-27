import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-applicant-gov-id-type',
  templateUrl: './applicant-gov-id-type.component.html',
  styleUrls: ['./applicant-gov-id-type.component.css']
})
export class ApplicantGovIdTypeComponent {
  navLinks: {[key: string]:string}={
    'quit':'/'
  }
  height!: Height;
  constructor(private formsModule: FormsModule, private router: Router) {
  }
  ngOnInit(){
    this.height = new Height('','');
  }
  model: governmentIdDetails = new governmentIdDetails(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    this.height,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  )
  public onNext(){
    this.router.navigateByUrl('citizenship');
  }


}

export class governmentIdDetails {

  constructor(
    public idType: string,
    public govIssueIdNumber: string,
    public state: string,
    public expiration: string,
    public dateOfBirth: string,
    public ssn: string,
    public weight: string,
    public height: Height,
    public eyeColor: string,
    public hairColor: string,
    public race: string,
    public sex: string,
    public placeOfBirth: string,
    public otherStates: string,
    public govIdProof: string,
  ) {
  }
}
export class Height{
  constructor(
    public feet?: string,
    public inches?: string,
  ) {
  }
}
