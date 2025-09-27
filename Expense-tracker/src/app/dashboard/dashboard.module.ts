import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { AnalysticsChartComponent } from './analystics-chart/analystics-chart.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
 
];

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    AnalysticsChartComponent
  ],
  imports: [
    CommonModule,
     NgApexchartsModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
