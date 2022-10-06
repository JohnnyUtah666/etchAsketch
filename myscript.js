function genDivs(num) {
    document.querySelector("#container");
    let e = document.container;
    for (let i = 0; i < num; i++) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.display = "flex";
        row.style.flexDirection = "row";
        row.style.flexWrap = "wrap";
        row.style.height = "100%";
        row.style.width = "100%";
        
        for (let j = 1; j <= num; j++) {
            let column = document.createElement("div");
            column.className = "column";
            column.addEventListener("mouseenter", () => {
                column.style.backgroundColor = "black";
            })
            column.style.flexBasis = "100%";
            column.style.borderStyle = "solid";
            column.style.borderWidth = "1px";
            column.style.borderColor = "black";
            
            
            row.appendChild(column);
        }
        container.appendChild(row);   
}

}

const thirty = document.querySelector("#thirty");
const fifty = document.querySelector("#fifty");
const seventy = document.querySelector("#seventy");

function clearAll() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
}

genDivs(30);

thirty.addEventListener("click", () => {
    clearAll();
    genDivs(30);
});

fifty.addEventListener("click", () => {
    clearAll();
    genDivs(50);
});

seventy.addEventListener("click", () => {
    clearAll();
    genDivs(70);
});


