let newParagraph = document.createElement("p");
let mainDiv = document.getElementById("main");

for (i = 0; i < 16; i ++){
    let rowDiv = document.createElement("div");
    for (j = 0; j < 16; j ++){
        let colDiv = document.createElement("div");
        colDiv.setAttribute("class", "divBox");
        rowDiv.appendChild(colDiv);
    }
    mainDiv.appendChild(rowDiv);
}