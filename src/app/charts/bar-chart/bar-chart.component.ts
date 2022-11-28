import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: 'Data1',
              data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,30,21],
              backgroundColor:"yellow",
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


  
