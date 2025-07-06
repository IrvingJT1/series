import { Component } from '@angular/core';
import { SeriesFormComponent } from "./components/series-form/series-form.component";

@Component({
  selector: 'app-root',
  imports: [SeriesFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'series';
}
