const devFullStackBtn = document.querySelector(".devCertificateFSBtn");

devFullStackBtn.addEventListener("click", () => {
    if (devFullStackBtn.lastElementChild.className === "devCertificateFSImg") {
        return closeFullStackCertificate()
    } else {
        return openFullStackCertificate()
    }
})

function closeFullStackCertificate () {
    const devCertificateFSImg = document.querySelector(".devCertificateFSImg");
    const fullStackCertificateImg = document.querySelector(".fullStackCertificateImg");

    if (devCertificateFSImg.className === "devCertificateFSImg") {
        devCertificateFSImg.setAttribute("src", "./images/seta-pra-baixo.png")
        devCertificateFSImg.className = "devCertificateFSImgUp"
        fullStackCertificateImg.style.display = "none"
    }
    // if (devCertificateFSImg.className === "devCertificateFSImgUp") {
    //     devCertificateFSImg.setAttribute("src", "./images/seta-pra-baixo.png")
    //     devCertificateFSImg.className = "devCertificateFSImg"
    //     fullStackCertificateImg.style.display = "block"
    // }
}

function openFullStackCertificate () {
    const devCertificateFSImg = document.querySelector(".devCertificateFSImgUp");
    const fullStackCertificateImg = document.querySelector(".fullStackCertificateImg");

    if (devCertificateFSImg.className === "devCertificateFSImgUp") {
        devCertificateFSImg.setAttribute("src", "./images/seta-pra-cima.png")
        devCertificateFSImg.className = "devCertificateFSImg"
        fullStackCertificateImg.style.display = "block"
    }
}