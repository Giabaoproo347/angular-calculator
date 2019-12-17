import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";

@Component({
  selector: 'app-calculator-abc',
  templateUrl: './calculator-abc.component.html',
  styleUrls: ['./calculator-abc.component.css']
})
export class CalculatorAbcComponent implements OnInit {

  output: number;
  firstNumber: number;
  secondNumber: number;
  operator = '+';

  onFirstNumber(num1: number) {
    this.firstNumber = Number(num1);
  }

  onSecondNumber (num2: number) {
    this.secondNumber = Number(num2);
  }

  onSelect(operator){
    this.operator = operator;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.output = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.output = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.output = this.firstNumber / this.secondNumber;
    }
  }

  constructor() {
  }

  ngOnInit() {}
}
