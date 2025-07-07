import { Component, input } from '@angular/core';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  serieValue = input<number>(0);

}
