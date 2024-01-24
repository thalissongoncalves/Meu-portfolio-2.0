import projectsData from "./projects.js";

const filtersBtnBlock = document.querySelector(".main-projects-buttons-filter");
const projects = ["TODOS", "HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "PYTHON", "REACT", "WORDPRESS"];
const projectsCardsCarousel = document.querySelector(".main-projects-cards-carousel");

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

projectsData.map((project) => {
    console.log(project)
});

const filterBtns = document.querySelector(".main-projects-buttons-filter").children;
const filterBtnsArray = Object.entries(filterBtns).map(([chave, valor]) => valor);
const filterBtnsSelected = []

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
        }
    });
});

{/* <div class="main-project-card">
    <div class="main-project-card-two-columns">
        <div>
            <img src="./images/project-one.png" alt="imagem do projeto Naya Outlet" style="border-radius: 5px; width: 100%"/>
        </div>
        <div style="padding-left: 20px;">
            <h2>01 - Naya Outlet</h2>
            <p>Loja de roupas com foco em vendas online. O projeto foi feito em WordPress. Todo o projeto foi feito do zero. "Site"</p>
        </div>
        <div class="main-project-btns">
            <button><i class="fa-brands fa-github"></i> GitHub</button>
            <button><i class="fa-solid fa-link"></i> Deploy</button>
        </div>
        <div class="main-project-card-technologies">
            <div style="display: flex; flex-direction: row; justify-content: right;">
                <img width="32" height="32" src="https://img.icons8.com/color/32/wordpress.png" alt="wordpress"/>
                <img width="32" height="32" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                <img width="32" height="32" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                <img width="32" height="32" src="https://img.icons8.com/plasticine/100/react.png" alt="react"/>
            </div>
        </div>
    </div>
</div> */}