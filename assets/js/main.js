let display = '';

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



function makeSeven() {
  display = display + 7;
  document.querySelector('#theResults').innerText = display;
}

function makeFour() {
  display = display + 4;
  document.querySelector('#theResults').innerText = display;
}

function makeOne() {
  display = display + 1;
  document.querySelector('#theResults').innerText = display;
}

function makeZero() {
  display = display + 0;
  document.querySelector('#theResults').innerText = display;
}

function makeEight() {
  display = display + 8;
  document.querySelector('#theResults').innerText = display;
}

function makeFive() {
  display = display + 5;
  document.querySelector('#theResults').innerText = display;
}

function makeTwo() {
  display = display + 2;
  document.querySelector('#theResults').innerText = display;
}

function makeDot() {
  display = display + '.';
  document.querySelector('#theResults').textContent = display;
}

function makeNine() {
  display = display + 9;
  document.querySelector('#theResults').innerText = display;
}

function makeSix() {
  display = display + 6;
  document.querySelector('#theResults').innerText = display;
}

function makeThree() {
  display = display + 3;
  document.querySelector('#theResults').innerText = display;
}

function makeEqual() {
  display = display + '=';
  document.querySelector('#theResults').innerText = display;
}

function makeDivide() {
  display = display + '÷';
  document.querySelector('#theResults').innerText = display;
}


function makeMultiply() {
  display = display + '×';
  document.querySelector('#theResults').innerText = display;
}

function makePlusSign() {
  display = display + '+';
  document.querySelector('#theResults').innerText = display;
}

function makeMinusSign() {
  display = display + '-';
  document.querySelector('#theResults').innerText = display;
}




