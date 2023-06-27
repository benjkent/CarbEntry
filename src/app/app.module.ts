import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApplicantGovIdComponent } from './applicant-gov-id/applicant-gov-id.component';
import { ApplicantLegalIdComponent } from './applicant-legal-id/applicant-legal-id.component';
import { AppRoutingModule } from './app-routing.module';
import { RemoveCharsPipe } from "./pipes/remove-chars.pipe";

import { ApplicantHomeAddressComponent } from './applicant-home-address/applicant-home-address.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApplicationTypeComponent } from './application-type/application-type.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ApplicantMailingAddressComponent } from './applicant-mailing-address/applicant-mailing-address.component';
import { ApplicantAdditionalResidencesComponent } from './applicant-additional-residences/applicant-additional-residences.component';
import { ApplicantGovIdTypeComponent } from './applicant-gov-id-type/applicant-gov-id-type.component';
import { HyphensMask} from "./masks/hyphensMask";
import { ApplicantCitizenshipComponent } from './applicant-citizenship/applicant-citizenship.component';
import {LowercaseDirective} from "./masks/LowerCaseDirective";
import { ApplicantAgreementStatementComponent } from './applicant-agreement-statement/applicant-agreement-statement.component';
import { ModalComponent } from './_components/modal/modal.component';
import { TestModalComponent } from './_components/test-modal/test-modal.component';
import { ApplicantDeclarationComponent } from './applicant-declaration/applicant-declaration.component';
import {HttpClientModule} from "@angular/common/http";
import { ApplicantDeclarationReliefWaiverComponent } from './applicant-declaration-relief-waiver/applicant-declaration-relief-waiver.component';
import { ApplicantFinalConsentComponent } from './applicant-final-consent/applicant-final-consent.component';
import { ValidateJPGDirective } from './directives/validate-jpg.directive';


@NgModule({
  declarations: [
    AppComponent,
    ApplicantGovIdComponent,
    ApplicantLegalIdComponent,
    ApplicantHomeAddressComponent,
    PageNotFoundComponent,
    ApplicationTypeComponent,
    RemoveCharsPipe,
    NavBarComponent,
    ApplicantMailingAddressComponent,
    ApplicantAdditionalResidencesComponent,
    ApplicantGovIdTypeComponent,
    HyphensMask,
    ApplicantCitizenshipComponent,
    LowercaseDirective,
    ApplicantAgreementStatementComponent,
    ModalComponent,
    TestModalComponent,
    ApplicantDeclarationComponent,
    ApplicantDeclarationReliefWaiverComponent,
    ApplicantFinalConsentComponent,
    ValidateJPGDirective,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
