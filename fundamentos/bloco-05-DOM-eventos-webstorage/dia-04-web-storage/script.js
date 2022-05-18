const divText = document.getElementById('texto-impresso');

const textArea = document.getElementById('texto');

textArea.addEventListener('keyup', printText);
function printText() {
  const writeText = textArea.value;
  divText.innerHTML = writeText;
}

const inputBkgColor = document.getElementById('cor-de-fundo');
const btnBkgColor = document.getElementById('btn-bkg-cl');
btnBkgColor.addEventListener('click', function(){
  localStorage.setItem('bkgColor', inputBkgColor.value);
  divText.style.backgroundColor = localStorage.getItem('bkgColor');
})

const inputTxtColor = document.getElementById('cor-do-texto');
const btnTxtColor = document.getElementById('btn-txt-cl');
btnTxtColor.addEventListener('click', function(){
  localStorage.setItem('txtColor', inputTxtColor.value);
  divText.style.color = localStorage.getItem('txtColor');
})

const inputFontSize = document.getElementById('tamanho-da-fonte');
const btnFontSize = document.getElementById('btn-font-size');
btnFontSize.addEventListener('click', function(){
  localStorage.setItem('fontSize', `${inputFontSize.value}px`);
  divText.style.fontSize = localStorage.getItem('fontSize');
})

const inputLinesHeight = document.getElementById('espacamento-linhas');
const btnLinesHeight = document.getElementById('btn-lines-height');
btnLinesHeight.addEventListener('click', function(){
  localStorage.setItem('linesHeight', `${inputLinesHeight.value}px`);
  divText.style.lineHeight = localStorage.getItem('linesHeight');
})

const inputFontType = document.getElementById('tipo-da-fonte');
const btnFontType = document.getElementById('btn-font-type');
btnFontType.addEventListener('click', function(){
  localStorage.setItem('fontType', inputFontType.value);
  divText.style.fontFamily = localStorage.getItem('fontType');
})

window.onload = function() {
  divText.style.backgroundColor = localStorage.getItem('bkgColor');
  divText.style.color = localStorage.getItem('txtColor');
  divText.style.fontSize = localStorage.getItem('fontSize');
  divText.style.lineHeight = localStorage.getItem('linesHeight');
  divText.style.fontFamily = localStorage.getItem('fontType');
}