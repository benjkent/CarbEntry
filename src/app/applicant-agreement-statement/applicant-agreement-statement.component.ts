import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {ModalService} from "../_services/modal.service";


@Component({
  selector: 'app-applicant-agreement-statement',
  templateUrl: './applicant-agreement-statement.component.html',
  styleUrls: ['./applicant-agreement-statement.component.css']
})
export class ApplicantAgreementStatementComponent {
  navLinks: {[key:string]:string}={'quit':'/'}
  agree: boolean = false;


  constructor(
    private formsModule: FormsModule,
    private router: Router,
    protected modalService: ModalService,

  ) {}
  agreementButton(){
    this.agree = !this.agree;
  }
  disagreementButton(){
    this.agree = false;
    this.model.applicantInitials = '';
    this.modalService.open('modal-1');
  }
  closeQuit(){
    this.modalService.close();
    this.router.navigateByUrl('/');
  }
  public onNext(){
    this.router.navigateByUrl('declarations');

  }
  model = new applicantAgreement(this.agree,'');
}
export class applicantAgreement{
  constructor(
    public applicantAgrees: boolean,
    public applicantInitials: string,
  ) {
  }
}
