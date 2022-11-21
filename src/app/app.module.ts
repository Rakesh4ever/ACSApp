import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactsComponent } from './contacts/contacts.component';

import { TrainingComponent } from './training/training.component';
import { LoaniqComponent } from './loaniq/loaniq.component';
import { CondorComponent } from './condor/condor.component';
import { FfcComponent } from './ffc/ffc.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoaniqwsComponent } from './loaniqws/loaniqws.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    PagenotfoundComponent,
    ContactsComponent,
    TrainingComponent,
    LoaniqComponent,
    CondorComponent,
    FfcComponent,
    RegistrationComponent,
    LoaniqwsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
