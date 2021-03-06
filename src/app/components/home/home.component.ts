import { Component, OnInit, ViewChild } from '@angular/core';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('lineChart', {static: true} ) private chartRef: any
  chart: any

  large: boolean = true 
  constructor() { }

  ngOnInit() {

    var s1 = [
        { x: 1, y: 100 },
        { x: 2, y: 101 },
        { x: 3, y: 103 },
        { x: 4, y: 106},
        { x: 5, y: 101 },
        { x: 6, y: 102 },
        { x: 7, y: 104 },
        { x: 8, y: 109 },
        { x: 9, y: 23 },
        { x: 10, y: 100 },
        { x: 11, y: 101 },
        { x: 12, y: 103 },
        { x: 13, y: 106},
        { x: 14, y: 101 },
        { x: 15, y: 102 },
        { x: 16, y: 104 },
        { x: 17, y: 109 },
        { x: 18, y: 23 },
        { x: 19, y: 100 },
        { x: 20, y: 101 },
        { x: 21, y: 103 },
        { x: 22, y: 106},
        { x: 23, y: 101 },
        { x: 24, y: 102 },
        { x: 25, y: 104 },
        { x: 26, y: 109 },
        { x: 27, y: 23 },
        { x: 28, y: 100 },
        { x: 29, y: 101 },
        { x: 30, y: 103 },
        { x: 31, y: 106},
        { x: 32, y: 101 },
        { x: 33, y: 102 },
        { x: 34, y: 104 },
        { x: 35, y: 109 },
        { x: 36, y: 23 },
        { x: 37, y: 100 },
        { x: 38, y: 101 },
        { x: 39, y: 103 },
        { x: 40, y: 106},
        { x: 41, y: 101 },
        { x: 42, y: 102 },
        { x: 43, y: 104 },
        { x: 44, y: 109 },
        { x: 45, y: 23 },
        { x: 46, y: 100 },
        { x: 47, y: 101 },
        { x: 48, y: 103 },
        { x: 49, y: 106},
        { x: 50, y: 101 },
        { x: 51, y: 102 },
        { x: 52, y: 104 },
        { x: 53, y: 109 },
        { x: 54, y: 23 },
        { x: 55, y: 100 },
        { x: 56, y: 101 },
        { x: 57, y: 103 },
        { x: 58, y: 106},
        { x: 59, y: 101 },
        { x: 60, y: 102 },
        { x: 61, y: 104 },
        { x: 62, y: 109 },
        { x: 63, y: 23 },
        { x: 64, y: 100 },
        { x: 65, y: 101 },
        { x: 66, y: 103 },
        { x: 67, y: 106},
        { x: 68, y: 101 },
        { x: 69, y: 102 },
        { x: 70, y: 104 },
        { x: 71, y: 109 },
        { x: 72, y: 23 },
      ]

    var labels = [ '2017-01-06 18:39:30', 
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-06 18:39:30', 
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-06 18:39:30', 
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-06 18:39:30', 
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-06 18:39:30', 
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-06 18:39:30', 
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-06 18:39:30', 
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-06 18:39:30', 
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-06 18:39:30',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',
                   '2017-01-07 18:39:28',   ] 

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: labels, // your labels array
        datasets: [
          {
            data: s1, // your data array
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

  isSelected() {
    if(this.large) {
      this.large = false 
    } else {
      this.large = true
    }
  }

}
