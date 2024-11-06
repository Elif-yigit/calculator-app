const body = document.querySelector('body');
const tema = document.querySelector('.tema');
body.classList.add('dark');

tema.addEventListener('input', function(){
    const secim = tema.value;
   


body.classList.remove('light','dark','default');

 if (secim === '1') {

  body.classList.add('dark');
} else if (secim === '2') {

  body.classList.add('light');
} else if (secim === '3') {
  body.classList.add('default');
}});



const calculatorInfo = document.querySelector('.calculatorInfo');
const butons = document.querySelectorAll('.btnNum');

function tikla () {

  calculatorInfo.innerText += this.innerText;
  // console.log(this.innerText);
}

for ( const btn of butons) {
btn.addEventListener('click', tikla);

}

function reset () {
  calculatorInfo.innerText = '';
}

document.querySelector('.btnReset').addEventListener('click' , reset);


function deleteCalculator() {

  console.log(deleteCalculator);
calculatorInfo.innerText = calculatorInfo.innerText.substring(0, calculatorInfo.innerText.length - 1);
}

document.querySelector('.btnDel').addEventListener('click', deleteCalculator);

function hesapla () {

console.log(this.innerText);

try {
  calculatorInfo.innerText = eval(calculatorInfo.innerText);
} catch {
  alert('Yanlış veri girdiniz');
}
}

document.querySelector('.btnEqual').addEventListener('click',hesapla);