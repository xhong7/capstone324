import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Contentsection1Component } from './components/contentsection1/contentsection1.component';
import { SignupComponent } from './components/signup/signup.component';
import { CompanyformComponent } from './components/companyform/companyform.component';
import { ProfileformComponent } from './components/profileform/profileform.component';
import { CompanypageComponent } from './components/companypage/companypage.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { ResumeformComponent } from './components/resumeform/resumeform.component';
import { AddmanagerComponent } from './components/addmanager/addmanager.component';
import { LogoformComponent } from './components/logoform/logoform.component';
import { ProfilepicformComponent } from './components/profilepicform/profilepicform.component';
import { JobformComponent } from './components/jobform/jobform.component';
import { JobpostingsComponent } from './components/jobpostings/jobpostings.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: Contentsection1Component},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'companyform', component: CompanyformComponent},
  { path: 'profileform', component: ProfileformComponent},
  { path: 'company', component: CompanypageComponent},
  { path: 'profile', component: ProfilepageComponent}, //need to add :id here once login is done
  { path: 'resume', component: ResumeformComponent},
  { path: 'addmanager', component: AddmanagerComponent},
  { path: 'logo', component: LogoformComponent},
  { path: 'picform', component: ProfilepicformComponent},
  { path: 'jobform', component: JobformComponent},
  { path: 'jobpostings', component: JobpostingsComponent},
  { path: 'jobdetails', component: JobdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
