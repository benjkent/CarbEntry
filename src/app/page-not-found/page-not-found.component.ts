import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
constructor(private router: Router,) {}
pageTitle:string="";
  navLinks: {[key: string]:string} = {
    'quit':'/'}
ngOnInit(){
 this.pageTitle = this.router.url;
}
  public onNewClick(){
    this.router.navigateByUrl("/gov-id-component");
  }
  public onRenewalClick(){
    this.router.navigateByUrl("/renewal-component");
  }
  public onReplacementClick(){
    this.router.navigateByUrl("/replacement-component");
  }
}
