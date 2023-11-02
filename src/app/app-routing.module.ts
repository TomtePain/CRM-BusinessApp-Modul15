import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BudgetPlanComponent } from './budget-plan/budget-plan.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path:'user', component: UserComponent},
  { path:'user/:id', component: UserDetailComponent},
  { path:'budget-planer', component: BudgetPlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
