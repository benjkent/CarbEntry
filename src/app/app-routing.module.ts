import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantGovIdComponent } from './applicant-gov-id/applicant-gov-id.component';
import { ApplicantLegalIdComponent } from './applicant-legal-id/applicant-legal-id.component';
import { ApplicantHomeAddressComponent} from "./applicant-home-address/applicant-home-address.component";
import { PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { ApplicationTypeComponent } from "./application-type/application-type.component";
import { ApplicantMailingAddressComponent} from "./applicant-mailing-address/applicant-mailing-address.component";
import { ApplicantAdditionalResidencesComponent} from "./applicant-additional-residences/applicant-additional-residences.component";
import { ApplicantGovIdTypeComponent} from "./applicant-gov-id-type/applicant-gov-id-type.component";
import { ApplicantCitizenshipComponent} from "./applicant-citizenship/applicant-citizenship.component";
import {ApplicantAgreementStatementComponent} from "./applicant-agreement-statement/applicant-agreement-statement.component";
import {TestModalComponent} from "./_components/test-modal/test-modal.component";
import { ApplicantDeclarationComponent} from "./applicant-declaration/applicant-declaration.component";
import {
  ApplicantDeclarationReliefWaiverComponent
} from "./applicant-declaration-relief-waiver/applicant-declaration-relief-waiver.component";
import {ApplicantFinalConsentComponent} from "./applicant-final-consent/applicant-final-consent.component";

const routes: Routes = [

  {path: 'gov-id-component', component: ApplicantGovIdComponent },
  {path: 'legal-id-component', component: ApplicantLegalIdComponent},
  {path: 'home-address-component', component: ApplicantHomeAddressComponent},
  {path: 'mailing-address-component', component: ApplicantMailingAddressComponent},
  {path: 'additional-residences', component: ApplicantAdditionalResidencesComponent},
  {path: 'gov-id-type', component: ApplicantGovIdTypeComponent},
  {path: 'citizenship', component: ApplicantCitizenshipComponent},
  {path: 'agreement-terms', component: ApplicantAgreementStatementComponent},
  {path: 'application-type', component: ApplicationTypeComponent },
  {path: 'declarations', component: ApplicantDeclarationComponent},
  {path: 'declaration-waiver', component: ApplicantDeclarationReliefWaiverComponent},
  {path: 'final-consent', component: ApplicantFinalConsentComponent},
  {path: 'test', component: TestModalComponent},
  {path: '', redirectTo: '/application-type',pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
