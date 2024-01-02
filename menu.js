const menuItem = document.querySelectorAll('.item-menu');

function selectLink () {
    menuItem.forEach((item) => item.classList.remove('ativo'));
    this.classList.add('ativo');
}

menuItem.forEach((item) => item.addEventListener('click', selectLink));

let btnExp = document.querySelector('#btn-exp');
let menuSide = document.querySelector('#menu-block');

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expandir');
})