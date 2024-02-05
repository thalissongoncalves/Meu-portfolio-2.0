const avatarBtnMobile = document.querySelector(".avatar-cell-btn");
const headerMobile = document.querySelector(".avatar-cell-container");
const leftContent = document.querySelector(".left-content");
const avatarBlock = document.querySelector(".avatar-block");
const scrollableContent = document.querySelector("#scrollable-content");
const avatarCloseBtn = document.querySelector(".avatar-block-close-btn");
const closeBtn = document.querySelector(".btn-close-cell");
const mainBlock = document.getElementById("home");

avatarBtnMobile.addEventListener('click', function() {
    headerMobile.style.display = "none";
    leftContent.style.display = "block";
    avatarBlock.style.display = "flex";
    scrollableContent.style.display = "block";
    mainBlock.style.display = "none";
})

avatarCloseBtn.addEventListener('click', function() {
    headerMobile.style.display = "block";
    leftContent.style.display = "none";
    avatarBlock.style.display = "none";
    scrollableContent.style.display = "none";
})

closeBtn.addEventListener("click", function() {
    leftContent.style.display = "none";
    headerMobile.style.display = "block";
    // mainBlock.style.display = "block";
})