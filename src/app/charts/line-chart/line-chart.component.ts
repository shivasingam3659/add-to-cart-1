import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: 'Data1',
              data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,30,21],
              backgroundColor:"lightgreen",
              borderColor: "#0196FD",
              borderWidth: 1
          },
         ]
      },
      options: {
          scales: {
             
          }
      }
  });
  }
}


  

