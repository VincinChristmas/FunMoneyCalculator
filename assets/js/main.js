function Calculator {
  'zero': document.getElementById('zero');
  'one': document.getElementById('one');
  'two': document.getElementById('two');
  'three': document.getElementById('three');
  'four': document.getElementById('four');
  'five': document.getElementById('five');
  'six': document.getElementById('six');
  'seven': document.getElementById('seven');
  'eight': document.getElementById('eight');
  'nine': document.getElementById('nine');
  'dotSign': document.getElementById('dotSign');
  'equalSign': document.getElementById('equalSign');
  'plusSign': document.getElementById('plusSign');
  'minusSign': document.getElementById('minusSign');
  'multiplySign': document.getElementById('multiplySign');
  'divideSign': document.getElementById('divideSign');

  addition(num) {
    let total = 0;
    return total + num;
    document.querySelector('#theResults').innerText = total;
  }

  

}






/*let total = 0;
let num = 0;

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
document.querySelector('#plusSign').addEventListener('click', Add)

function Add(num) {
 return total + num;
}

function makeZero() {
  num = num + 0;
  document.querySelector('#theResults').innerText = num;
}

function makeOne() {
  num = num + 1;
  document.querySelector('#theResults').innerText = num;
}

function makeTwo() {
  num = num + 2;
  document.querySelector('#theResults').innerText = num;
}

function makeThree() {
  num = num + 3;
  document.querySelector('#theResults').innerText = num;
}

function makeFour() {
  num = num + 4;
  document.querySelector('#theResults').innerText = num;
}

function makeFive() {
  num = num + 5;
  document.querySelector('#theResults').innerText = num;
}

function makeSix() {
  num = num + 6;
  document.querySelector('#theResults').innerText = num;
}

function makeSeven(){
  num = num + 7;
  document.querySelector('#theResults').innerText = num;
}

function makeEight() {
  num = num + 8;
  document.querySelector('#theResults').innerText = num;
}

function makeNine() {
  num = num + 9;
  document.querySelector('#theResults').innerText = num
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


