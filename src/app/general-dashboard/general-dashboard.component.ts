import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-general-dashboard',
  templateUrl: './general-dashboard.component.html',
  styleUrls: ['./general-dashboard.component.css']
})
export class GeneralDashboardComponent implements AfterViewInit {
  @ViewChild('barChartCanvas') chartRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  zones: string[] = ['North', 'South', 'East', 'West'];
  circles: string[] = ['Circle A', 'Circle B', 'Circle C'];
  selectedZone = '';
  selectedCircle = '';
  selectedDate: Date = new Date();

  readingReceived = 120;
  readingPending = 30;

  ngAfterViewInit(): void {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['April', 'May', 'June'],
          datasets: [
            {
              label: 'Readings Received',
              data: [100, 120, 130],
              backgroundColor: '#4caf50'
            },
            {
              label: 'Readings Pending',
              data: [20, 25, 15],
              backgroundColor: '#f44336'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 20
              }
            },
            x: {
              grid: { display: false }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            title: {
              display: true,
              text: 'Meter Reading Summary'
            }
          }
        }
      });
    }
  }
}
