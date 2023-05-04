import { Component } from '@angular/core';
import { ToolbarService } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kendo-test';

  constructor(public toolbarService: ToolbarService) {}
}
