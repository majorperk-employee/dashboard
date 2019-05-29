import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isCollapsed = false;
  isReverseArrow = false;
  width = 200;

  constructor() { }

  ngOnInit() {
  }

}
