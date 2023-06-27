import {Component, OnInit} from '@angular/core';
import  { HttpClient } from '@angular/common/http';

import {ApiServiceService} from "../_services/api-service.service";
import {DeclarationData} from "../interfaces/declaration-data";
import {Declaration} from "../interfaces/declaration-data";
import {Observable} from "rxjs";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-applicant-declaration',
  templateUrl: './applicant-declaration.component.html',
  styleUrls: ['./applicant-declaration.component.css']
})
export class ApplicantDeclarationComponent implements OnInit{
  navLinks: {[key:string]:string}={'quit':'/'};

  applicantStatement!: Observable<{ type: string, statement: string }[]>;



  constructor(private http: HttpClient,
              private apiService: ApiServiceService,
              private formsModule: FormsModule,
              private router: Router) {
      //this.getDeclarations();
  }
  ngOnInit() {
    this.applicantStatement = this.apiService.getDeclarationStatements()
  }
  getDeclarations(){
    this.applicantStatement = this.apiService.getDeclarationStatements()
  }

  onNext(){
      // if the
      this.router.navigateByUrl('declaration-waiver')
  }
}

