const ism = document.getElementById('ism');

const familya = document.getElementById('familya');

const kasb = document.getElementById('kasb');

const btn = document.getElementById('btn');

const content = document.getElementById('demo');

const familyasi = document.getElementById('familyasi');

const kasbi = document.getElementById('kasbi');


function addToLocalStorage(ism , value ){
  localStorage.setItem(ism , value)
}

let valueFromLocalStorage = localStorage.getItem('Ism');
let familyasii = localStorage.getItem('Familya');
// let kasbii = localStorage.getItem('Ism');

btn.addEventListener('click', function (){
  addToLocalStorage('Ism', ism.value);

  content.innerHTML = valueFromLocalStorage


  if (ism.value =='' && familya.value == '') {
    alert('Iltimos malumotni kiriting')
  }

})


btn.addEventListener('click', function (){
  addToLocalStorage('Familya', familya.value);

  familyasi.innerHTML = familyasii

  if (ism.value =='' && familya.value == '') {
    alert('Iltimos malumotni kiriting')
  }

  ism.value = ''
  familya.value = ''
})
