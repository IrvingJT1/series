import { Component, effect, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-calculation',
  imports: [],
  templateUrl: './calculation.component.html',
  styleUrl: './calculation.component.css'
})
export class CalculationComponent {
  numberValue= input<number>();

  //Se inicia desde 2 porque 0 y 1 no se consideran primos
  //res contendrá el resultado del enésimo número primo

  getPrimeNumber = (nElement:number = 0):number =>{
    
    if(nElement === 0) return -1;

    let positionIndicator = 0;
    let numberSerie = 2;
    

    while(positionIndicator < nElement)
    {
      if(this.isPrime(numberSerie))
      {
        positionIndicator++;
      }

      numberSerie++;
    }

    return numberSerie-1;
  }

  isPrime = (numberSerie:number = 0): boolean =>{

    let res = false;

    for(let i = 2; i<=numberSerie; i++)
    {
      if(numberSerie % i === 0)
      {
        if(i!=numberSerie)
        {
          res = false;
          return res;
        }
        else
        {
          res = true;
          return res;
        }
      }
    }

    return res;
  }

  numberEffect = effect(()=>{
    console.log(this.getPrimeNumber(this.numberValue()))
    // console.log(this.isPrime(this.numberValue()));
  });
}
