import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-applicant-additional-residences',
  templateUrl: './applicant-additional-residences.component.html',
  styleUrls: ['./applicant-additional-residences.component.css']
})
export class ApplicantAdditionalResidencesComponent {

residences: string[]=[];
hideAddressErrorMessage: boolean = true;
sameForLastThree:boolean = true;
  constructor( private formsModule: FormsModule, private router: Router) {}

  navLinks: {[key: string]:string}={'quit':'/'}

  model: additionalResidence = new additionalResidence('');
  public onNext(){
    this.router.navigateByUrl('/gov-id-type');
  }
  public addAddress(){

    if(this.validAddress(this.model.address)){

      this.residences.push(this.model.address);
      this.hideAddressErrorMessage = true;
    }
    else{
      this.hideAddressErrorMessage = false // show the error message.
    }
  }
  public resetErrorMessage(){
    this.hideAddressErrorMessage = true;
    this.model.address = "";
  }
  public clearAdditional(){
    this.hideAddressErrorMessage = true;
    this.sameForLastThree = !this.sameForLastThree;
    this.residences = [];

  }
  public removeAddress(value:number){
    this.residences.splice(value,1);
  }
  public validAddress(address:string){
    if(address == "") {
      return false;
    }
    return true;
  }
}

export class additionalResidence{
  constructor(
    public address: string
    ) {}
}
