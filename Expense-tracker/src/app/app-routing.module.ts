import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./auth/auth.module').then(mod=>mod.AuthModule)},
  {path:'dashMod',loadChildren:()=>import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule)},
  {path:'expenseMod',loadChildren:()=>import('./expenses/expenses.module').then(mod=>mod.ExpensesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
