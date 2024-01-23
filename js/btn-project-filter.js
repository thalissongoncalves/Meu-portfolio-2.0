const filtersBtnBlock = document.querySelector(".main-projects-buttons-filter");
const projects = ["TODOS", "HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "PYTHON", "REACT", "WORDPRESS"];

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

const filterBtns = document.querySelectorAll(".btn-main-project-filter");
const filterBtnsArray = Object.entries(filterBtns).map(([chave, valor]) => valor);
filterBtnsArray.map((btn) => {
    if (btn.className === "btn-main-project-filter") {
        btn.addEventListener("click", () => {
            btn.className = "btn-main-project-filter-active";
        });
    }
});
filterBtnsArray.map((btn) => {
    if (btn.className === "btn-main-project-filter-active") {
        btn.addEventListener("click", () => {
            btn.className = "btn-main-project-filter";
        });
    }
});