import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-applicant-mailing-address',
  templateUrl: './applicant-mailing-address.component.html',
  styleUrls: ['./applicant-mailing-address.component.css']
})
export class ApplicantMailingAddressComponent {

  sameAsResidence = false;
  constructor(
    private formsModule: FormsModule,
    private router: Router
  ) {}

  navLinks: {[key: string]: string}={'quit':'/'}
  model = new mailingAddress(
    '','','','',false
  )
  public onNext():void{
    this.router.navigateByUrl("/additional-residences");
  }
  public sameAsResidenceSelected(){
    this.sameAsResidence = !this.sameAsResidence;

    this.model.mailingAddress = "";
    this.model.city = "";
    this.model.state = "";
    this.model.zipCode = "";

  }

}
export class mailingAddress{
  constructor(
    public mailingAddress: string,
    public city: string,
    public state: string,
    public zipCode: string,
    public sameAsResidence: boolean,
  ) {}
}
