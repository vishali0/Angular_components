import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaysComponent } from './days/days.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "days"
  },
  {
    path: "days",
    component: DaysComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
