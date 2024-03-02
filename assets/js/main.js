

let display='';
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
    
  
  



  
  




