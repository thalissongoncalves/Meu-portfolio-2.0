const avatarBtnMobile = document.querySelector(".avatar-cell-btn");
const headerMobile = document.querySelector(".avatar-cell-container");
const leftContent = document.querySelector(".left-content");
const avatarBlock = document.querySelector(".avatar-block");
const scrollableContent = document.querySelector("#scrollable-content");
const avatarCloseBtn = document.querySelector(".avatar-block-close-btn");
const closeBtn = document.querySelector(".btn-close-cell");
const mainBlock = document.getElementById("home");
const rightMenuBtnMobile = document.querySelector(".menu-right-btn-mobile");
const rightMenuBtnContainer = document.querySelector(".menu-right-btn-container");
const btnCloseMenuMobile = document.querySelector(".closeBtnMenuMobile");
const menuRightBtnMobile = document.querySelector(".menu-btn-mobile");

avatarBtnMobile.addEventListener('click', () => {
    headerMobile.style.display = "none";
    leftContent.style.display = "block";
    avatarBlock.style.display = "flex";
    scrollableContent.style.display = "block";
    mainBlock.style.display = "none";
})

rightMenuBtnMobile.addEventListener('click', function() {
    leftContent.style.display = "block";
    avatarBlock.style.display = "flex";
    scrollableContent.style.display = "block";
    mainBlock.style.display = "none";
    rightMenuBtnMobile.style.display = "none";
    rightMenuBtnContainer.style.display = "none";
})

btnCloseMenuMobile.addEventListener("click", () => {
    leftContent.style.display = "none";
    headerMobile.style.display = "block";
    avatarBlock.style.display = "flex";
    scrollableContent.style.display = "block";
    mainBlock.style.display = "block";
    console.log("TESTE")
})

menuRightBtnMobile.addEventListener("click", () => {
    leftContent.style.display = "none";
    headerMobile.style.display = "block";
    avatarBlock.style.display = "flex";
    scrollableContent.style.display = "block";
    mainBlock.style.display = "block";
    console.log("TESTE")
})