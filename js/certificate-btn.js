const devFullStackBtn = document.querySelector(".devCertificateFSBtn");

devFullStackBtn.addEventListener("click", closeFullStackCertificate())

function closeFullStackCertificate () {
    const devCertificateFSImg = document.querySelector(".devCertificateFSImg");
    devCertificateFSImg.style.display = "none"
}