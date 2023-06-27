import { Component } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-applicant-gov-id',
  templateUrl: './applicant-gov-id.component.html',
  styleUrls: ['./applicant-gov-id.component.css']
})
export class ApplicantGovIdComponent {
  constructor(
    private formsModule: FormsModule,
    private router: Router,
  ) {}
  navLinks: {[key: string]:string} = {
    'quit':'/'}

  applicationOptions = ['new','renewal','replacement'];
  model = new govId(
    this.applicationOptions[1],
    "",
    "",
    "",
    "",
  )
  public onNext(){
    this.router.navigateByUrl("/legal-id-component");
  }
  public onQuitClick(){
    this.router.navigateByUrl("/");
  }

}
export class govId{
  constructor(
    public applicationType: string,
    public lastName: string,
    public firstName: string,
    public middleName: string,
    public suffix?: string,
  ) {}
}
