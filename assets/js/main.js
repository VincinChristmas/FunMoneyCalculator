/*let display='';
let total = [];


document.querySelector('#seven').addEventListener('click', makeSeven);
document.querySelector('#four').addEventListener('click', makeFour);
document.querySelector('#one').addEventListener('click', makeOne);
document.querySelector('#zero').addEventListener('click', makeZero);
document.querySelector('#eight').addEventListener('click', makeEight);
document.querySelector('#five').addEventListener('click', makeFive);
document.querySelector('#two').addEventListener('click', makeTwo);
document.querySelector('#dotSign').addEventListener('click', makeDot);
document.querySelector('#nine').addEventListener('click', makeNine);
document.querySelector('#six').addEventListener('click', makeSix);
document.querySelector('#three').addEventListener('click', makeThree);
document.querySelector('#equalSign').addEventListener('click', makeEqual);
document.querySelector('#divideSign').addEventListener('click', makeDivide);
document.querySelector('#multiplySign').addEventListener('click', makeMultiply)
document.querySelector('#plusSign').addEventListener('click', makePlusSign);
document.querySelector('#minusSign').addEventListener('click', makeMinusSign);






function makeSeven ()  {
  display = display + 7;
  document.querySelector('#theResults').innerText = display;
  total.push(7)
}

function makeFour() {
  display = display + 4;
  document.querySelector('#theResults').innerText = display;
  total.push(4)
}

function makeOne() {
  display = display + 1;
  document.querySelector('#theResults').innerText = display;
  total.push(1)
}

function makeZero() {
  display = display + 0;
  document.querySelector('#theResults').innerText = display;
  total.push(0)
}

function makeEight() {
  display = display + 8;
  document.querySelector('#theResults').innerText = display;
  total.push(8)
}

function makeFive() {
  display = display + 5;
  document.querySelector('#theResults').innerText = display;
  total.push(5)
}

function makeTwo() {
  display = display + 2;
  document.querySelector('#theResults').innerText = display;
  total.push(2)
}

function makeDot() {
  display = display + '.';
  document.querySelector('#theResults').textContent = display;
  total.push('.')
}

function makeNine() {
  display = display + 9;
  document.querySelector('#theResults').innerText = display;
  total.push(9)
}

function makeSix() {
  display = display + 6;
  document.querySelector('#theResults').innerText = display;
  total.push(6)
}

function makeThree() {
  display = display + 3;
  document.querySelector('#theResults').innerText = display;
  total.push(3)
}



function makeDivide() {
  display = display + '÷';
  document.querySelector('#theResults').innerText = display;
  total.push('÷')
}


function makeMultiply() {
  display = display + '×';
  document.querySelector('#theResults').innerText = display;
  total.push('×')
}

function makePlusSign() {
  display = display + '+';
  document.querySelector('#theResults').innerText = display;
  total.push('+')
}

function makeMinusSign() {
  display = display + '-'
  document.querySelector('#theResults').innerText = display
  total.push('-')
  
}

function makeEqual() {
   display = total
   let capStringOne = ''
   let capStringTwo = ''

   if (display.includes('-')) {
   for (let i = 0; i <= display.length; i++) {
   capStringOne = Number(display.slice(0, display.indexOf('-')).join(""))
   capStringTwo = Number(display.slice(display.indexOf('-') + 1).join(""))
   }
   document.querySelector('#theResults').innerText = capStringOne - capStringTwo;
  }

  if (display.includes('÷')) {
    for (let i = 0; i <= display.length; i++) {
    capStringOne = Number(display.slice(0, display.indexOf('÷')).join(""))
    capStringTwo = Number(display.slice(display.indexOf('÷') + 1).join(""))
    }
    document.querySelector('#theResults').innerText = capStringOne / capStringTwo;
   }
   
   if (display.includes('×')) {
    for (let i = 0; i <= display.length; i++) {
    capStringOne = Number(display.slice(0, display.indexOf('×')).join(""))
    capStringTwo = Number(display.slice(display.indexOf('×') + 1).join(""))
    }
    document.querySelector('#theResults').innerText = capStringOne * capStringTwo;
   }

   if (display.includes('+')) {
    for (let i = 0; i <= display.length; i++) {
    capStringOne = Number(display.slice(0, display.indexOf('+')).join(""))
    capStringTwo = Number(display.slice(display.indexOf('+') + 1).join(""))
    }
    document.querySelector('#theResults').innerText = capStringOne + capStringTwo;
   }

  
}
    

  */

