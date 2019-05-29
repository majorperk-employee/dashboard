import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  data = [
    {
      title: 'Average Retention',
      abbreviation: 'Av. Retention',
      value: 50,
      suffix: "%",
      color: '#59acfa'
    },
    {
      title: 'Productivity',
      abbreviation: "Productivity",
      value: 50,
      suffix: "%",
      color: '#febf0e'
    },
    {
      title: 'Average Employee Performance Score',
      abbreviation: 'Av. Empl Perf.',
      value: 50,
      suffix: "pts",
      color: '#f6851e'
    },
    {
      title: 'Number of Employees Left ?',
      abbreviation: '# of Empl Left ?',
      value: 50,
      suffix: "",
      color: '#ef4822'
    },
    {
      title: 'Active Employee Count',
      abbreviation: 'Active Empl #',
      value: 50,
      suffix: "",
      color: '#8dd26c'
    },
    {
      title: 'New Employee Count',
      abbreviation: 'New Empl #',
      value: 50,
      suffix: "",
      color: '#806cd2'
    }
  ];

  get count(): number {
    return this.data.length;
  }

}
