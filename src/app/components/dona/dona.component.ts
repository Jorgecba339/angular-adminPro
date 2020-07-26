import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Sin titulo';

   // Doughnut
   // tslint:disable-next-line: no-input-rename
   @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   // tslint:disable-next-line: no-input-rename
   @Input('data') doughnutChartData: MultiDataSet = [
     [350, 450, 100],

   ];

   public colors: Color[] = [
     { backgroundColor: ['#4285f4', '#34a853', '#fbbc05'] }
   ];

}
