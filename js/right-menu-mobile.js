const rightMenuBtn = document.querySelector(".menu-right-btn");
const mobileHeader = document.querySelector(".avatar-cell-container");
const menuBlock = document.querySelector("#menu-block");
const menuBtnMobile = document.querySelector(".menu-btn-mobile");
const main = document.getElementById("home");

rightMenuBtn.addEventListener('click', function() {
    mobileHeader.style.display = "none";
    menuBlock.style.display = "block";
    main.style.display = "none";
});

menuBtnMobile.addEventListener('click', function() {
    menuBlock.style.display = "none";
    mobileHeader.style.display = "block";
    main.style.display = "block";
})