import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reetayn-dashboard';

  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  
}
