let total = 0;

document.querySelector('#zero').addEventListener('click', makeZero);
document.querySelector('#one').addEventListener('click', makeOne);
document.querySelector('#two').addEventListener('click', makeTwo);
document.querySelector('#three').addEventListener('click', makeThree);
document.querySelector('#four').addEventListener('click', makeFour);
document.querySelector('#five').addEventListener('click', makeFive);
document.querySelector('#six').addEventListener('click', makeSix);
document.querySelector('#seven').addEventListener('click', makeSeven);
document.querySelector('#eight').addEventListener('click', makeEight);
document.querySelector('#nine').addEventListener('click', makeNine);


function makeZero() {
  total = 0;
  document.querySelector('#theResults').innerText = total;
}

function makeOne() {
  total = total + 1;
  document.querySelector('#theResults').innerText = total;
}

function makeTwo() {
  total = total + 2;
  document.querySelector('#theResults').innerText = total;
}

function makeThree() {
  total = total + 3;
  document.querySelector('#theResults').innerText = total;
}

function makeFour() {
  total = total + 4;
  document.querySelector('#theResults').innerText = total;
}

function makeFive() {
  total = total + 5;
  document.querySelector('#theResults').innerText = total;
}

function makeSix() {
  total = total + 6;
  document.querySelector('#theResults').innerText = total
}

function makeSeven(){
  total = total + 7;
  document.querySelector('#theResults').innerText = total
}

function makeEight() {
  total = total + 8;
  document.querySelector('#theResults').innerText = total
}

function makeNine() {
  total = total + 9;
  document.querySelector('#theResults').innerText = total
}

/*
//create new Calculator
function Calculator() {
  this.read = function() {
  let a = prompt('enter the first value');
  let b = prompt('enter the second value');
  
  this.a = Number(a);
  this.b = Number(b);
  },

  this.sum = function() {
    return this.a + this.b;
  },

  this.mul = function() {
    return this.a * this.b;
  }
}

let calculator = new Calculator();

calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/


