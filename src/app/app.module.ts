import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { Contentsection1Component } from './components/contentsection1/contentsection1.component';

import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProfileformComponent } from './components/profileform/profileform.component';
import { CompanyformComponent } from './components/companyform/companyform.component';
import { CompanypageComponent } from './components/companypage/companypage.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { ResumeformComponent } from './components/resumeform/resumeform.component';
import { AddmanagerComponent } from './components/addmanager/addmanager.component';
import { ProfilepicformComponent } from './components/profilepicform/profilepicform.component';
import { LogoformComponent } from './components/logoform/logoform.component';
import { JobformComponent } from './components/jobform/jobform.component';
import { JobpostingsComponent } from './components/jobpostings/jobpostings.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';
import { PostingComponent } from './components/posting/posting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    Contentsection1Component,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProfileformComponent,
    CompanyformComponent,
    CompanypageComponent,
    ProfilepageComponent,
    ResumeformComponent,
    AddmanagerComponent,
    ProfilepicformComponent,
    LogoformComponent,
    JobformComponent,
    JobpostingsComponent,
    JobdetailsComponent,
    PostingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
