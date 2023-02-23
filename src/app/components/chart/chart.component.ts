import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  chartData = [
    {value: Math.floor(Math.random() * 110) , stat: 1},
    {value: Math.floor(Math.random() * 110) , stat: 2},
    {value: Math.floor(Math.random() * 110) , stat: 2},
    {value: Math.floor(Math.random() * 110) , stat: 2},
    {value: Math.floor(Math.random() * 110) , stat: 1},
    {value: Math.floor(Math.random() * 110) , stat: 2},
    {value: Math.floor(Math.random() * 110) , stat: 1},
  ];
}
