const menuItem = document.querySelectorAll('.item-menu');
let btnExp = document.querySelector('#btn-exp');
let menuSide = document.querySelector('#menu-block');
let rightMenuBtnMobile = document.querySelector('.menu-right-btn');
let mainBlock = document.querySelector('.main-block');
let aboutMe = document.querySelector('.about-me');

function selectLink () {
    menuItem.forEach((item) => item.classList.remove('ativo'));
    this.classList.add('ativo');
}

menuItem.forEach((item) => item.addEventListener('click', selectLink));

btnExp.addEventListener('click', function() {
    if (menuSide.className === "expandir") {
        menuSide.className = 'fechar';
        mainBlock.style.marginLeft = "100px";
        aboutMe.style.marginLeft = "30px";
    } else {
        menuSide.className = 'expandir';
        mainBlock.style.marginLeft = "300px";
        aboutMe.style.marginLeft = "20px";
    }
})