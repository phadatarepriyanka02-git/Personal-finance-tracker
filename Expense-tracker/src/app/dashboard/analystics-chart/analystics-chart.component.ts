import { Component, Input, OnChanges } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexYAxis
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-analystics-chart',
  templateUrl: './analystics-chart.component.html',
  styleUrls: ['./analystics-chart.component.css']
})

export class AnalysticsChartComponent implements OnChanges {

  @Input() data: any[] = [];  
  public chartOptions: ChartOptions | undefined;

  constructor() { }

  ngOnChanges(): void {
      if (!this.data || this.data.length === 0) {
    return;
  }

    const sorted = [...this.data].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const incomeData = sorted
    .filter(item => item.category === "Income")
    .map(item => ({ x: item.date, y: item.amount }));

  const expenseData = sorted
    .filter(item => item.category === "Expense")
    .map(item => ({ x: item.date, y: item.amount }));

    this.chartOptions = {
      series: [
        { name: "Income", data: incomeData },
        { name: "Expense", data: expenseData }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Expense Analytics",
        align: "center"
      },
      xaxis: {
        type: "category",
        title: { text: "Date" }
      },
      yaxis: {
        title: { text: "Amount" }
      }
    };
  }

}
