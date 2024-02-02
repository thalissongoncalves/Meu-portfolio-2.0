import certificateData from "./certificates-data.js";

const certificateCardsCarousel = document.querySelector(".main-certificate-cards-carousel");

certificateData.map((certificate) => {

    const mainCertificateCard = document.createElement("div");
    mainCertificateCard.className = "main-certificate-card";
    mainCertificateCard.style.display = "block";

    const mainCertificateCardTwoColumns = document.createElement("div");
    mainCertificateCardTwoColumns.className = "main-certificate-card-two-columns";

    const mainCertificateImage = document.createElement("div");
    mainCertificateImage.className = "main-certificate-image";

    const certificateImageUrl = document.createElement("img");
    certificateImageUrl.src = certificate.image;
    certificateImageUrl.style.borderRadius = "5px";
    certificateImageUrl.style.width = "100%";

    const mainCertificateInfo = document.createElement("div");
    mainCertificateInfo.className = "main-certificate-info";

    const mainCertificateInfoTitle = document.createElement("h2");
    mainCertificateInfoTitle.innerText = certificate.title;

    const mainCertificateBtns = document.createElement("div");
    mainCertificateBtns.className = "main-certificate-btns";

    const mainCertificateButtonOneUrl = document.createElement("a");
    mainCertificateButtonOneUrl.href = certificate.credencial;
    mainCertificateButtonOneUrl.target = "_blank";

    const mainCertificateButtonOneIcon = document.createElement("i");
    mainCertificateButtonOneIcon.classList = "fa-solid fa-link";
    mainCertificateButtonOneUrl.appendChild(mainCertificateButtonOneIcon);

    const mainCertificateButtonOneText = document.createElement("span");
    mainCertificateButtonOneText.innerText = " Credencial";
    mainCertificateButtonOneUrl.appendChild(mainCertificateButtonOneText);

    certificateCardsCarousel.appendChild(mainCertificateCard);
    mainCertificateCard.appendChild(mainCertificateCardTwoColumns);
    mainCertificateCardTwoColumns.appendChild(mainCertificateInfoTitle);
    mainCertificateCardTwoColumns.appendChild(mainCertificateImage);
    mainCertificateImage.appendChild(certificateImageUrl);
    mainCertificateCardTwoColumns.appendChild(mainCertificateBtns);
    mainCertificateBtns.appendChild(mainCertificateButtonOneUrl);
    mainCertificateCardTwoColumns.appendChild(mainCertificateInfo);
    

});