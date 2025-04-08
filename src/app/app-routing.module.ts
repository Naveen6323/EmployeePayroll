import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'reg',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
