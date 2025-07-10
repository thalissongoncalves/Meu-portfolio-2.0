import projectsData from "./projects.js";

const filtersBtnBlock = document.querySelector(".main-projects-buttons-filter");
const projects = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "REACT", "BOOTSTRAP", "TAILWINDCSS", "VITE"];
const projectsCardsCarousel = document.querySelector(".main-projects-cards-carousel");
const projectsIcon = [
    {
        tech: "HTML",
        src: "https://img.icons8.com/color/48/html-5--v1.png",
    },
    {
        tech: "CSS",
        src: "https://img.icons8.com/color/48/css3.png",
    },
    {
        tech: "JAVASCRIPT",
        src: "https://img.icons8.com/color/48/javascript--v1.png",
    },
    {
        tech: "TYPESCRIPT",
        src: "https://img.icons8.com/color/48/typescript.png",
    },
    {
        tech: "PYTHON",
        src: "https://img.icons8.com/color/48/python--v1.png",
    },
    {
        tech: "REACT",
        src: "https://img.icons8.com/plasticine/100/react.png",
    },
    {
        tech: "MYSQL",
        src: "https://img.icons8.com/color/48/mysql-logo.png",
    },
    {
        tech: "JEST",
        src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png"
    },
    {
        tech: "NODE",
        src: "https://img.icons8.com/fluency/48/node-js.png",
    },
    {
        tech: "VITE",
        src: "https://img.icons8.com/color/32/vite.png",
    },
    {
        tech: "SHOPIFY",
        src: "./images/shopify-icon.png"
    },
    {
        tech: "ANGULAR",
        src: "./images/angular-icon.png"
    },
    {
        tech: "BOOTSTRAP",
        src: "./images/bootstrap-icon.png"
    },
    {
        tech: "WORDPRESS",
        src: "https://img.icons8.com/color/32/wordpress.png"
    },
    {
        tech: "TAILWINDCSS",
        src: "https://img.icons8.com/color/32/tailwindcss.png"
    },
    {
        tech: "TRYBE",
        src: "https://yt3.googleusercontent.com/m-BLIHP9qrnUe3prBJxSWrV0Kow4aNTuG18Q89jGOSvDIfWxF0LRmZVodhRVE01HdfWbWIarvh4=s900-c-k-c0x00ffffff-no-rj"
    }
];

projects.map((project) => {
    const filtersBtn = document.createElement("button");
    let newBtn = filtersBtnBlock.appendChild(filtersBtn);
    
    if (project === "TODOS") {
        newBtn.innerText = project;
        newBtn.style.border = "none";
        newBtn.style.borderRadius = "5px";
        newBtn.style.color = "white";
        newBtn.style.display = "flex";
        newBtn.style.margin = "10px";
        newBtn.style.padding = "10px";
        newBtn.style.fontWeight = "600";
        newBtn.classList = "btn-main-project-filter-active";
    } else {
        newBtn.innerText = project;
        newBtn.style.border = "none";
        newBtn.style.borderRadius = "5px";
        newBtn.style.color = "white";
        newBtn.style.display = "flex";
        newBtn.style.margin = "10px";
        newBtn.style.padding = "10px";
        newBtn.style.fontWeight = "600";
        newBtn.classList = "btn-main-project-filter";
    }
    
});

const filterBtns = document.querySelector(".main-projects-buttons-filter").children;
const filterBtnsArray = Object.entries(filterBtns).map(([chave, valor]) => valor);
const filterBtnsSelected = [];

const createProjectCards = (tech) => {
    if (!tech || tech.length === 0) {
        const projectsTitle = document.querySelectorAll(".main-project-info");
        const projectsTitleArray = Array.from(projectsTitle);
        const projectsTitleFilhos = projectsTitleArray.map((list) => {
            return list.children;
        });

        projectsTitleFilhos.map((html) => {
            return html[0].parentElement.parentElement.parentElement.style.display = "block";
        });
    } else {
        const projectsTitle = document.querySelectorAll(".main-project-info");
        const projectsTitleArray = Array.from(projectsTitle);
        const projectsTitleFilhos = projectsTitleArray.map((list) => {
            return list.children;
        });

        let projectsDataTechnologies = projectsData.map((tc) => {
            return tc;
        });

        const arrayTeste = [];

        projectsDataTechnologies.map((teste) => {
            
            tech.map((element) => {
                if (teste.technologies.includes(element)) {
                    return arrayTeste.push(teste.title);
                }
            });
            
            for (let index = 0; index < arrayTeste.length; index += 1) {
                if (arrayTeste[index] === arrayTeste[index + 1]) {
                    let filterIndex = arrayTeste.indexOf(arrayTeste[index]);
                    arrayTeste.splice(filterIndex, 1);
                };
            };

        });

        projectsTitleFilhos.map((html) => {
            const titleText = html[0].innerText;
            console.log(titleText)
            if (arrayTeste.includes(titleText)) {
                return html[0].parentElement.parentElement.parentElement.style.display = "block";
            } else {
                return html[0].parentElement.parentElement.parentElement.style.display = "none";
            }
        });
    }
    
}


