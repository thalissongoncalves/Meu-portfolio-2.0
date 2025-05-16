const devFullStackBtns = document.querySelectorAll(".devCertificateFSBtn");

devFullStackBtns.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        const certificateImg = button.parentElement.nextElementSibling.querySelector("img");

        if (img.className === "devCertificateFSImg") {
            // Abrir certificado
            img.setAttribute("src", "./images/seta-pra-baixo.png");
            img.className = "devCertificateFSImgUp";
            certificateImg.style.display = "none";
        } else {
            // Fechar certificado
            img.setAttribute("src", "./images/seta-pra-cima.png");
            img.className = "devCertificateFSImg";
            certificateImg.style.display = "block";
        }
    });
});
