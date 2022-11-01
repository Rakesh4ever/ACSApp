import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CondorComponent } from './condor/condor.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoaniqComponent } from './loaniq/loaniq.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServicesComponent } from './services/services.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'',component:TrainingComponent, children:[
                                                  {path:'loaniq',component:LoaniqComponent},
                                                  {path:'condor',component:CondorComponent}

                                                  ]},

  {path:'contacts',component:ContactsComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
