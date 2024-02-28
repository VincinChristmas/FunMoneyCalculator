let display = []
let returnNum;


document.querySelector('#seven').addEventListener('click', makeSeven);
document.querySelector('#eight').addEventListener('click', makeEight)
document.querySelector('#plusSign').addEventListener('click', makePlusSign)

function makeSeven() {
  returnNum = display
  display.push(7)
  document.querySelector('#theResults').innerText = returnNum
}

function makeEight() {
  returnNum = display
  display.push(8)
  document.querySelector('#theResults').innerText = returnNum
}

function makePlusSign() {
  document.querySelector('#theResults').innerText = '+'
}


