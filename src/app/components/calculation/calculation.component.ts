import { Component, effect, input, Input, output, signal } from '@angular/core';

@Component({
  selector: 'app-calculation',
  imports: [],
  templateUrl: './calculation.component.html',
  styleUrl: './calculation.component.css'
})
export class CalculationComponent {
  numberValue= input<number>();
  serieValue = output<number>();

  //Se inicia desde 2 porque 0 y 1 no se consideran primos
  //res contendrá el resultado del enésimo número primo

  getPrimeNumber = (nElement:number):number =>{
    
    if(nElement === 0) return -1;

    let positionIndicator = 0;
    let numberSerie = 2;
    

    while(positionIndicator < nElement)
    {
      if(this.isPrime(numberSerie))
      {
        positionIndicator++;
      }

      //esta es la razon por la que se aplica el -1 del final
      numberSerie++;
    }

    return numberSerie-1;
  }

  isPrime = (numberSerie:number): boolean =>{

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

  getFibonacciNumber = (nElement:number):number =>{

    //si se toma en cta 1 como el inicio b debe ser 2, los primeros 2 elem deben retornar 1
    let a = 1;
    let b = 1;

    if(nElement === 1)
    {
      return 0;
    }

    if(nElement === 2)
    {
      return 1;
    }

    for(let i = 3; i<nElement; i++)
    {
      let c = a + b;

      a = b;
      b = c;
    }

    return b;
  }

  getTriangularNumber = (nElement:number):number => {

    let res = 0;

    res = (nElement*(nElement+1))/2;

    return res;
  }

  applyEquation=(nElement:number = 0):number=>{

    let res = 0;

    if(nElement <= 1)
      return -1;

    res = (2*this.getPrimeNumber(nElement+2)*3*this.getTriangularNumber(nElement-2))/(7*(this.getFibonacciNumber(nElement)));

    return res;

  }

  numberEffect = effect(()=>{

    this.serieValue.emit(this.applyEquation(this.numberValue()));

  }
);
}
