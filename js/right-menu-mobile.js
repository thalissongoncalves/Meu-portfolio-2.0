const rightMenuBtn = document.querySelector(".menu-right-btn");
const mobileHeader = document.querySelector(".avatar-cell-container");
const menuBlock = document.querySelector("#menu-block");
const menuBtnMobile = document.querySelector(".menu-right-btn-mobile");
const main = document.getElementById("home");
const menuRightBtnMobileNav = document.querySelector(".menu-btn-mobile");

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

menuRightBtnMobileNav.addEventListener("click", () => {
    mobileHeader.style.display = "block";
    avatarBlock.style.display = "flex";
    scrollableContent.style.display = "block";
    mainBlock.style.display = "block";
    menuBlock.style.display = "none";
})