filterBtnsArray.map((btn) => {
    
    btn.addEventListener("click", () => {
        
        if (btn.className === "btn-main-project-filter") {
            btn.className = "btn-main-project-filter-active";
            filterBtnsSelected.push(btn.innerText);
        } else if (btn.className === "btn-main-project-filter-active") {
            btn.className = "btn-main-project-filter";
            filterBtnsSelected.map((btnStd) => {
                if (btnStd === btn.innerText) {
                    let filterIndex = filterBtnsSelected.indexOf(btnStd);
                    filterBtnsSelected.splice(filterIndex, 1);
                }
            })
        };

        if (filterBtnsSelected.length > 0) {
            createProjectCards(filterBtnsSelected);
        } else {
            createProjectCards();
        };

    });
});

projectsData.map((project) => {
    const mainProjectCard = document.createElement("div");
    mainProjectCard.className = "main-project-card";
    mainProjectCard.style.display = project.display;
    const mainProjectCardTwoColumns = document.createElement("div");
    mainProjectCardTwoColumns.className = "main-project-card-two-columns";
    const mainProjectImage = document.createElement("div");
    mainProjectImage.className = "main-project-image";
    const projectImageUrl = document.createElement("img");
    projectImageUrl.src = project.image;
    projectImageUrl.alt = project.alt;
    projectImageUrl.style.borderRadius = "5px";
    projectImageUrl.style.width = "100%";
    projectImageUrl.style.height = "200px";
    const mainProjectInfo = document.createElement("div");
    mainProjectInfo.className = "main-project-info";
    const mainProjectInfoTitle = document.createElement("h2");
    mainProjectInfoTitle.innerText = project.title;
    const mainProjectInfoDate = document.createElement("h3");
    mainProjectInfoDate.innerText = project.date;
    mainProjectInfoDate.style.fontSize = "12px";
    const mainProjectInfoDescription = document.createElement("p");
    mainProjectInfoDescription.innerText = project.description;
    const mainProjectBtns = document.createElement("div");
    mainProjectBtns.className = "main-project-btns";
    const mainProjectButtonOneUrl = document.createElement("a");
    mainProjectButtonOneUrl.href = project.githubUrl;
    mainProjectButtonOneUrl.target = "_blank";
    const mainProjectButtonOneIcon = document.createElement("i");
    mainProjectButtonOneIcon.classList = "fa-brands fa-github";
    mainProjectButtonOneUrl.appendChild(mainProjectButtonOneIcon);
    const mainProjectButtonOneText = document.createElement("span");
    mainProjectButtonOneText.innerText = " GitHub";
    mainProjectButtonOneUrl.appendChild(mainProjectButtonOneText);
    const mainProjectButtonSecond = document.createElement("a");
    mainProjectButtonSecond.href = project.deployUrl;
    mainProjectButtonSecond.target = "_blank";
    const mainProjectButtonSecondIcon = document.createElement("i");
    mainProjectButtonSecondIcon.classList = "fa-solid fa-link";
    mainProjectButtonSecond.appendChild(mainProjectButtonSecondIcon);
    const mainProjectButtonSecondText = document.createElement("span");
    mainProjectButtonSecondText.innerText = " Deploy";
    mainProjectButtonSecond.appendChild(mainProjectButtonSecondText);
    projectsCardsCarousel.appendChild(mainProjectCard);
    
    mainProjectCard.appendChild(mainProjectCardTwoColumns);
    mainProjectCardTwoColumns.appendChild(mainProjectImage);
    mainProjectImage.appendChild(projectImageUrl);
    mainProjectCardTwoColumns.appendChild(mainProjectInfo);
    mainProjectInfo.appendChild(mainProjectInfoDate);
    mainProjectInfo.appendChild(mainProjectInfoTitle);
    mainProjectInfo.appendChild(mainProjectInfoDescription);

    const mainProjectCardTechnologies = document.createElement("div");
    mainProjectCardTechnologies.className = "main-project-card-technologies";
    mainProjectCardTwoColumns.appendChild(mainProjectCardTechnologies);
    const mainProjectCardTechnologiesRow = document.createElement("div");
    mainProjectCardTechnologiesRow.style.display = "flex";
    mainProjectCardTechnologiesRow.style.flexDirection = "row";
    mainProjectCardTechnologiesRow.style.justifyContent = "center";
    mainProjectCardTechnologies.appendChild(mainProjectCardTechnologiesRow);
    project.technologies.map((tech) => {
        const mainProjectCardTechnologiesIcon = document.createElement("img");
        mainProjectCardTechnologiesIcon.style.width = "32px";
        mainProjectCardTechnologiesIcon.style.height = "32px";
        mainProjectCardTechnologiesIcon.style.margin = "2px";
        projectsIcon.map((icon) => {
            if (icon.tech === tech) {
                mainProjectCardTechnologiesIcon.src = icon.src;
            };
        });
        mainProjectCardTechnologiesRow.appendChild(mainProjectCardTechnologiesIcon);
    });
    mainProjectCardTwoColumns.appendChild(mainProjectBtns);
    mainProjectBtns.appendChild(mainProjectButtonOneUrl);
    mainProjectBtns.appendChild(mainProjectButtonSecond);
    
    
    
});