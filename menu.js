const menuItem = document.querySelectorAll('.item-menu');
let btnExp = document.querySelector('#btn-exp');
let menuSide = document.querySelector('#menu-block');

function selectLink () {
    menuItem.forEach((item) => item.classList.remove('ativo'));
    this.classList.add('ativo');
}

menuItem.forEach((item) => item.addEventListener('click', selectLink));

btnExp.addEventListener('click', function() {
    if (menuSide.className === "expandir") {
        menuSide.classList.toggle('fechar');
    } else {
        menuSide.classList.toggle('expandir');
    }
})