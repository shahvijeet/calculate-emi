import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { EmiComponent } from './emi/emi.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculate-emi', pathMatch: 'full' },
 {path:'calculate-emi',component:EmiComponent},
 {path:'contact-us',component:ContactusComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
