import { Component, signal } from '@angular/core';
import { CalculationComponent } from "../calculation/calculation.component";
import { ResultComponent } from "../result/result.component";

@Component({
  selector: 'app-series-form',
  imports: [CalculationComponent, ResultComponent],
  templateUrl: './series-form.component.html',
  styleUrl: './series-form.component.css'
})
export class SeriesFormComponent {

  inputValue = signal<number>(0);

  serieValue = signal<number>(0);

  toNumber(value: string) {
    return Number(value);
  }

  //Do method to avoid the '-' and '.'
}
