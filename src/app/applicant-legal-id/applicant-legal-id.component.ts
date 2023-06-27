import { Component } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-applicant-legal-id',
  templateUrl: './applicant-legal-id.component.html',
  styleUrls: ['./applicant-legal-id.component.css']
})
export class ApplicantLegalIdComponent {
  additionalNameFields: boolean = false;
  navLinks: {[key: string]:string} = {
    'quit':'/'
  }
  constructor(private formsModule: FormsModule,
              private router: Router) {}

  model = new legalId(
    "","","","",[]
  )
  public onNext(){
    this.router.navigateByUrl("/home-address-component");
  }
  public addAdditionalName(){
    this.additionalNameFields = true;

  }
  public onQuitClick(){
    this.router.navigateByUrl("/");
  }
}
export class legalId{
  constructor(
    public lastName: string,
    public firstName: string,
    public middleName: string,
    public suffix: string,
    public additionalNames?: string[],

  ) {}
}
