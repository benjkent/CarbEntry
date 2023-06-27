import { Component } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { Router} from "@angular/router";

@Component({
  selector: 'app-applicant-home-address',
  templateUrl: './applicant-home-address.component.html',
  styleUrls: ['./applicant-home-address.component.css']
})
export class ApplicantHomeAddressComponent {
  constructor(
   private formsModule: FormsModule,
   private router: Router,
    ) {}
  navLinks: {[key: string]:string}={
    'quit':'/'
  }
  model = new homeAddress(
  "","","","","", "","",
    '');
  public onNext(){
    this.router.navigateByUrl("/mailing-address-component");
  }
}
export class homeAddress{
  constructor(
    public streetAddress: string,
    public aptOrUnitNumber: string,
    public city: string,
    public state: string,
    public zipCode: string,
    public phoneNumber: string,
    public residencyProofType: string,
    public residencyProofDocument: string,

  ) {
  }
}
