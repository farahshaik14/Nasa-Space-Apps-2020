import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.page.html',
  styleUrls: ['./sleep.page.scss'],
})
export class SleepPage implements OnInit {
  @ViewChild("barCanvas", {static: true}) barCanvas: ElementRef;
  @ViewChild("lineCanvas", {static: true}) lineCanvas: ElementRef;

  private barChart: Chart;
  private lineChart: Chart;

  constructor() { }
 ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["Light", "Deep", "REM", "Awake",],
        datasets: [
          {
            label: "Last Night's Metrics",
            data: [12, 19, 23, 5,],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["Light", "Deep", "REM", "Awake",],
        datasets: [
          {
            label: "Last Night's Metrics",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [12, 19, 23, 5,],            
            spanGaps: false
          }
        ]
      }
    });
  }

}