// A class to represent a calculator
class Calculator {
  // A constructor to initialize the display and total properties
  constructor() {
    this.display = '';
    this.total = [];
  }

  // A method to append a digit to the display and total
  appendDigit(digit) {
    this.display = this.display + digit;
    document.querySelector('#theResults').innerText = this.display;
    this.total.push(digit);
  }

  // A method to append an operator to the display and total
  appendOperator(operator) {
    this.display = this.display + operator;
    document.querySelector('#theResults').innerText = this.display;
    this.total.push(operator);
  }

  // A method to evaluate the total and display the result
  evaluate() {
    this.display = this.total;
    let capStringOne = '';
    let capStringTwo = '';

    if (this.display.includes('-')) {
      for (let i = 0; i <= this.display.length; i++) {
        capStringOne = Number(
          this.display.slice(0, this.display.indexOf('-')).join('')
        );
        capStringTwo = Number(
          this.display.slice(this.display.indexOf('-') + 1).join('')
        );
      }
      document.querySelector('#theResults').innerText =
        capStringOne - capStringTwo;
    }

    if (this.display.includes('÷')) {
      for (let i = 0; i <= this.display.length; i++) {
        capStringOne = Number(
          this.display.slice(0, this.display.indexOf('÷')).join('')
        );
        capStringTwo = Number(
          this.display.slice(this.display.indexOf('÷') + 1).join('')
        );
      }
      document.querySelector('#theResults').innerText =
        capStringOne / capStringTwo;
    }

    if (this.display.includes('×')) {
      for (let i = 0; i <= this.display.length; i++) {
        capStringOne = Number(
          this.display.slice(0, this.display.indexOf('×')).join('')
        );
        capStringTwo = Number(
          this.display.slice(this.display.indexOf('×') + 1).join('')
        );
      }
      document.querySelector('#theResults').innerText =
        capStringOne * capStringTwo;
    }

    if (this.display.includes('+')) {
      for (let i = 0; i <= this.display.length; i++) {
        capStringOne = Number(
          this.display.slice(0, this.display.indexOf('+')).join('')
        );
        capStringTwo = Number(
          this.display.slice(this.display.indexOf('+') + 1).join('')
        );
      }
      document.querySelector('#theResults').innerText =
        capStringOne + capStringTwo;
    }
  }
}

// An instance of the Calculator class
let calc = new Calculator();

// Adding event listeners to the buttons
document.querySelector('#seven').addEventListener('click', () => {
  calc.appendDigit(7);
});
document.querySelector('#four').addEventListener('click', () => {
  calc.appendDigit(4);
});
document.querySelector('#one').addEventListener('click', () => {
  calc.appendDigit(1);
});
document.querySelector('#zero').addEventListener('click', () => {
  calc.appendDigit(0);
});
document.querySelector('#eight').addEventListener('click', () => {
  calc.appendDigit(8);
});
document.querySelector('#five').addEventListener('click', () => {
  calc.appendDigit(5);
});
document.querySelector('#two').addEventListener('click', () => {
  calc.appendDigit(2);
});
document.querySelector('#dotSign').addEventListener('click', () => {
  calc.appendDigit('.');
});
document.querySelector('#nine').addEventListener('click', () => {
  calc.appendDigit(9);
});
document.querySelector('#six').addEventListener('click', () => {
  calc.appendDigit(6);
});
document.querySelector('#three').addEventListener('click', () => {
  calc.appendDigit(3);
});
document.querySelector('#equalSign').addEventListener('click', () => {
  calc.evaluate();
});
document.querySelector('#divideSign').addEventListener('click', () => {
  calc.appendOperator('÷');
});
document.querySelector('#multiplySign').addEventListener('click', () => {
  calc.appendOperator('×');
});
document.querySelector('#plusSign').addEventListener('click', () => {
  calc.appendOperator('+');
});
document.querySelector('#minusSign').addEventListener('click', () => {
  calc.appendOperator('-');
});
  



  
  




