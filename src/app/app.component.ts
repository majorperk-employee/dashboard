import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reetayn-dashboard';

  isCollapsed = true;
  isReverseArrow = false;
  
  get width(): number {
    return this.isCollapsed ? 80 : 200; 
  }
  
}
