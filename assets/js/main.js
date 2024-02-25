let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', makeThree)
document.querySelector('#zebra').addEventListener('click', makeNine)
document.querySelector('#cantThinkOfAnything').addEventListener('click', makeNegativeTwo)
document.querySelector('#willThisWork').addEventListener('click', makeNegativeSeven)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function makeThree() {
  total = total + 3;
  document.querySelector('#placeToPutResult').innerText = total
}

function makeNine() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerText = total
}

function makeNegativeTwo(){
  total = total - 2
  document.querySelector('#placeToPutResult').innerText = total
}

function makeNegativeSeven() {
  total = total - 7
  document.querySelector('#placeToPutResult').innerText = total
}


