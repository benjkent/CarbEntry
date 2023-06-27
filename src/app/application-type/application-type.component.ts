import { Component } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-application-type',
  templateUrl: './application-type.component.html',
  styleUrls: ['./application-type.component.css']
})
export class ApplicationTypeComponent {
  constructor(private router: Router) {
  }
  newTitleText: string= "Start a New Application";
  newText: string = "Create a new application in about 10 min.";
  newButtonText: string = "New Application";
  navLinks: {[key: string]:string} = {
    'new':'/gov-id-component',
    'renew': '/renew-component',
    'replace': '/replace-component'};


  public onNewClick(){
    this.router.navigateByUrl("/gov-id-component");
  }

  public onRenewalClick(){
    this.router.navigateByUrl("/renew-component");
  }

   public onReplacementClick(){
     this.router.navigateByUrl("/replacement-component");
   }
}
