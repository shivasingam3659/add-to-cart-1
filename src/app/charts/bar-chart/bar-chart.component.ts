import { ApiService } from 'src/app/service/api.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';




@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor(private service: ApiService) { }
  chartdata: any;

  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];

  ngOnInit(): void {
    this.service.Getchartinfo().subscribe(result => {
      this.chartdata = result;
      if(this.chartdata!=null){
        for(let i=0; i<this.chartdata.length ;i++){
          //console.log(this.chartdata[i]);
          this.labeldata.push(this.chartdata[i].year);
          this.realdata.push(this.chartdata[i].amount);
          this.colordata.push(this.chartdata[i].colorcode);
        }
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'bar','barchart');
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'pie','piechart');
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'doughnut','dochart');
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'polarArea','pochart');
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'radar','rochart');

        
      }
    });
    this.RenderBubblechart();
    this.RenderScatterchart();
    
  }

  RenderChart(labeldata:any,maindata:any,colordata:any,type:any,id:any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [{
          label: '# of Votes',
          data: maindata,
          backgroundColor: colordata,
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
         
        }
      }
    });

    


  }

  RenderBubblechart(){
    const data = {
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };
    const myChart = new Chart('bubchart', {
      type: 'bubble',
      data: data,
      options: {
        
      }
    });
  }

  RenderScatterchart(){
    const data = {
      datasets: [{
        label: 'Scatter Dataset',
        data: [{
          x: -10,
          y: 0
        }, {
          x: 0,
          y: 10
        }, {
          x: 10,
          y: 5
        }, {
          x: 0.5,
          y: 5.5
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }],
    };
    const myChart = new Chart('scchart', {
      type: 'scatter',
      data: data,
      options: {
        scales: {
         
        }
      }
    });
  }

}
