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
      suffix: "%"
    },
    {
      title: 'Productivity',
      abbreviation: "Productivity",
      value: 50,
      suffix: "%"
    },
    {
      title: 'Average Employee Performance Score',
      abbreviation: 'Av. Empl Perf.',
      value: 50,
      suffix: "pts"
    },
    {
      title: 'Number of Employees Left ?',
      abbreviation: '# of Empl Left ?',
      value: 50,
      suffix: ""
    },
    {
      title: 'Active Employee Count',
      abbreviation: 'Active Empl #',
      value: 50,
      suffix: ""
    },
    {
      title: 'New Employee Count',
      abbreviation: 'New Empl #',
      value: 50,
      suffix: ""
    }
  ];

  get count(): number {
    return this.data.length;
  }

}
