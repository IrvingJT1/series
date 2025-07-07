import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationComponent } from './calculation.component';

describe('CalculationComponent', () => {
  let component: CalculationComponent;
  let fixture: ComponentFixture<CalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing isPrime Method, if nElement is 5 (Prime number)', () =>{
    
    let nElement = 5;
    let res = false;
    
    res = component.isPrime(nElement);

    expect(res).toBe(true);

  });

  it('testing isPrime Method, if nElement is 44 (No Prime number)', () =>{
    
    let nElement = 44;
    let res = false;
    
    res = component.isPrime(nElement);

    expect(res).toBe(false);

  });

  it('testing isPrime Method, if nElement is 0 (0 or 1 are not a Prime number)', () =>{
    
    let nElement = 0;
    let res = false;
    
    res = component.isPrime(nElement);

    expect(res).toBe(false);

  });

  it('testing getPrimeNumber Method, if nElement is 0', () =>{
    
    let nElement = 0;
    let res = 0;
    
    res = component.getPrimeNumber(nElement);

    expect(res).toBe(-1);

  });

  it('testing getPrimeNumber Method, if nElement is 5', () =>{
    
    let nElement = 5;
    let res = 0;
    
    res = component.getPrimeNumber(nElement);

    expect(res).toBe(11);

  });

  it('testing getFibonacciNumber Method, if nElement is 12', () =>{
    
    let nElement = 12;
    let res = 0;
    
    res = component.getFibonacciNumber(nElement);

    expect(res).toBe(89);

  });

  it('testing getFibonacciNumber Method, if nElement is 1', () =>{
    
    let nElement = 1;
    let res = 0;
    
    res = component.getFibonacciNumber(nElement);

    expect(res).toBe(0);

  });

  it('testing getFibonacciNumber Method, if nElement is 2', () =>{
    
    let nElement = 2;
    let res = 0;
    
    res = component.getFibonacciNumber(nElement);

    expect(res).toBe(1);

  });

  it('testing getTriangularNumber Method, if nElement is 2', () =>{
    
    let nElement = 2;
    let res = 0;
    
    res = component.getTriangularNumber(nElement);

    expect(res).toBe(3);

  });

  it('testing getTriangularNumber Method, if nElement is 10', () =>{
    
    let nElement = 10;
    let res = 0;
    
    res = component.getTriangularNumber(nElement);

    expect(res).toBe(55);

  });

  it('testing applyEquation Method, if nElement is 1', () =>{
    
    let nElement = 1;
    let res = 0;
    
    res = component.applyEquation(nElement);

    expect(res).toBe(-1);

  });

  it('testing applyEquation Method, if nElement is 11', () =>{
    
    let nElement = 11;
    let res = 0;
    
    res = component.applyEquation(nElement);

    res = Number(res.toFixed(2));

    expect(res).toBe(31.89);

  });

  it('testing applyEquation Method, if nElement is 20', () =>{
    
    let nElement = 20;
    let res = 0;
    
    res = component.applyEquation(nElement);

    res = Number(res.toFixed(2));

    expect(res).toBe(3.06);

  });
});
