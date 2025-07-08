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

  init = signal<boolean>(true);

  toNumber(value: string) {
    return Number(value);
  }

  startCalc = (nElement:number) =>{
    this.inputValue.set(nElement);
    this.init.set(false);
  }

  avoidCharacters = (event: KeyboardEvent) => {
    console.log(event)
    if(event.key == '.' || event.key == '-' || event.key=='e' || event.key=='+')
      event.preventDefault();

  }

}
