const avatarBtnMobile = document.querySelector(".avatar-cell-btn");
const headerMobile = document.querySelector(".avatar-cell-container");
const leftContent = document.querySelector(".left-content");
const avatarBlock = document.querySelector(".avatar-block");
const scrollableContent = document.querySelector("#scrollable-content");
const avatarCloseBtn = document.querySelector(".avatar-block-close-btn");

avatarBtnMobile.addEventListener('click', function() {
    headerMobile.style.display = "none";
    leftContent.style.display = "block";
    avatarBlock.style.display = "flex";
    scrollableContent.style.display = "block";
})

avatarCloseBtn.addEventListener('click', function() {
    headerMobile.style.display = "block";
    leftContent.style.display = "none";
    avatarBlock.style.display = "none";
    scrollableContent.style.display = "none";
})